/**
 * Created by Zhou Wen Long on 5/26/2014 0026.
 */
import PaginationView from 'appkit/components/em-pagination';

var Bootstrap = window.Bootstrap = window.Bootstrap == null ? Ember.Namespace.create({}) : window.Bootstrap;

Bootstrap.Column = Ember.Object.extend({
    title: ""
});

var HeaderCellView = Ember.View.extend({
    tagName: 'th',
    classNameBindings: ['class'],
    template: Ember.Handlebars.compile('{{view.content.title}}'),
    class: Ember.computed.alias('content.class')
});

var HeaderRowView = Ember.CollectionView.extend({
    tagName: ['tr'],
    itemViewClass: HeaderCellView.extend(),
    content: []
});

var HeaderView = Ember.ContainerView.extend({
    tagName: ['thead'],
    childViews: ['headerRow'],
    headerRow: HeaderRowView.extend({
        content: Ember.computed.alias('parentView.columns')
    })
});

var BodyCellView = Ember.View.extend({
    tagName: ['td'],
    template: Ember.Handlebars.compile('{{view.content.title}}')
});

var BodyRowView = Ember.CollectionView.extend({
    tagName: ['tr'],
    itemViewClass: BodyCellView.extend(),
    content: []
});

var BodyView = Ember.CollectionView.extend({
    tagName: ['tbody'],
    itemViewClass: BodyRowView.extend(),
    content: []
});

var TableView = Ember.ContainerView.extend({
    tagName: 'table',
    classNameBindings: [':table', 'class'],
    class: Ember.computed.alias('parentView.tableClass'),
    childViews: ['header', 'body'],
    header: HeaderView.extend({
        columns: Ember.computed.alias('parentView.columns')
    }),
    body: BodyView.extend({
        content: Ember.computed.alias('parentView.rows')
    }),
    didInsertElement: function() {
        //alert(this.get('rows.length'));
    }
});

export default Ember.ContainerView.extend({
    childViews: ['table', 'pagination'],
    table: TableView.extend({
        columns: Ember.computed.alias('parentView.columns'),
        rows: Ember.computed.alias('parentView.rows')
    }),
    pagination: PaginationView.extend({
        pageClass: Ember.computed.alias('parentView.pageClass')
    }),
    columns: [
        Bootstrap.Column.create({ title: "#", columnIndex: 'index', class: 'text-center' }),
        Bootstrap.Column.create({ title: "Header1", columnIndex: 'userName', class: 'text-right' }),
        Bootstrap.Column.create({ title: "Header2", columnIndex: 'password' })
    ],
    rows: (function() {
        var records = this.get('model'), columns = this.get('columns'), rows = [];
        records.forEach(function(record, index) {
            Ember.debug(record.get('userName') + ':' + index);
            var cells = [];
            columns.forEach(function(column) {
                cells.pushObject({ title: record.get(column.get('columnIndex')) });
            });
            rows.pushObject(cells);
        });
        return rows;
    }).property('model')
//    init: function() {
//        this._super();
//        var records = this.get('model'), columns = this.get('columns'), rows = [];
//        records.forEach(function(record, index) {
//            Ember.debug(record.get('userName') + ':' + index);
//            var cells = [];
//            columns.forEach(function(column) {
//                cells.pushObject({ title: record.get(column.get('columnIndex')), index: index });
//            });
//            rows.pushObject(cells);
//        });
//        this.set('rows', rows);
//    }
});