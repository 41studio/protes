/*****************************************************************************/
/* DashboardLayout: Event Handlers */
/*****************************************************************************/
Template.DashboardLayout.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go("home");
  }
});

/*****************************************************************************/
/* DashboardLayout: Helpers */
/*****************************************************************************/
Template.DashboardLayout.helpers({
});

/*****************************************************************************/
/* DashboardLayout: Lifecycle Hooks */
/*****************************************************************************/
Template.DashboardLayout.onCreated(function () {
});

Template.DashboardLayout.onRendered(function () {
});

Template.DashboardLayout.onDestroyed(function () {
});
