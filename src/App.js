import React,{UseEffect, useRef, useState} from "react";
import './App.css';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyB7Ihzj4FAWrZBN3N2CaXNuunkxLDoQdu8",
  authDomain: "sofkachat-team-8c4e9.firebaseapp.com",
  projectId: "sofkachat-team-8c4e9",
  storageBucket: "sofkachat-team-8c4e9.appspot.com",
  messagingSenderId: "641682756235",
  appId: "1:641682756235:web:aa7ba464072b53784d3a8e"
});

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {
const [user] = useAuthState(auth);

return (
    <div className="App">
      <header>
    <h1>SofkaU Chat</h1>
    <SignOut/>
    </header>
    <section>
      {user ? <ChatRoom /> : <SignIn/>}
    </section>
    
    </div>
  );
}

function ChatRoom(){
 return <p>chat</p>
}

function SignIn(){
const signInWithGoogle = () =>{

const provider = new firebase.auth.GoogleAuthProvider();
auth.signInWithPopup(provider); 
}

  return <button onClick={signInWithGoogle}>Sign in with google</button>
 }

 function SignOut(){
  return auth.currentUser && (
    <button onClick={() => {
      auth.signOut();
    }}>SignOut</button>
  )

 }

 

export default App;
