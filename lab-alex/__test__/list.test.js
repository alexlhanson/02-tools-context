'use strict';

const List = require('../lib/list.js');

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

describe ('list push method', () => {
  test('shows object is instantiated with item and length',() => {
    let actual = new List;
    actual.push('Hello');
    let expectedValue = { 0: 'Hello', length: 1};
    expect(actual).toEqual(expectedValue);
  })

  test('shows item added to bottom of object', () => {
    let listFive = new List;
    for (let i = 0; i < 5; i++){
      listFive.push(i);
    }

    let actual = listFive.length;
    let expectedValue = 5;
    expect(actual).toEqual(expectedValue); 

    actual = listFive[4];
    expectedValue = 4
    expect(actual).toBe(expectedValue);
  })

})