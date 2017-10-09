// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  var results = [];
  var node = node || document.body;
  if (node.children) {
    for (var i = 0; i < node.children.length; i++) {
      var currentResults = getElementsByClassName(className, node.children[i]);
      results = currentResults.concat(results);
    }
  }
  if (node.classList.contains(className)) {
    results.unshift(node);
  }
  return results;
};

//