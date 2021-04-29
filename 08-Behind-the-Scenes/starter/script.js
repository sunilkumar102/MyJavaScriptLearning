'use strict';
//console.log(this);

const calAge = function (birthYear) {
  // console.log(2021 - birthYear);
  // console.log(this);
};

calAge(1998);

const calAgeArrow = birthYear => {
  //console.log(2021 - birthYear);
  //console.log(this);
};
calAgeArrow(1999);

const sunil = {
  firstName: 'sunilK',
  lastName: 'kumar',
  fullname: function () {
    console.log(this);
    console.log(`${this.firstName} ${this.lastName}`);
    const self = this;
    const isCorrect = function () {
      console.log(self.firstName);
      console.log(self);
    };
    isCorrect();
  },
};
sunil.fullname();

const ramesh = {
  firstName: 'RameshK',
  lastName: 'kumawat',
};
ramesh.fullname = sunil.fullname; // method borrowing

ramesh.fullname();
