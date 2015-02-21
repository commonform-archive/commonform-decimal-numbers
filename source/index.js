// 1.
//   1.1.
//     1.1.1.
//       1.1.1.1.
//
// Section 1.1.1.1.

var alpha = require('lower-alpha');

var number = function(numbering) {
  return numbering
    .map(function(component) {
      var element = component.element;
      var series = component.series;
      return series.of > 1 ?
        alpha(series.number) + '-' + element.number :
        element.number;
    })
    .join('.')
    .toUpperCase();
};

exports.provision = function(numbering) {
  return number(numbering) + '.';
};

exports.reference = function(numbering) {
  return 'Clause ' + number(numbering);
};

exports.version = '0.1.1';
