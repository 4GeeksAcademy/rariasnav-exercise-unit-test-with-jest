const { sum } = require('./app.js');

test('adds 14 + 9 equal to 23', () => {
    let total = sum(14,9)
    expect(total).toBe(23)
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.58 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its supposed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 dollar are 106.58 yen, then 3.5 dollars should be (3.5 * 106.58)
    const expected = 3.5 * 106.58; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(373.03); //1 dollar are 106.58 yen, then 3.5 dollars should be = (3.5 * 106.58)
})

test("One yen should be 0.006 punds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its supposed to be used
    const pounds = fromYenToPound(3600)

    // if 1 yen are 0.006 pounds, then 10 yen should be (10 * 0.006)
    const expected = 10 * 0.006; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(10)).toBeCloseTo(0.06); //1 yen are 0.006 punds, then 10 yen should be = (10 * 0.006)
})