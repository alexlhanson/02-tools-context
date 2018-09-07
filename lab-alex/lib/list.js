'use strict';

class List {
  constructor() {
    //length parameter
    this.length = 0;
  }
  //push method
  push(item) {
    this[this.length] = item;
    this.length++;
    return this.length
  }

  //pop method
  pop() {
    if (this.length === 0) return undefined;

    let poppedItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return poppedItem;
  }

  //slice method
  slice(start, end) {
    let slicedList = new List;

    if (!end) {
      end = this.length - 1;
    }

    for (let i = start; i < end; i++){
      slicedList.push(this[i])
    }

    slicedList.length = end - start;
    return slicedList;
  }

  //forEach method
  forEach (callback) {
    for(let i = 0; i < this.length; i++){
      callback(this[i], i, this);
    }    
  }
  //map method

  map (callback) {
    let mappedList = new List;
    for(let i = 0; i < this.length; i++){
      mappedList.push(callback(this[i], i, this))
    }
    return mappedList;
  }

  //filter method

  //reduce method

}

module.exports = List;