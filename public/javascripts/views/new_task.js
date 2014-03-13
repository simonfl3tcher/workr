// Generated by CoffeeScript 1.7.1
(function() {
 define(["jquery", "underscore", "backbone", "vent", "validatable", "text!templates/tasks/new_task.haml", "handlebars"], function($, _, Backbone, Vent, Validatable, newTaskTemplate, Handlebars) {
  var newTaskView;
  newTaskView = Backbone.View.extend({
    initialize: function() {
      this.listenTo(this.model, 'invalid', this.renderErrors);
      this.listenTo(this.model, "error", this.parseErrorResponse);
      this.listenTo(this.model, 'sync', this.render);
      if (!this.model.isNew()) {
        return this.model.fetch();
      }
    },
    template: Handlebars.compile(newTaskTemplate),
    events: {
      'submit': 'saveProject'
    },
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },
    saveProject: function(e) {
      e.preventDefault();
      this.model.set({
        name: this.$("#name").val()
      });
      console.log(this.model.get('id'));
      console.log('123213');
      if (typeof this.model.get('id') === 'undefined') {
        if (this.$("#comment").val() === '') {
          this.model.set({
            comments: []
          });
        } else {
          this.model.set({
            comments: [
              {
                comment: this.$("#comment").val(),
                by: 'John Doe',
                created_at: new Date()
              }
            ]
          });
        }
      }
      this.model.set({
        importance: this.$("#importance").val()
      });
      return this.model.save(null, {
        success: (function(_this) {
          return function(model, data) {
            Vent.trigger("task:create", model);
            return _this.clearForm();
          };
        })(this)
      });
    },
    clearForm: function() {
      this.clearErrors();
      delete this.model.id;
      return this.model.reset({});
    }
  });
  _.extend(newTaskView.prototype, Validatable);
  return newTaskView;
});

}).call(this);
