import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyBqBla2U-QGvNbZ7_8N-HodGTlOMX0f9lQ",
    authDomain: "nft-marketplace-36263.firebaseapp.com",
    databaseURL: "https://nft-marketplace-36263-default-rtdb.firebaseio.com",
    projectId: "nft-marketplace-36263",
    storageBucket: "nft-marketplace-36263.appspot.com",
    messagingSenderId: "976466602622",
    appId: "1:976466602622:web:924033f364ee0e7fe7462f",
    measurementId: "G-L59VZ4X2Z2"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth();
  const dbref = ref(db);

let emailit = document.getElementById('emailinp');
let passit = document.getElementById('passwordinp');
let formit = document.getElementById('mainform');

let SignInUser = evt => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, emailit.value, passit.value)
    .then((Credentials) => {
      get(child(dbref, 'userAuthList/' + Credentials.user.uid)).then((snapshot)=> {
        if(snapshot.exist){
          sessionStorage.setItem("user-info" , JSON.stringify({
            firstname: snapshot.val().name
          }))

        }})
        sessionStorage.setItem("user-creds", JSON.stringify(Credentials.user));
        window.location.href = 'index.html';
      
       
      // const user = userCredential.user;
      // window.location = 'index.html'
        // console.log(error.code);
        // window.location.href = "index.html";
    })
    .catch((error) =>{
        alert(error.message);
        console.log(error.code)
        console.log(error.message)
    })
   
}

formit.addEventListener('submit' , SignInUser);
// var UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
// alert(`Welcome User ${UserCreds.email} `)


// // forgot passwprd setup
// function signIn() {
//   // Your sign-in logic here
//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;

//   // Validate email and password
//   // ...

//   // Perform sign-in
//   // ...

//   // Redirect or show a success message
//   // ...
// }

// document.getElementById('forgotPassword').addEventListener('click', function() {
//   var email = prompt('Enter your email to reset password:');
  
//   // Validate email and send a reset password email
//   // ...

//   // Show a confirmation message
//   alert('Password reset email sent to ' + email);
// });
// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const apk = express();
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/reset-password', (req, res) => {
//     const userEmail = req.body.email;

//     // Validate email and generate a unique token
//     // ...

//     // Send reset password email
//     sendResetPasswordEmail(userEmail, resetToken);

//     // Respond with success message
//     res.send('Password reset email sent successfully');
// });

// function sendResetPasswordEmail(email, token) {
//     // Configure nodemailer to send emails
//     // ...

//     // Create and send the reset password email
//     // ...
// }

// apk.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


