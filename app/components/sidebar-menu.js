/**
 * Created by Zhou Wen Long on 5/24/2014 0024.
 */
import ItemView from 'appkit/components/mixins/item-view';
import ItemsView from 'appkit/components/mixins/items-view';

var SubMenuItem = Ember.View.extend({
    tagName: ['li'],
    classNameBindings: ["isActive:active"],
    template: Ember.Handlebars.compile('<a href="javascript:;">{{view.content.title}}</a>'),
    isActive: (function() {
        return this.get('content.active');
    }).property('content.active')
});

var SubMenu = ItemsView.extend({
    tagName: ['ul'],
    classNames: ['sub'],
    content: [],
    itemViewClass: SubMenuItem
});

var MenuItemLink = Ember.ContainerView.extend({
    tagName: ['a'],
    attributeBindings: ['href'],
    href: "#",
    contentBinding: 'parentView.content',
    childViews: ['icon', 'span'],
    icon: Ember.View.extend({
        tagName: ['i'],
        contentBinding: 'parentView.content.style',
        hasStyle: (function() {
            return !!this.get('content');
        }).property('content'),
        classNameBindings: [":fa", "content"]
    }),
    span: Ember.View.extend({
        tagName: ['span'],
        contentBinding: 'parentView.content.title',
        template: Ember.Handlebars.compile('{{view.content}}')
    })
});

var MenuItem = Ember.ContainerView.extend({
    tagName: ['li'],
    childViews: ['menuItem', 'subMenu'],
    classNameBindings: [':sub-menu', 'isActive:active'],
    isActive: (function() {
        return this.get('content.active');
    }).property('content.active'),
    menuItem: MenuItemLink.extend({
        contentBinding: 'parentView.content'
    }),
    subMenu: SubMenu.extend({
        contentBinding: 'parentView.content.children'
    })
});

export default Ember.CollectionView.extend({
    tagName: ['ul'],
    classNames: ['sidebar-menu'],
    content: [],
    itemViewClass: MenuItem,
    didInsertElement: function() {
        var _this = this;
        this.$('.sub-menu > a').click(function() {
            var last = _this.$('.sub-menu.open');
            _this.$('.sub-menu.active').removeClass("active");
            last.removeClass("open");
            _this.$('.arrow', last).removeClass("open");
            _this.$('.sub', last).slideUp(200);
            var sub = _this.$(this).next();
            if (sub.is(":visible")) {
                _this.$('.arrow', _this.$(this)).removeClass("open");
                _this.$(this).parent().removeClass("open");
                sub.slideUp(200);
            } else {
                _this.$('.arrow', _this.$(this)).addClass("open");
                _this.$(this).parent().addClass("open").addClass("active");
                if ($('li', sub).length > 0) {
                    sub.slideDown(200);
                }
            }
            var o = (_this.$(this).offset());
            var diff = 200 - o.top;
            if(diff>0)
                _this.$(".sidebar-scroll").scrollTo("-="+Math.abs(diff),500);
            else
                _this.$(".sidebar-scroll").scrollTo("+="+Math.abs(diff),500);
        });
    }
});