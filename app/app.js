import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import EmberForms from 'appkit/components/ember-form/main';

var App = Ember.Application.extend({
  modulePrefix: window.MODULE_PREFIX,
  Resolver: Resolver
});

loadInitializers(App, window.MODULE_PREFIX);

export default App;
