const {add,multiple} = require('./practice')
const {validate,} = require('./validate')

console.log(add(1,2))

test('return a boolean', ()=>{
    expect(validate('3')).toBe(false)
})

test('add 1 + 2 expect 3',()=>{
    expect(add(1,2)).toBe(3);
})

test('multiply 2 numbers return a result',()=>{
    expect(multiple(2,2)).toBe(4)
})


