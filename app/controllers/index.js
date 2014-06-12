/**
 * Created by Zhou Wen Long on 6/3/2014 0003.
 */
export default Em.ObjectController.extend({
    queryParams: {},
    queryParamsObserve: (function() {
        this.store.findQuery('user', this.get('queryParams'));
    }).observes('queryParams'),
    actions: {
        saveUser: function(user) {
            user.save().then(function() {
                Em.debug('Post saved.');
            }).catch(function() {
                Em.debug('Can not save post: ' + JSON.stringify(user.toJSON()));
            });
        },
        savePost: function(post) {
            post.save().then(function() {
                Em.debug('Post saved: ' + JSON.stringify(post.toJSON()));
            }).catch(function() {
                Em.debug('Can not save post: ' + JSON.stringify(post.toJSON()));
            });
        }
    }
});