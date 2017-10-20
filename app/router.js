import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('greggame');

  this.route('greggames', function() {
    this.route('about');
    this.route('gamelibrary');
  });

  this.route('gregames', function() {
    this.route('gamelibrary');
  });
  this.route('about');
  this.route('gamelibrary');
  this.route('spades');
  this.route('solitaire');
});

export default Router;
