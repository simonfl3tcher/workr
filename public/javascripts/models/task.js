// Generated by CoffeeScript 1.7.1
(function() {
  define(["jquery", "underscore", "backbone"], function($, _, Backbone) {
    var task;
    task = Backbone.Model.extend({
      urlRoot: "/tasks",
      parse: function(response) {
        if (typeof response === 'object') {
          response.id = response._id.$oid;
        } else {
          response = JSON.parse(response);
          console.log(response);
          response.id = response._id.$oid;
        }
        return response;
      },
      defaults: {},
      initialize: function() {
        return this.cid = _.uniqueId('c');
      },
      validate: function(attrs, options) {
        var errors;
        errors = {};
        if (!attrs.name) {
          errors.name = ["Can't be blank"];
        }
        if (!attrs.importance) {
          errors.importance = ["Can't be blank"];
        }
        if (!_.isEmpty(errors)) {
          return errors;
        }
      },
      reset: function(opt) {
        this.clear(opt);
        return this.set(this.defaults);
      }
    });
    return task;
  });

}).call(this);