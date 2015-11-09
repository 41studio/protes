Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/login', {
  layoutTemplate: 'AuthenticationLayout',
  name: 'Login',
  controller: 'LoginController',
  where: 'client'
});

Router.route('/registration', {
  layoutTemplate: 'AuthenticationLayout',
  name: 'Registration',
  controller: 'RegistrationController',
  where: 'client'
});

Router.route('/dashboard', {
  layoutTemplate: 'DashboardLayout',
  name: 'Dashboard',
  controller: 'DashboardController',
  where: 'client'
});
