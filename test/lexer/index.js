const {lex,tokenVocabulary} = require("./step1_lexing")

const inputText = "SELECT column1 FROM table2"

function logParsedText(text){
    const lexingResult = lex(text)
    console.log(JSON.stringify(lexingResult, null, "\t"))
}

// logParsedText(inputText)


logParsedText("SEELCT * FROM t_ad_info a WHERE a.status = 1")
