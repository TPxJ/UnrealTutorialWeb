// short code By Xj
const GetElmID = (id) => {return document.getElementById(id)}
// ------------------------


const firebaseConfig = {
    apiKey: "AIzaSyCikWiR86XB6ja6J-wa_oNkXNsfhjrp_8U",
    authDomain: "unrealtutorialth.firebaseapp.com",
    projectId: "unrealtutorialth",
    storageBucket: "unrealtutorialth.appspot.com",
    messagingSenderId: "1045938096161",
    appId: "1:1045938096161:web:35ede32d2688cf8f4dfb60",
    measurementId: "G-NTFTHWKHS8"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

var userName;
var userUid;
var userImg;
var userEmail;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log(user)
        userName = user.displayName;
        userUid = user.uid
        userImg = user.photoURL;
        userEmail = user.email;
        showUser(user)

    } else {
        // No user is signed in.
        console.log(user);
        console.log("1");
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                var provider = new firebase.auth.GoogleAuthProvider();
                // In memory persistence will be applied to the signed in Google user
                // even though the persistence was set to 'none' and a page redirect
                // occurred.
                return firebase.auth().signInWithRedirect(provider);
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    }
});


function out() {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
            .then(() => {
            })
            .catch((error) => {
            });

}

function serUser(user){
    console.log(user);
}

function showPro(){
    console.log(userName);
    console.log(userEmail);
    console.log(userUid);
    console.log(userImg);
}

function showUser(user){
    let img = GetElmID("img");
    let name = GetElmID("name");
    let uid = GetElmID("uid");
    let email = GetElmID("email");

    img.src = user.photoURL;
    name.innerHTML = user.displayName;
    uid.innerHTML = user.uid;
    email.innerHTML = user.email;
}

db.collection("feedback").get()
  .then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//       console.log(doc.data());
//   });
    console.log(querySnapshot);
});

$(document).ready(function(){
    $("#probut").click(function(){
        $("#profile").slideToggle();
    });
  });