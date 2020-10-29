import { myFunction } from './index'

describe('Démo pack', function() {

it('Should to be []', function() {
    expect(myFunction("a", 0)).toStrictEqual([])
})

it('Should to be [{word: a, occurence: 1}]', function() {
    expect(myFunction("a", 1)).toStrictEqual([
        {word: "a", occurence: 1}
    ])
})

it('Should to be [{word: a, occurence: 1}]', function() {
    expect(myFunction("a", 3)).toStrictEqual([
        {word: "a", occurence: 1}
    ])
})

it('Should to be [{word: a, occurence: 2}]', function() {
    expect(myFunction("a a", 3)).toStrictEqual([
        {word: "a", occurence: 2}
    ])
})

it('Should to be [{word: a, occurence:2}, {word: b, occurence:1}]', function() {
    expect(myFunction("a a b", 3)).toStrictEqual([
        {word: "a", occurence:2}, {word: "b", occurence:1}
    ])
})

it('Should to be [{word: zblah, occurence:3}, {word: bar, occurence:2}, {word: baz, occurence:2}]', function() {
    expect(myFunction("baz bar foo foo zblah zblah zblah baz toto bar", 3)).toStrictEqual([
        {word: "zblah", occurence:3}, {word: "bar", occurence:2}, {word: "baz", occurence:2}
    ])
})

})