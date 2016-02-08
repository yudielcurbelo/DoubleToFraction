var fractions = {
  f1_1: { name: '', value: 0.0000 },
  f1_16: { name: '1/16', value: 0.0625 },
  f1_8: { name: '1/8', value: 0.1250 },
  f3_16: { name: '3/16', value: 0.1875 },
  f1_4: { name: '1/4', value: 0.2500 },
  f5_16: { name: '5/16', value: 0.3125 },
  f3_8 : { name: '3/8', value: 0.3750 },
  f7_16: { name: '7/16', value: 0.4375 },
  f1_2: { name: '1/2', value: 0.5000 },
  f9_16: { name: '9/16', value: 0.5625 },
  f5_8: { name: '5/8', value: 0.6250 },
  f11_16: { name: '11/16', value: 0.6875 },
  f3_4: { name: '3/4', value: 0.7500 },
  f13_16: { name: '13/16', value: 0.8125 },
  f7_8: { name: '7/8', value: 0.8750 },
  f15_16: { name: '15/16', value: 0.9375 }
}

var getFraction = function(number) {
  var firstNumber = Math.trunc(number);
  var secondNumber = Math.round((number - firstNumber) * 10000) / 10000;
  var strFraction = '';
  var fakeNumber = 0.0313; // 1/32"


  if (secondNumber <= fractions.f1_1.value + fakeNumber) {
      secondNumber = fractions.f1_1.value;
      strFraction = fractions.f1_1.name;
  }
  else if (secondNumber <= fractions.f1_16.value + fakeNumber) {
      secondNumber = fractions.f1_16.value;
      strFraction = fractions.f1_16.name;
  }
  else if (secondNumber <= fractions.f1_8.value + fakeNumber) {
      secondNumber = fractions.f1_8.value;
      strFraction = fractions.f1_8.name;
  }
  else if (secondNumber <= fractions.f3_16.value + fakeNumber) {
      secondNumber = fractions.f3_16.value;
      strFraction = fractions.f3_16.name;
  }
  else if (secondNumber <= fractions.f1_4.value + fakeNumber) {
      secondNumber = fractions.f1_4.value;
      strFraction = fractions.f1_4.name;
  }
  else if (secondNumber <= fractions.f5_16.value + fakeNumber) {
      secondNumber = fractions.f5_16.value;
      strFraction = fractions.f5_16.name;
  }
  else if (secondNumber <= fractions.f3_8.value + fakeNumber) {
      secondNumber = fractions.f3_8.value;
      strFraction = fractions.f3_8.name;
  }
  else if (secondNumber <= fractions.f7_16.value + fakeNumber)  {
      secondNumber = fractions.f7_16.value;
      strFraction = fractions.f7_16.name;
  }
  else if (secondNumber <= fractions.f1_2.value + fakeNumber) {
      secondNumber = fractions.f1_2.value;
      strFraction = fractions.f1_2.name;
  }
  else if (secondNumber <= fractions.f9_16.value + fakeNumber) {
      secondNumber = fractions.f9_16.value;
      strFraction = fractions.f9_16.name;
  }
  else if (secondNumber <= fractions.f5_8.value + fakeNumber) {
      secondNumber = fractions.f5_8.value;
      strFraction = fractions.f5_8.name;
  }
  else if (secondNumber <= fractions.f11_16.value + fakeNumber) {
      secondNumber = fractions.f11_16.value;
      strFraction = fractions.f11_16.name;
  }
  else if (secondNumber <= fractions.f3_4.value + fakeNumber) {
      secondNumber = fractions.f3_4.value;
      strFraction = fractions.f3_4.name;
  }
  else if (secondNumber <= fractions.f13_16.value + fakeNumber) {
      secondNumber = fractions.f13_16.value;
      strFraction = fractions.f13_16.name;
  }
  else if (secondNumber <= fractions.f7_8.value + fakeNumber) {
      secondNumber = fractions.f7_8.value;
      strFraction = fractions.f7_8.name;
  }
  else if (secondNumber <= fractions.f15_16.value + fakeNumber) {
      secondNumber = fractions.f15_16.value;
      strFraction = fractions.f15_16.name;
  }
  else {
      secondNumber = fractions.f1_1.value;
      strFraction = fractions.f1_1.name;
      firstNumber += 1;
  }

  if (strFraction == ''){
      return firstNumber + '"';
  }
  else {
      return firstNumber + ' ' + strFraction + '"';
  }
}
