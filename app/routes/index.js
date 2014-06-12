/**
 * Created by Zhou Wen Long on 5/24/2014 0024.
 */
export default Ember.Route.extend({
    model: function() {
        return /*this.store.createRecord('user'); */this.store.find('user', 1);
    },
    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('users', this.store.find('user'));
        var author = this.store.createRecord('author', {name: 'melon'}),
            post = this.store.createRecord('post');
        post.set('author', author);
        controller.set('post', post);
    }
});