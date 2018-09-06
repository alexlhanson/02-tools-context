'use strict';

const list = require('../lib/list.js');

describe ('list-module', () => {
  test('should show that it is getting the List constructor', () => {
    let actual = new list;
    let expectedValue = 0;
    expect(actual.length).toBe(expectedValue);
  })

})