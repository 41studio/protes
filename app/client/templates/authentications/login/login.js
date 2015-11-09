/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
  'submit form': function(event, template){
    event.preventDefault();
    var emailVar = template.find("#login-email").value;
    var passwordVar = template.find("#login-password").value;
    Meteor.loginWithPassword(emailVar, passwordVar, function(error){
      if(error){
        // error handling
        alert("Username or Password not match");
      }
      else{
        // do what if success login
        Router.go("Dashboard");
      }
    });

  }
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
});

Template.Login.onRendered(function () {
  $("#login-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      }
    },
    messages: {
      email: {
        required: "Must a valid email address.",
        email: "You've entered an invalid email address."
      },
      password: {
        required: "You must enter a password.",
        minlength: "Your password must be at least {0} characters."
      }
    },
    submitHandler() {
      let email    = $('[name="emailAddress"]').val(),
          password = $('[name="password"]').val();

      Meteor.loginWithPassword( email, password, ( error ) => {
        if (error) {
          alert( error.reason );
        }
        else{
          // do what if success login
          Router.go("Dashboard");          
        }
      });
    }  
  });
});

Template.Login.onDestroyed(function () {
});
