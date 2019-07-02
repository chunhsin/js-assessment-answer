if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(['jquery'], function($) {
  return {
    async: function(value) {
      var deferred = $.Deferred();
      deferred.resolve(value);
      return deferred.promise();
    },

    manipulateRemoteData: function(url) {
      var deferred = $.Deferred();
      $.ajax({
        url: url,
        success: function(res) {
          deferred.resolve(res.people.map(function(person) {
            return person.name;
          }).sort());
        }
      });
      return deferred.promise();
    }
  };
});
