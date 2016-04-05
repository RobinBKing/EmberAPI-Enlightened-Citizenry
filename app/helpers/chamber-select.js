import Ember from 'ember';

export function chamberSelect(params) {
  var committee = params[0];
  var chamber = params[1];
  console.log(chamber);
  if(committee.chamber === chamber) {
    return committee.chamber + ' ' + committee.name;
  }
}

export default Ember.Helper.helper(chamberSelect);
