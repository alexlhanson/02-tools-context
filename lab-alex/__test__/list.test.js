'use strict';

const List = require('../lib/list.js');

//create base instance for testing
let testCase = new List;
for (let i = 0; i < 5; i++){
  testCase.push(i + 5);
}

let emptyCase = new List;

/********************************************************************************
*         Length Tests                                                          *
********************************************************************************/
describe ('list length and instantiation', () => {
  test('should show that it is getting the List constructor with initial length', () => {
    let actual = new List;
    let expectedValue = 0;
    expect(actual.length).toBe(expectedValue);
  })

  test('should show length of list', () => {
    let actual = new List;
    actual.length = 4;
    let expectedValue = 4;
    expect(actual.length).toBe(expectedValue);
  })
})

/********************************************************************************
*         Push Tests                                                            *
********************************************************************************/

describe ('list push method', () => {
  test('shows object is instantiated with item and length',() => {
    let actual = new List;
    actual.push('Hello');
    let expectedValue = { 0: 'Hello', length: 1};
    expect(actual).toEqual(expectedValue);
  })

  test('shows item added to bottom of object', () => {
    let actual = testCase.length;
    let expectedValue = 5;
    expect(actual).toEqual(expectedValue); 

    actual = testCase[4];
    expectedValue = 9
    expect(actual).toBe(expectedValue);
  })

})
/********************************************************************************
*         Pop Tests                                                             *
********************************************************************************/
describe ('list pop method', () => {

  test('shows object removes the last item',() => {
    let popTestCase = testCase;
    let actual = popTestCase.pop();  
    let expectedValue = 9;
    expect(actual).toEqual(expectedValue);
  })

  test('shows undefined if list is empty',() => {
    let actual = emptyCase.pop();  
    let expectedValue = undefined;
    expect(actual).toEqual(expectedValue);
  })

})

/********************************************************************************
*         slice Tests                                                           *
********************************************************************************/

describe ('list slice method', () => {

  test('shows list from start to end',() => {
    let sliceTestCase = testCase.slice(0, 2);
    let actual = sliceTestCase.length
    let expectedValue = 2;
    expect(actual).toEqual(expectedValue);
  })

  test('shows list from start to end',() => {
    let sliceTestCase = testCase.slice(2, 4);
    let actual = sliceTestCase.length
    let expectedValue = 2;
    expect(actual).toEqual(expectedValue);
  })
})

/********************************************************************************
*         forEach Tests                                                         *
********************************************************************************/

describe('list forEach method', () => {
  test('show map with doubling', () => {
    let forEachTestCase = new List;
    testCase.forEach(x => forEachTestCase.push(x * 2))

    let actual = forEachTestCase[0];
    let expectedValue = testCase[0] * 2;
    expect(actual).toEqual(expectedValue)
  })
})

/********************************************************************************
*         map Tests                                                             *
********************************************************************************/

describe('list map method', () => {
  test('should show map with doubling', () => {
    let mapTestCase = testCase.map(x => x * 2);
    let actual = mapTestCase[0];
    let expectedValue = testCase[0] * 2;
    expect(actual).toEqual(expectedValue)
  })

  test('should show map with squaring', () => {
    let mapTestCase = testCase.map(x => x ** 2);
    let actual = mapTestCase[0];
    let expectedValue = testCase[0] ** 2;
    expect(actual).toEqual(expectedValue)
  })
})

/********************************************************************************
*         filter Tests                                                          *
********************************************************************************/

describe ('list filter method', () => {
  test('should show filtering for numbers over 7', () => {
    let filterTestCase = testCase.filter(item => item > 6);
    let actual = filterTestCase[0];
    let expectedValue = 7;
    expect(actual).toEqual(expectedValue);
  })
})

/********************************************************************************
*         reduce Tests                                                          *
********************************************************************************/

  describe ('list reduce method', () => {
    test('should show reduce adding together each value', () => {
      let actual = testCase.reduce ((acc, curr) => acc + curr);
      let expectedValue = 26;
      expect(actual).toEqual(expectedValue);
    })

  })