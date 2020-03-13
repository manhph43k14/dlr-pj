function login() {
    var email = document.getElementById("email-signin").value;
    var password = document.getElementById("password-signin").value;
    // Sign in
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });

}

function signup() {
    var emailNew = document.getElementById("email-signup").value;
    var passwordNew = document.getElementById("password-signup").value;
    // Sign up
    firebase.auth().createUserWithEmailAndPassword(emailNew, passwordNew).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
}
// Get user data
function initWeb() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            // var displayName = user.displayName;
            var email = user.email;
            window.alert("Active User" + email);
            // var emailVerified = user.emailVerified;
            // var photoURL = user.photoURL;
            // var isAnonymous = user.isAnonymous;
            // var uid = user.uid;
            // var providerData = user.providerData;
            // ...
            // window.location.replace("..\home\index.html");
        } else {
            // window.alert("No active User");
            // User is signed out.
            // ...
        }
    });
}

window.onload = function() {
    initWeb();
};