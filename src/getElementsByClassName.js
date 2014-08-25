// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var results = [];//new HTMLCollection();
  var searchExpression = new RegExp("\\b"+className+"\\b");

  var recursiveSearch = function(element){
    //If element is one of className, push to results
    if (searchExpression.test(element.className)){
      results.push(element);
    }

    //If element has child elements, call this function on all of them
    if (element.hasChildNodes()){
      for (var i=0; i<element.childNodes.length; i++){
        recursiveSearch(element.childNodes[i]);
      }
    }
    return;
  }

  recursiveSearch(document.body);
  return results;
};
