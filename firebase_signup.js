

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();
//   const analytics = getAnalytics(app);

let emaili = document.getElementById('loginp');
let passi = document.getElementById('passinp');
let formi = document.getElementById('mainforms');
let namei = document.getElementById('naming');
let datei = document.getElementById('dateinp');


let RegisterUser = async (evt) => {
  evt.preventDefault();

  try {
    const credentials = await createUserWithEmailAndPassword(auth, emaili.value, passi.value);
    
    console.log("val", emaili.value, passi.value, namei.value, datei.value);

    await set(ref(db, 'UserAuthList/' + credentials.user.uid), {
      Email: emaili.value,
      Name: namei.value,
      DOB: datei.value,
      password: passi.value
    });

    window.location.href = "login.html";
    function load() {
      console.log('success');
    }
  } catch (error) {
    alert(error.message);
    console.log(error.code);
    console.log(error.message);
  }
};

formi.addEventListener('submit' , RegisterUser);




// let RegisterUser =async(evt) => {
//   evt.preventDefault();

//   await createUserWithEmailAndPassword(auth, emaili.value, passi.value)
//   .then((credentials) => {

//     console.log ("val" ,emaili.value , passi.value , namei.value , datei.value);

//     await set(ref(db, 'UserAuthList/' + credentials.user.uid),{
//       Email: emaili.value ,
//       Name: namei.value ,
//       DOB: datei.value,
//       password: passi.value
//     })
//       // console.log(error.code);
//       window.location.href = "login.html";
//     function load(){
//       console.log('sucess')
     
//     }
  
//     // document.querySelectorAll('.button')[0].addEventListener('click' , function(){
//     //   window.location.href = "login.html";
//       // document.getElementsByClassName('lock-button')[1].classList.add('active');
//       // alert('BUY SUCCESFULLY !')
//   // });
  
//   })
//   .catch((error) =>{
//       alert(error.message);
//       console.log(error.code)
//       console.log(error.message)
//   })

// //  window.location.href = "login.html";
// }


// function loadings(){
//   console.log('sucess'
//   )}


// again DOMStringList

// ... (your imports and Firebase configuration)

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);
// const auth = getAuth();

// let emaili = document.getElementById('loginp');
// let passi = document.getElementById('passinp');
// let formi = document.getElementById('mainforms');
// let namei = document.getElementById('naming');
// // let datei = document.getElementById('dateinp');

// const RegisterUser = async (evt) => {
//   evt.preventDefault();

//   try {
//       const credentials = await createUserWithEmailAndPassword(auth, EmailInp.value, PassInp.value);

//       // Save user data to the Realtime Database
//       await set(ref(db, 'UserAuthList/' + credentials.user.uid), {
//           username: NameField.value,
//           birthdate: DoBInp.value
//       });

//       // Redirect after successful authentication and data storage
//       alert('Signed In');
//       window.location.href = 'Home2.html';
//   } catch (error) {
//       // Handle authentication or data storage errors
//       alert(error.message);
//       console.error(error.code);
//       console.error(error.message);
//   }
// };



