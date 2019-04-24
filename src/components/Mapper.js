export class StringMapper {
    constructor(content) {
        this._content = content;
    }

    resolve() {
        return this._content
    }
}

export class TemplateMapper {
    constructor(context, template) {
        this._templateArray = TemplateMapper.parseTemplate(template);
        this._resolvedCache = null
        if (this._templateArray.length === 1 && this._templateArray[0].type === "plain") {
            this._resolvedCache = this._templateArray[0].content
        }
        this._context = context
        this.observeContextKeys()
    }

    observeContextKeys() {
        for (let s of this._templateArray) {
            if (s.type === "placeholder") {
                this._context.observeKey(s.content, this)
            }
        }
    }

    /**
     * invalid the cache, cause next access to be recalculated
     * @param key
     * @param originalValue
     * @param newValue
     */
    accept(key, originalValue, newValue) {
        this._resolvedCache = null
    }

    /**
     * valid for the only context
     * @returns {null|*}
     */
    resolve() {
        if (this._resolvedCache !== null) {
            return this._resolvedCache
        }
        this._resolvedCache = ""
        for (let s of this._templateArray) {
            if (s.type === "plain") {
                this._resolvedCache += s.content
            } else if (s.type === "placeholder") {
                let content = this._context.resolve(s.content)
                if (content === null) {
                    throw  "cannot resolve key:" + s.content;
                }
                this._resolvedCache += content
            }
        }
        return this._resolvedCache
    }

    static parseTemplate(template) {
        let res = []
        let s = template
        let i = 0
        let placeStart = "${"
        let placeEnd = "}"
        while (i < s.length) {
            let startIdx = s.indexOf(placeStart, i)
            if (startIdx === -1) {
                res.push({type: "plain", content: s.substring(i)})
                break
            }
            let endIdx = s.indexOf(placeEnd, startIdx + placeStart.length)
            if (endIdx === -1) {
                throw "${ is found, but no ending }";
            }
            let name = s.substring(startIdx + placeStart.length, endIdx)
            if (!name) {
                throw "${} is empty";
            }
            if (i < startIdx) {
                res.push({type: "plain", content: s.substring(i, startIdx)})
            }
            res.push({type: "placeholder", content: name})
            i = endIdx + placeEnd.length
        }
        return res
    }
}

export class PriorityMapperQueue {
    constructor() {
        this._mappers = []
        this._names = {}
        this._maxMapper = null;
    }

    /**
     * {name
     *   priority
     *   mapper
     * }
     * @param config
     */
    addMapper(config) {
        let cfg = {...config}
        if (cfg.name === null) {
            throw "mapper name cannot be null"
        }
        if (cfg.mapper === null) {
            throw  "mapper cannot be null"
        }
        if (cfg.name in this._names) {
            throw "mapper name already exists"
        }
        this._names[cfg.name] = cfg.name
        this._mappers.push(config)
        // update
        if (this._maxMapper === null) {
            this._maxMapper = config
        } else if (config.priority != null && (this._maxMapper.priority === null || this._maxMapper.priority > config.priority)) {
            this._maxMapper = config
        }
    }

    removeMapper(name) {
        let foundIdx = null
        let found = null
        for (let idx in this._mappers) {
            let m = this._mappers[idx]
            if (m.name === name) {
                foundIdx = idx
                found = m
                break
            }
        }
        if (found != null) {
            this._mappers.splice(foundIdx, 1)
            if (found === this._maxMapper) {
                this._maxMapper = null
                this.updateMax()
            }
        }
        delete this._names[name]
    }

    get maxMapper() {
        return this._maxMapper;
    }

    updateMax() {
        for (let m of this._mappers) {
            if (this._maxMapper === null) {
                this._maxMapper = m
            } else if (m.priority != null && (this._maxMapper.priority == null || this._maxMapper.priority > m.priority)) {
                this._maxMapper = m
            }
        }
    }

    /**
     * valid for the only context
     * @returns {null|*}
     */
    resolve() {
        return this._maxMapper != null ? this._maxMapper.mapper.resolve() : null;
    }
}
