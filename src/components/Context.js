const Notifier = require("./Notifier").default

export default class Context {
    constructor() {
        this._mappers = {}
    }

    observeKey(key, observer) {
        this.getInitedMapper(key).notifier.addObserver(observer)
    }

    unobserveKey(key, observer) {
        if (!(key in this._mappers)) {
            return
        }
        this._mappers[key].notifier.removeObserver(observer)
    }

    resolve(key) {
        let mapper = this._mappers[key];
        if (mapper.value !== null) {
            return mapper.value
        }
        if (!mapper || !mapper.mapper) {
            return null
        }
        return mapper.mapper.resolve()
    }

    setMapper(key, mapper) {
        this.getInitedMapper(key).mapper = mapper
    }

    setValue(key, value) {
        let m = this.getInitedMapper(key)
        if (m.value !== value) {
            let originalValue = m.value
            m.value = value
            if (m.notifier) {
                m.notifier.notifyObservers(key, originalValue, value)
            }
        }
    }


    getInitedMapper(key) {
        if (!(key in this._mappers)) {
            this._mappers[key] = {
                notifier: new Notifier(),
                mapper: null,
                value: null
            }
        }
        return this._mappers[key]
    }
}
