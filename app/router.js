import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('people', { path: '/' }, function() {
        this.route('person', { path: '/person' });
    });
});

export default Router;
