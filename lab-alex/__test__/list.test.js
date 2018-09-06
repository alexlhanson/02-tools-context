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
  test('shows adding initial item to list at index 0',() => {
    let actual = new List
    actual.push('Hello');
    let expectedValue = { 0: 'Hello', length: 1};
    expect(actual).toEqual(expectedValue);
  })
})