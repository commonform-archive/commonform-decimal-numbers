// 1.
//   1.1.
//     1.1.1.
//       1.1.1.1.
//
// Section 1.1.1.1.

var Immutable = require('immutable');
var alpha = require('lower-alpha');

var standardGet = function(object, key) {
  return object[key];
};

var immutableGet = function(object, key) {
  return object.get(key);
};

var number = function(numbering) {
  var get = Immutable.List.isList(numbering) ?
    immutableGet : standardGet;
  return numbering
    .map(function(component) {
      var element = get(component, 'element');
      var series = get(component, 'series');
      return get(series, 'of') > 1 ?
        alpha(get(series, 'number')) + '-' + get(element, 'number') :
        get(element, 'number');
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

exports.version = '0.1.0';
