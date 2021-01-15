const functions = require('./functions');


it('Adds 2 + 2 to equal 4 ', () =>{
    expect(functions.add(2, 2)).toBe(4);
});
//toBeNull
//toBeUndefined
//toBeUndefined
//toBeTruthy
//toBeFalsy

it('Should be null', () =>{
    expect(functions.isNull()).toBeNull();
});
//Os valores falsos do JavaScript: null, undefined, 0
it('Should be Falsy', () =>{
    expect(functions.checkValue(null)).toBeFalsy();
});

//toBe para tipos primitivos como inteiro ou String
//toEqual para array e objetos de
//testar com toBe, dar erro e corrigir para toEqual


it(`User Should be Glaucio Santos object`,()=>{
    expect(functions.createUser()).toEqual({
        firstName: 'Glaucio',
        lastName: 'Santos'
    });
})
//toBeLessThan e depois toBeLessThanOrEqual
it(`Should be under 1600`, ()=>{
    const val1 = 800;
    const val2 = 800;
    expect(val1 + val2).toBeLessThanOrEqual(1600);
})

//Regex
it('There is no JS in Developer', ()=>{
    expect("Developer").not.toMatch(/JS/i);
})
//Array
it('Admin should be in usernames', ()=>{
    const usernames = ["glaucio", "joao", "dj", "rafael"]
    expect(usernames).toContain('dj');
})


//Array