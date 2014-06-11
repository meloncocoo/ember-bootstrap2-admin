/**
 * Created by Zhou Wen Long on 6/3/2014 0003.
 */
export default Em.ObjectController.extend({
    queryParams: {},
    queryParamsObserve: (function() {
        this.store.findQuery('user', this.get('queryParams'));
    }).observes('queryParams')
});