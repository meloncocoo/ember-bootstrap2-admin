/**
 * Created by Zhou Wen Long on 6/11/2014 0011.
 */
Em.Forms.FormActions = Em.View.extend({
    classNameBindings: ['class'],
    class: ['form-actions']
});

Em.Handlebars.helper('em-form-actions', Em.Forms.FormActions);

export default Em.Forms.FormActions;