import Ember from 'ember';


export default Ember.Route.extend({
 model: function() {
   var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=7d2b86cc56c54d03a4cd7012c406eab2&chamber=house';
  // var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=7d2b86cc56c54d03a4cd7012c406eab2';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON.results);
     return responseJSON.results;
   });
  }
});
