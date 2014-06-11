/**
 * Created by Zhou Wen Long on 5/24/2014 0024.
 */
export default DS.Model.extend({
    title: DS.attr(),
    active: DS.attr('boolean'),
    style: DS.attr(),
    level: DS.attr('number'),
    children: DS.hasMany('menu')
});