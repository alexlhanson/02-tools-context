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

    console.log(this);
    for (let i = start; i < end; i++){
      slicedList.push(this[i])
    }
    // console.log(slicedList);

    slicedList.length = end - start;
    return slicedList;
  }

  //forEach method

  //map method

  //filter method

  //reduce method

}

module.exports = List;