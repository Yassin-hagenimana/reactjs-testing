const functions=require("./functions")
test("2+2 should be 4 ",()=>{
    expect(functions.add(2,2)).toBe(4)
})

test("2+2 should not equal to 5",()=>{
    expect(functions.add(2,2)).not.toBe(5)
})

/**
 * check for truthh and fallcy values
 * to be null only matches null
 * toBeUndefined matches only to be undefined
 * toBeDefined is the opposite of toBeUnDefined
 * toBeTruthy matches anything tha an if statement trets as true
 * toBeFalsy matches anything that if statement treats as false
 *  */
//toBeNull
test("should be  null",()=>{
    expect(functions.isNull()).toBeNull()
})
//toBeFalsy
test(" To be falsy",()=>{
    expect(functions.checkValue(null)).toBeFalsy()
})

//toEqual
test("Should be Yassin Hagenimana object",()=>{
    expect(functions.createUser()).toEqual({
        firstName:"Yassin",
        lastName:"Hagenimana"
    })
})

//less than and greater than

test("Should be less than 1600",()=>{
    const load1=700
    const load2=800
    expect(load1+load2).toBeLessThan(1600)
})

test("Should be less than 1600",()=>{
    const load1=800
    const load2=800
    expect(load1+load2).toBeLessThanOrEqual(1600)
})

//regex
test("There is no I or i in team",()=>{
    expect("team").not.toMatch(/I/i)
})

//arrays
test("admin should be in usernames",()=>{
    const usernames=['yassin','draxler','admin']
    expect(usernames).toContain("admin")
})


//working with async data
//promise
test("User fetched name should be Leanne Graham",()=>{
    expect.assertions(1)
    return functions.fetchUser()
    .then(data=>{
        expect(data.name).toEqual("Leanne Graham")
    })
})

//async and await
test("User fetched name should be Leanne Graham",async()=>{
    expect.assertions(1)
    const data = await functions.fetchUser()
        expect(data.name).toEqual("Leanne Graham")
})