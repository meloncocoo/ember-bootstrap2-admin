/**
 * Created by Zhou Wen Long on 5/24/2014 0024.
 */
export default Ember.ObjectController.extend({
    menus: function() {
        return this.get('content').filterProperty('level', 1);
    }.property('content.@each')
});