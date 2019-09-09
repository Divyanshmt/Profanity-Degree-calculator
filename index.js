var  comments = require('./comments.json') 
var profanityWords = require('./profanityWords.json')


function degreeOfProfanity() {
    var count;
    Object.keys(comments).forEach(comment => {
        count = 0
        Object.keys(profanityWords).forEach((word, i) => {
            count += comments[comment].includes(word) ? profanityWords[word] : 0;
            if (i == Object.keys(profanityWords).length - 1) {
                console.log(comments[comment] + " ||||||| " + "Degree of Profanity ==> " + count)
            }
        })

    })
}

degreeOfProfanity() ;
