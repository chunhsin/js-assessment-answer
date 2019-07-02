if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    indexOf: function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item)
          return i;
      }
      return -1;
    },

    sum: function(arr) {
      return arr.reduce(function(initValue, item) {
        return initValue + item;
      }, 0);
    },

    remove: function(arr, item) {
      return arr.filter(function(arrItem) {
        return arrItem !== item;
      });
    },

    removeWithoutCopy: function(arr, item) {
      while (arr.indexOf(item) > 0) {
        arr.splice(arr.indexOf(item), 1);
      }
      return arr;
    },

    append: function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate: function(arr) {
      arr.pop();
      return arr;
    },

    concat: function(arr1, arr2) {
      var newArray = [];
      arr1.forEach(function(item) {
        newArray.push(item);
      });
      arr2.forEach(function(item) {
        newArray.push(item);
      });
      return newArray;
    },

    insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count: function(arr, item) {
      return arr.filter(function(arrItem) {
        return arrItem === item;
      }).length;
    },

    duplicates: function(arr) {

    },

    square: function(arr) {

    },

    findAllOccurrences: function(arr, target) {

    }
  };
});
