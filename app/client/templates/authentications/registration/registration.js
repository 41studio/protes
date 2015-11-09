/*****************************************************************************/
/* Registration: Event Handlers */
/*****************************************************************************/
Template.Registration.events({
  'submit form': function(event, template){
    event.preventDefault();
    var emailVar = template.find("#register-email").value;
    var passwordVar = template.find("#register-password").value;
    var usernameVar = template.find("#register-username").value;
    Accounts.createUser({
      email: emailVar,
      password: passwordVar,
      username: usernameVar
    }, function(error){
      if(error){
        // error handling
        alert(error.reason);
      }
      else{
        // success handling
        alert("Success Registration");
        Router.go("Dashboard");
      }
    });
  }
});

/*****************************************************************************/
/* Registration: Helpers */
/*****************************************************************************/
Template.Registration.helpers({
});

/*****************************************************************************/
/* Registration: Lifecycle Hooks */
/*****************************************************************************/
Template.Registration.onCreated(function () {
});

Template.Registration.onRendered(function () {
  $("#registration-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 6
      },
      username: {
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
      },
      username: {
        required: "You must enter an username.",
        minlength: "Your username must be at least {0} characters."
      }
    },
    submitHandler() {
      let email    = $('[name="emailAddress"]').val(),
          password = $('[name="password"]').val();
          username = $('[name="username"]').val();

      Accounts.createUser({
        email: email,
        password: password,
        username: username
      }, function(error){
        if(error){
          // error handling
          alert(error.reason);
        }
        else{
          // success handling
          alert("Success Registration");
          Router.go("Dashboard");
        }
      });
    }  
  });
});

Template.Registration.onDestroyed(function () {
});
