const {
    verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached
} = require("./passWordVerifier")

test('Password is not null', () => {
    const str = 'notNull'
    const expected = true
    let password = isNotNull(str)
    expect(password).toEqual(expected)
})

test('Password is not null', () => {
    const str = null
    const expected = false
    let password = isNotNull(str)
    expect(password).toEqual(expected)
})


test('Password is shorter than 9 characters', () => {
    const str = 'Hallo123'
    const expected = true
    let password = hasRightLength(str)
    expect(password).toEqual(expected) 
})

test('Password is shorter than 9 characters', () => {
    const str = 'Hallo12345'
    const expected = false
    let password = hasRightLength(str)
    expect(password).toEqual(expected) 
})

test('Password has digit', () => {
    const str = 'Hallo123'
    const expected = true
    let password = hasDigit(str)
    expect(password).toEqual(expected)
})

test('Password has digit', () => {
    const str = 'HalloEenTweeDrie'
    const expected = false
    let password = hasDigit(str)
    expect(password).toEqual(expected)
})

test('Password has 1 or more Uppercase characters', () => {
    const str = 'HalloDaar'
    const expected = true
    let password = hasUpperCaseCharacter(str)
    expect(password).toEqual(expected)
})

test('Password has 1 or more Uppercase characters', () => {
    const str = 'hallodaar'
    const expected = false
    let password = hasUpperCaseCharacter(str)
    expect(password).toEqual(expected)
})

test('Password has 1 or more Lowercase characters', () => {
    const str = 'HalloDaar'
    const expected = true
    let password = hasLowerCaseCharacter(str)
    expect(password).toEqual(expected)
})

test('Password has 1 or more Lowercase characters', () => {
    const str = 'HALLODAAR'
    const expected = false
    let password = hasLowerCaseCharacter(str)
    expect(password).toEqual(expected)
})


test('Minimum of 3 conditions reached', () => {
    const str = 'Hallo123'

    const conditions = [
        isNotNull(str),
        hasRightLength(str),
        hasUpperCaseCharacter(str),
        hasLowerCaseCharacter(str),
        hasDigit(str)
    ];
    
    const expected = true
    let condition = minimumConditionsReached(conditions)
    expect(condition).toEqual(expected)
})

test('Minimum of 3 conditions reached', () => {
    const str = 'HALLOHALLO'
    
    const conditions = [
        isNotNull(str),
        hasRightLength(str),
        hasUpperCaseCharacter(str),
        hasLowerCaseCharacter(str),
        hasDigit(str)
    ];
    
    const expected = false
    let condition = minimumConditionsReached(conditions)
    expect(condition).toEqual(expected)
})

const goodPassWords = [
    'Hallo123',
    'Hallo',
    'hallo123',
    'z1',
    'Zd183@!'
]

const badPassWords = [
    null,
    '',
    '123456',
    'HALLO',
    'H1'
]

goodPassWords.forEach(string => {
    test('Password is verified ok', () => {
        const expected = true
        let passWordOk = verifyPassword(string)
        expect(passWordOk).toEqual(expected)
    })
})

badPassWords.forEach(string => {
    test('Password is verified ok', () => {
        const expected = false
        let passWordOk = verifyPassword(string)
        expect(passWordOk).toEqual(expected)
    })
})


