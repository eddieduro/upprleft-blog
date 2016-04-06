import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('post', {path: '/post/:post_id'});
  this.route('about');
  this.route('contact');
  this.route('comment', {path: '/comment/:comment_id'});
  this.route('shop', function(){
    this.route('product', { path: '/product/:product_id' });
  });
  this.route('cart');
});

export default Router;
