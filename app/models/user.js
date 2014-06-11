/**
 * Created by Zhou Wen Long on 5/26/2014 0026.
 */
export default DS.Model.extend(/*Ember.Validations.Mixin, */{
    validations: {
        userName: { presence: true }
    },
    userName: DS.attr(),
    password: DS.attr()
});