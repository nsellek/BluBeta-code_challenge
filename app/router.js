import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', {path: "/"});
  this.route('ember_app', function() {
    this.route('step_1');
    this.route('step_2');
    this.route('step_3');
    this.route('step_4');
  });
});

export default Router;
