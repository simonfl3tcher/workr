// Generated by CoffeeScript 1.7.1
(function() {
  define(["jquery", "underscore", "backbone", "models/task"], function($, _, Backbone, Task) {
    var tasks;
    tasks = Backbone.Collection.extend({
      model: Task,
      url: "/tasks"
    });
    return tasks;
  });

}).call(this);
