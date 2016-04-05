import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
  var chamber = params.chamber;
  var url;
  if(chamber === 'all') {
    url = 'http://congress.api.sunlightfoundation.com/committees?apikey=7d2b86cc56c54d03a4cd7012c406eab2&subcommittee=true';
  } else {
   url = 'http://congress.api.sunlightfoundation.com/committees?apikey=7d2b86cc56c54d03a4cd7012c406eab2&subcommittee=true&chamber=' + chamber;
  }
  // var url ='http://congress.api.sunlightfoundation.com/committees?apikey=941d3b53a79e48be9572c39af35b21d9';
   return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
