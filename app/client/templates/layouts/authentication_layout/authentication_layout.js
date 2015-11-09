/*****************************************************************************/
/* AuthenticationLayout: Event Handlers */
/*****************************************************************************/
Template.AuthenticationLayout.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
  }
});

/*****************************************************************************/
/* AuthenticationLayout: Helpers */
/*****************************************************************************/
Template.AuthenticationLayout.helpers({
});

/*****************************************************************************/
/* AuthenticationLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.AuthenticationLayout.onCreated(function () {
});

Template.AuthenticationLayout.onRendered(function () {
});

Template.AuthenticationLayout.onDestroyed(function () {
});
