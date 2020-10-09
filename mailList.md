---
layout: default
title: "Mailing List - "
---

<span class="badge badge-pill badge-warning">Beta</span>
<div class="alert alert-dismissible alert-info">
  <button type="button" class="close" data-dismiss="alert">&times;</button>
  <div style="text-align: center;">
  <strong>Hey There!</strong> <span style="font-weight: 900; color: #00ab14;">Welcome to our new mailing list page!</span> It is now in Beta (expect changes) but feel free to sign up now! :)
  </div>
</div>

<div class="container-fluid padding" style="text-align: center; position: relative; top:20%;">
    <div class="row text-center padding" style="display: inline-block;">
        <h3>
            Mailing List<br>
            <small class="text-muted padding">Please enter your email below to be notified of new articles!</small>
        </h3><br>
        <div class="form-group">
    <label class="form-control-label" for="exampleInputEmail1">Email address</label>
    </div>
    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email">
    <div class="valid-feedback">Success! You should receive the next blog notification in your inbox :)</div>
    <div class="invalid-feedback">Something went wrong, have you entered a valid email?</div>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small><br>
  <button type="submit" class="btn btn-primary" onclick="saveToFirebase(document.getElementById('inputEmail').value)">Submit</button>
    </div>
</div>



<script>
var flag = false;
function saveToFirebase(email) {
    if(flag){
        alert('you have already entered a valid email address');
        error();
        return;
    }
    email = email.trim()
    if (!email.includes('@') || !email.includes('.') || email.includes(' ')){
        error();
        return;
    }
    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

function error(){
    document.getElementById('inputEmail').classList.remove("is-valid");
    document.getElementById('inputEmail').classList.add("is-invalid");
    return;
}

function success(){
    document.getElementById('inputEmail').classList.remove("is-invalid");
    document.getElementById('inputEmail').classList.add("is-valid");
    flag = true;
    return;
}
</script>




<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBBJGZrmvgzrCAho6l5ibSzwBiVy3a8AjM",
    authDomain: "mailinglist-9d0a1.firebaseapp.com",
    databaseURL: "https://mailinglist-9d0a1.firebaseio.com",
    projectId: "mailinglist-9d0a1",
    storageBucket: "mailinglist-9d0a1.appspot.com",
    messagingSenderId: "298818902657",
    appId: "1:298818902657:web:cd3537105b62b2f723cb80"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>

<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-database.js"></script>