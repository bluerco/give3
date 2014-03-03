Template.act.helpers({
  username: function () {
    var user = Meteor.user();
    return user.emails && user.emails.length ? user.emails[0].address : new Error('dont know facebook login stuff yet');
  },
  timeAgo: function() {
    return moment(this.created).fromNow();
  }
});