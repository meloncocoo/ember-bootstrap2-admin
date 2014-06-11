/**
 * Created by Zhou Wen Long on 5/24/2014 0024.
 */
import ItemsView from 'appkit/components/mixins/items-view';

var getParentView = function (view) {
    var ok, parentView;
    if (!(view && (parentView = view.get('parentView')))) {
        return;
    }
    ok = parentView instanceof ItemsView;
    Ember.assert("The parent view must be an instance of Bootstrap.ItemsView or any inherited class", ok);
    if (ok) {
        return parentView;
    } else {
        return void 0;
    }
};

var getProperty = function (obj, prop, noGetReturens) {
    if ( !(Ember.typeOf(obj) === 'instance' || Ember.canInvoke(obj, 'get')) ) {
        return noGetReturens;
    }
    return obj.get(prop);
};

export default Ember.View.extend({
    isItem: true,
    classNameBindings: ['disabled'],
    title: (function() {
        var content, itemTitleKey, itemsView;
        if (!(itemsView = getParentView(this))) {
            return;
        }
        itemTitleKey = itemsView.get('itemTitleKey') || 'title';
        content = this.get('content');
        return getProperty(content, itemTitleKey, content);
    }).property('content'),
    disabled: (function() {
        var content, disabled, itemsView;
        if ( !(itemsView = getParentView(this)) ) {
            return;
        }
        content = this.get('content');
        disabled = !!getProperty(content, 'disabled', false);
        if (disabled && this.get('isActive')) {
            itemsView.set('selected', null);
        }
        return disabled;
    }).property('content', 'content.disabled').cacheable()
});