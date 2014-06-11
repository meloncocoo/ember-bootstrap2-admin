/**
 * Created by Zhou Wen Long on 5/27/2014 0027.
 */
export default Ember.FileField.extend({
    url: '',
    filesDidchange: (function() {
        var uploadUrl = this.get('url');
        var files = this.get('files');

        var uploader = Ember.Uploader.create({
            url: uploadUrl
        });

        if (!Ember.isEmpty(files)) {
            uploader.upload(files[0]);
        }
    }).observes('files')
});