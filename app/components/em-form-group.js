/**
 * Created by Zhou Wen Long on 5/26/2014 0026.
 */
import FormInput from 'appkit/components/em-form-input';

export default Ember.ContainerView.extend({
    tagName: 'div',
    classNameBindings: [':control-group', 'hasErrors:error'],
    childViews: ['controlView'],
    controlView: FormInput.extend(),
    hasErrors: (function() {
        return true;
    }).property('status'),
    init: function() {
        this._super();
        Ember.assert(!Ember.isNone(this.get('propertyName')), 'propertyName is required.');
        Ember.Binding.from('model.errors.' + this.get('propertyName')).to('errors').connect(this);
    },
    status: (function() {
        if (this.get('errors.length'))
            return 'error';
        else
            return 'success';
    }).property('errors.length')
});