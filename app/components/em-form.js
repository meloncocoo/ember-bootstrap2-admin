/**
 * Created by Zhou Wen Long on 5/26/2014 0026.
 */
var Bootstrap = window.Bootstrap = window.Bootstrap == null ? Ember.Namespace.create({}) : window.Bootstrap;

Bootstrap.Form = Em.Object.create({});

var ControlLabel = Em.View.extend({
    tagName: ['label'],
    classNameBindings: ['class'],
    class: ['control-label'],
    template: Em.Handlebars.compile('{{view.content}}')
});

var Errors = Em.View.extend({
    tagName: ['span'],
    template: Em.Handlebars.compile('{{view.content}}')
});

var Controls = Em.ContainerView.extend({
    classNameBindings: ['class'],
    class: ['controls'],
    value: null,
    inputClass: [],
    init: function() {
        this._super();
        var value = this.get('value'), inputClass = this.get('inputClass');
        if (!Em.isEmpty(value)) {
            this.pushObject(Em.TextField.create({value: value, classNames: inputClass}));
        }
//        if (!Em.isEmpty(errors)) {
//            this.pushObject(Errors.create({}));
//        }
    }
});

Bootstrap.Form.ControlGroup = Em.ContainerView.extend({
    classNameBindings: ['class'],
    label: '',
    property: '',
    inputClass: [],
    model: Ember.computed.alias('parentView.model'),
    class: ['control-group'],
    init: function() {
        this._super();
        this.pushObject(ControlLabel.create({content: this.get('label')}));
        this.pushObject(Controls.create({
            value: this.get('model.' + this.get('property')),
            inputClass: this.get('inputClass')
        }));
    }
});

Ember.Handlebars.helper('bs-form-control-group', Bootstrap.Form.ControlGroup);

export default Em.View.extend({
    tagName: 'form',
    model: null,
    classNameBindings: ['class']
});