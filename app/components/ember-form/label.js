/**
 * Created by Zhou Wen Long on 6/11/2014 0011.
 */
Em.Forms.Label = Em.View.extend({
    tagName: ['label'],
    classNameBindings: ['class'],
    class: ['control-label'],
    template: Em.Handlebars.compile('{{view.content}}'),
    content: Em.computed.alias('parentView.label')
});

Em.Handlebars.helper('em-form-label', Em.Forms.Label);

export default Em.Forms.Label;