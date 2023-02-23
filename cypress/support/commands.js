import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { attachCustomCommands } from "cypress-firebase";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const fbConfig = {
  apiKey: "AIzaSyDLD4sfs0r8ePFw08Fiiu9AJ-b_HqLAIO8",
  authDomain: "football-app-login.firebaseapp.com",
  projectId: "football-app-login",
  storageBucket: "football-app-login.appspot.com",
  messagingSenderId: "507656684879",
  appId: "1:507656684879:web:6bb15910e7456e788b313a",
};

// firebase.initializeApp(fbConfig);

// const namedApp = firebase.initializeApp(fbConfig, "Football-App-Login");

// attachCustomCommands({ Cypress, cy, firebase});

Cypress.Commands.add("login", async () => {
  //Log in without needing the UI
  console.log(fbConfig)
  const app = initializeApp(fbConfig);
  const auth = getAuth();
  let user;
  try {
    user = await signInWithEmailAndPassword(auth, "test@test.com", "123456");
  } catch (error) {
    console.log(error);
  }
  console.log(user);
  return user; // return signInWithEmailAndPassword(email, password);
});

Cypress.Commands.add("logout", async () => {
    //Log in without needing the UI
    const app = initializeApp(fbConfig);
    const auth = getAuth();
    let user;
    try {
      user = await signOut(auth);
    } catch (error) {
      console.log(error);
    }
    console.log(user);
    return user; 
  });


