

function indexOfNonEscaped(s,start,p,escapePrefix){
    let esLen = escapePrefix.length
    if(esLen==0){
        throw "escape prefix cannot be empty"
    }
    while(start < s.length){
        let idx = s.indexOf(p,start)
        if(idx===0 || s.slice(idx-1, idx-1+esLen)!=escapePrefix){
            return idx
        }
        start = idx+1
    }
    return -1
}
/**
 * 
 * @param {*} template 
 * @return {
 *       type:"function"|"placeholder",
 *       template: [{type:"plain"|"placeholder", content:<string or key>}] | function
 *    }
 */
function parseStringTemplateToArray(template,placeholderStart, placeholderEnd) {
    let res = []
    let s = template
    let i = 0
    let placeStart = placeholderStart || "${"
    let placeEnd = placeholderEnd || "}"
    while (i < s.length) {
        let startIdx = indexOfNonEscaped(s,i,placeStart,"\\")
        if (startIdx === -1) {
            res.push({
                type: "plain",
                content: s.substring(i)
            })
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
            res.push({
                type: "plain",
                content: s.substring(i, startIdx)
            })
        }
        res.push({
            type: "placeholder",
            content: name
        })
        i = endIdx + placeEnd.length
    }
    return res
}


function renderTemplateArray(templateArray,getter){
    let result = ""
    // this is important, we ensure we use the same value for the same key in the same pass
    let cache = {}
    for (let template of templateArray) {
        if (template.type === 'plain') {
            result += template.content
        } else if (template.type == 'placeholder') {
            let val = cache[template.content]
            if(val==null && !(template.content in cache)){
                cache[template.content] = val = getter.call(this,template.content)
                // can't be rendered
                if(val==null){
                    return null
                }
            }
            result += val
        }
    }
    return result
}

function templateToRender(template,getter){
    let templateArray = parseStringTemplateToArray(template)
    return function templateArrayRenderer(){
        // bind this dynamically
        return renderTemplateArray.call(this,templateArray,getter)
    }
}

export {
    parseStringTemplateToArray,
    renderTemplateArray,
    templateToRender
}