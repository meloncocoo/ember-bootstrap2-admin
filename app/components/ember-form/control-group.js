/**
 * Created by Zhou Wen Long on 6/11/2014 0011.
 */
import Label from "appkit/components/ember-form/label";
import Controls from "appkit/components/ember-form/controls";

Em.Forms.ControlGroup = Em.ContainerView.extend({
    classNameBindings: ['class'],
    class: ['control-group'],
    label: '',
    property: '',
    type: 'text',
    inputClass: [],
    model: Em.computed.alias('parentView.model'),
    childViews: ['labelView', 'controlsView'],
    labelView: Em.Forms.Label.extend(),
    controlsView: Em.Forms.Controls.extend()
});

Em.Handlebars.helper('em-form-control-group', Em.Forms.ControlGroup);

export default Em.Forms.ControlGroup;