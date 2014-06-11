/**
 * Created by Zhou Wen Long on 5/24/2014 0024.
 */
export default Ember.Route.extend({
    model: function() {
        return this.store.find('user', 1);
    },
    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('users', this.store.find('user'));
    }
});