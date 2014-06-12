/**
 * Created by Zhou Wen Long on 6/11/2014 0011.
 */
export default DS.Model.extend({
    title: DS.attr(),
    body: DS.attr(),
    author: DS.belongsTo('author', {embedded: true})
});