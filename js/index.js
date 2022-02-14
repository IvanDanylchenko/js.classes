"use strict";

class MyArray {
  constructor() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this[i] = arguments[i];
    }
    this.length = arguments.length;
  }
}

//###################################

class RangeValidator {
  constructor(from, to) {
    this.fromValue = from;
    this.toValue = to;
  }
  set fromValue(v) {
    if (typeof v !== "number") {
      throw new TypeError("value must be number");
    }
    if (Number.isNaN(v)) {
      throw new RangeError("value must be not NaN");
    }
    if ("_toValue" in this && v > this.toValue) {
      throw new RangeError("from should be <= to");
    }
    this._fromValue = v;
  }
  get fromValue() {
    return this._fromValue;
  }
  set toValue(v) {
    if (typeof v !== "number") {
      throw new TypeError("value must be number");
    }
    if (Number.isNaN(v)) {
      throw new RangeError("value must be not NaN");
    }
    if (v < this.fromValue) {
      throw new RangeError("from should be <= to");
    }
    this._toValue = v;
  }
  get toValue() {
    return this._toValue;
  }
  validate(v) {
    if (typeof v !== "number" || Number.isNaN(v)) {
      return false;
    }
    return v >= this.fromValue && v <= this.toValue;
  }
  get range() {
    return [this.fromValue, this.toValue];
  }
}

try {
  const range1 = new RangeValidator(1, 5.5); //почему то не работает когда значение меняю на (10, 5.5), не выдает ошибку
  range1.fromValue = 5;
  range1.toValue = 80;
  console.log("range1.fromValue :>> ", range1.fromValue);
  console.log("range1.toValue :>> ", range1.toValue);
  console.log("range1.range :>> ", range1.range);
  console.log("range1.validate(10) :>> ", range1.validate(10));
  console.log("range1.validate(100) :>> ", range1.validate(100));
} catch (error) {
  console.log("error :>> ", error);
}
