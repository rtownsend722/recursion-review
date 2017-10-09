// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // string
  if (typeof(obj) === 'string') {
    return obj = '"' + obj + '"';
  }
  //undefined
  if (obj === undefined || obj === null || obj === '') {
    return 'null';
  }
  // boolean
  if (typeof(obj) === 'boolean') {
    return obj.toString();
  }
  // number
  if (typeof(obj) === 'number') {
    return obj.toString();
  }
  // array
  if (Array.isArray(obj)) {
    var result = [];
    obj.forEach(function(item) {
      result.push(stringifyJSON(item));   
    });
    return '[' + result.join(',') + ']';
  }
  // object
  if (typeof(obj) === 'object') {
    var result = [];
    for (key in obj) {
      if (typeof(key) === 'function' || typeof(obj[key]) == 'function' || typeof(key) === undefined || typeof(obj[key]) === undefined || key === 'undefined') {

      } else {
        result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
      
    }
    return '{' + result.join(',') + '}';
  }
  // function
  
};

// {a: 1, b: 2, c: 3}