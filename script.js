
//  feedback storage

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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth();
  const dbref = ref(db);

// alert('Welcome to Manas,s Project')

// document.querySelector("#show-login")
// .addEventListener("click",function(){
//     document.querySelector(".form-box").classList.add("active");
// });

// document.querySelector("#close-btn")
// .addEventListener("click",function(){
//     document.querySelector(".form-box").classList.remove("active");
// });

// document.querySelector("#show-signup")
// .addEventListener("click",function(){
//     document.querySelector(".signinform-box").classList.add("active")
//     document.querySelector(".form-box").classList.remove("active");
// });

// document.querySelector("#sclose-btn")
// .addEventListener("click",function(){
//     document.querySelector(".signinform-box").classList.remove("active");
// });

// document.querySelector("#backshow-login")
// .addEventListener("click",function(){
//     document.querySelector(".signinform-box").classList.remove("active")
//     document.querySelector(".form-box").classList.add("active");
// });

// lock butoon workable

document.querySelectorAll('.lock-button')[0].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[0].classList.add('active');
    alert('BUY SUCCESFULLY !')
});

document.querySelectorAll('.lock-button')[1].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[1].classList.add('active');
    alert('BUY SUCCESFULLY !')
});
document.querySelectorAll('.lock-button')[2].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[2].classList.add('active');
    alert('BUY SUCCESFULLY !')
});
document.querySelectorAll('.lock-button')[3].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[3].classList.add('active');
    alert('BUY SUCCESFULLY !')
});
document.querySelectorAll('.lock-button')[4].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[4].classList.add('active');
    alert('BUY SUCCESFULLY !')
});
document.querySelectorAll('.lock-button')[5].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[5].classList.add('active');
    alert('BUY SUCCESFULLY !')
});
document.querySelectorAll('.lock-button')[6].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[6].classList.add('active');
    alert('BUY SUCCESFULLY !')
});
document.querySelectorAll('.lock-button')[7].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[7].classList.add('active');
    alert('BUY SUCCESFULLY !')
});

document.querySelectorAll('.lock-button')[8].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[8].classList.add('active');
    alert('BUY SUCCESFULLY !')
});
document.querySelectorAll('.lock-button')[9].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[9].classList.add('active');
    alert('BUY SUCCESFULLY !')
});
document.querySelectorAll('.lock-button')[10].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[10].classList.add('active');
    alert('BUY SUCCESFULLY !')
});
document.querySelectorAll('.lock-button')[11].addEventListener('click', function () {
    document.getElementsByClassName('lock-button')[11].classList.add('active');
    alert('BUY SUCCESFULLY !')
});

// document.querySelectorAll('.submits')[0].addEventListener('click', function () {
//     // document.getElementsByClassName('lock-button')[4].classList.add('active');
//     alert('BUY SUCCESFULLY !')
// });

document.querySelectorAll('.submits')[0].addEventListener( 'click' , function()  {
    console.log('ok')
var store = document.getElementById('type').value;
localStorage.setItem('feedback' , store);
console.log(store);
var database = firebase.database().ref("Name");
database.push({
    textInput: store,
    timestamp: firebase.database.ServerValue.timestamp
});
document.getElementById("feeding").reset();

console.log('done')
})

// const menuelms = document.querySelectorAll('.menu');
// const headelms = document.querySelectorAll('.heading');

// let currentsection = 'home'
// window.addEventListener('scroll' , function(){
//     headelms.forEach(HTMLHeadElement => {
//         if (window.scrollY >= headelms.offsetTop  - 200){
//             currentsection = menuelms.id
//         }
//     })
//     menuelms.forEach(menuelms => {
//         if (menuelms.href.includes(currentsection)){
//            document.querySelector('.active').classList.remove('active');
//            menuelms.classList.add('active');
//         }
//     })
// })

// navbar functionable

// function home(){
//    document.body.scrollTop= 0;
//    document.documentElement.scrollTop =0;
// }
// function explore(){
//     document.body.scrollTop= 430;
//     document.documentElement.scrollTop =430;
//  }
//  function sellor(){
//     document.body.scrollTop= 1800;
//     document.documentElement.scrollTop =1800;
//  }
//  function contact(){
//     document.body.scrollTop= 2215;
//     document.documentElement.scrollTop =2215;
//  }


//  feedbackstore

// function storing(){
// var store = document.getElementById('back').value;
// console.log(store);
// localStorage.setItem('feedback' , store)
// }

// feeding.addEventListener('click' , storing);

// function storing(){
//     var store = document.getElementById('back').value;

//     if(typeof(Storage) !== "undefined"){
//     localStorage.setItem('feedback', store);
//     alert('feedback saved successfully');}
//     else{
//         alert('local storage not supported')
//     }
// }



// singout button functionable

var UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
alert(`Welcome User ${UserCreds.email} `)
var userinfo = JSON.parse(sessionStorage.getItem("user-info"));

let MsgHead = document.getElementById('msg');
let GreetHead = document.getElementById('greet')
let SignoutBtn = document.getElementById('signout');

let Signout = () => {
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info");
    window.location.href = 'login.html'
}

let CheckCred = () => {
    if (!sessionStorage.getItem("user-creds"))
        window.location.href = 'login.html'
    else {
        MsgHead.innerText = `${UserCreds.email}`;
        GreetHead.innerText = `${userinfo.Name}`;

    }
}

window.addEventListener('load', CheckCred);
SignoutBtn.addEventListener('click', Signout);

// search box Active 

document.addEventListener('DOMContentLoaded', function () {
    var searchBox = document.getElementById('searchbox');

    var items = document.querySelectorAll('.grid-item');

    searchBox.addEventListener('input', function () {
     
        var searchQuery = searchBox.value.toLowerCase();

   
        items.forEach(function (item) {
            var itemText = item.innerText.toLowerCase();

           
            if (itemText.includes(searchQuery)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {

    var searchBox = document.getElementById('searchbox');

    var items = document.querySelectorAll('.grid-items');

    searchBox.addEventListener('input', function () {
    
        var searchQuery = searchBox.value.toLowerCase();

        items.forEach(function (item) {
            var itemText = item.innerText.toLowerCase();

            if (itemText.includes(searchQuery)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});