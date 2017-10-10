// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json === 'true') {
    return true; 
  }

  if (json === 'false') {
    return false;  
  }

  if (json === 'null') {
    return null;
  }

  if (parseInt(json) >= 0 || parseInt(json) <= 0) {
    return parseFloat(json);
  }


  if (json[0] === '[') {
    if (json === '[]') {
      return [];
    }
    var result = json.slice(1, json.length - 1);
    result = result.split(',');
    return result.map(function(item) {
      item = item.trim();
      return parseJSON(item); 
    });
  }

  if (json[0] === '{') {
    if (json === '{}') {
      return {};
    }
    var temp = {};
    var result = json.slice(1, json.length - 1);
    result = result.split(',');
    result.forEach(function(item) {
      var key = item.slice(0, item.indexOf(':'));
      key = key.trim();
      var value = item.slice(item.indexOf(':') + 1);
      value = value.trim();
      key = parseJSON(key);
      temp[key] = parseJSON(value);
    });
    return temp;
  }

  if (json[0] === '"') {
    return json.slice(1, json.length - 1);
  }

};

// result = '"a": "b", "c": "d"'
// key = '"a"'
// value = '"b"'
// temp = {a: 'b'}














// empty strings
