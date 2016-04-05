import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    getCommittees1(selection) {
      this.sendAction('getCommittees2', selection);
    }
  }
});
