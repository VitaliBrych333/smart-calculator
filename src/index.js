class SmartCalculator {
  constructor(initialValue) {
    this.initialValue = initialValue.toString();  // приводим к строковому типу
  }

  add(number) {
    this.initialValue = `${this.initialValue}+${number}`;  // вставка значений выражений в строку
    return this;
  }

  subtract(number) {
    this.initialValue = `${this.initialValue}-${number}`;
    return this;
  }

  multiply(number) {
    this.initialValue = `${this.initialValue}*${number}`;
    return this;
  }

  devide(number) {
    this.initialValue = `${this.initialValue}/${number}`;
    return this;
  }

  pow(number) {
    this.initialValue = `${this.initialValue}**${number}`;
    return this;
  }

  toString() {
    return eval(this.initialValue); // возврат исполнения строки с командами в виде числа
  }

}

module.exports = SmartCalculator;