/**
 * Created by Zhou Wen Long on 5/26/2014 0026.
 */
export default Ember.TextField.extend({
    attributeBindings: ['placeholder'],
    placeholder: Ember.computed.alias('parentView.placeholder')
});


