/**
 * Created by Zhou Wen Long on 6/11/2014 0011.
 */
Em.Forms.Controls = Em.ContainerView.extend({
    classNameBindings: ['class'],
    class: ['controls'],
    propertyName: Em.computed.alias('parentView.property'),
    model: Em.computed.alias('parentView.model'),
    type: Em.computed.alias('parentView.type'),
    inputClass: [],
    childViews: ['inputView'],
    inputView: Em.TextField.extend({
        value: Em.computed.alias('parentView.value'),
        type: Em.computed.alias('parentView.type')
    }),
    init: function() {
        this._super();
        var propertyName = this.get('propertyName');
        if (!Em.isEmpty(propertyName)) {
            Ember.Binding.from("model." + this.get('propertyName')).to('value').connect(this);
        }
    }
});

Em.Handlebars.helper('em-form-controls', Em.Forms.Controls);

export default Em.Forms.Controls;