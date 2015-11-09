(function(){

/////////////////////////////////////////////////////////////////////////
//                                                                     //
// lib/routes.js                                                       //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
                                                                       //
Router.configure({                                                     // 1
  layoutTemplate: 'MasterLayout',                                      // 2
  loadingTemplate: 'Loading',                                          // 3
  notFoundTemplate: 'NotFound'                                         // 4
});                                                                    //
                                                                       //
Router.route('/', {                                                    // 7
  name: 'home',                                                        // 8
  controller: 'HomeController',                                        // 9
  where: 'client'                                                      // 10
});                                                                    //
                                                                       //
Router.route('/login', {                                               // 13
  layoutTemplate: 'AuthenticationLayout',                              // 14
  name: 'Login',                                                       // 15
  controller: 'LoginController',                                       // 16
  where: 'client'                                                      // 17
});                                                                    //
                                                                       //
Router.route('/registration', {                                        // 20
  layoutTemplate: 'AuthenticationLayout',                              // 21
  name: 'Registration',                                                // 22
  controller: 'RegistrationController',                                // 23
  where: 'client'                                                      // 24
});                                                                    //
                                                                       //
Router.route('/dashboard', {                                           // 27
  layoutTemplate: 'DashboardLayout',                                   // 28
  name: 'Dashboard',                                                   // 29
  controller: 'DashboardController',                                   // 30
  where: 'client'                                                      // 31
});                                                                    //
/////////////////////////////////////////////////////////////////////////

}).call(this);

//# sourceMappingURL=routes.js.map
