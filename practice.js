const {validate} = require('./validate')


const add = (a,b) => {
    if(validate(a) === true && validate(b) === true){
        return a + b;
    } else
    return 'Not a number'

}

const multiple = (a,b) => {
    if(validate(a) === true && validate(b) === true){
        return a * b;
    } else
    return 'Not a number'

}

module.exports = {add, multiple};