'use strict';

const List = require('../lib/list.js');

//create base instance for testing
let testCase = new List;
for (let i = 0; i < 5; i++){
  testCase.push(i);
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
    expectedValue = 4
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
    let expectedValue = 4;
    expect(actual).toEqual(expectedValue);
  })

  test('shows undefined if list is empty',() => {
    let actual = emptyCase.pop();  
    let expectedValue = undefined;
    expect(actual).toEqual(expectedValue);
  })

})
