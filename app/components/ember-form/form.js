/**
 * Created by Zhou Wen Long on 6/11/2014 0011.
 */
Ember.Forms.Form = Ember.View.extend({
    tagName: 'form',
    model: null,
    attributeBindings: ['action'],
    classNameBindings: ['class'],
    action: ''
});

Ember.Handlebars.helper('em-form', Ember.Forms.Form);

export default Ember.Forms.Form;