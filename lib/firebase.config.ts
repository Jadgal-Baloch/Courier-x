import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcQ41KmLYNv6CMdqID7RdZFWVAGevz-0g",
  authDomain: "courierservice-22b2a.firebaseapp.com",
  databaseURL: "https://courierservice-22b2a-default-rtdb.firebaseio.com",
  projectId: "courierservice-22b2a",
  storageBucket: "courierservice-22b2a.firebasestorage.app",
  messagingSenderId: "1086703036747",
  appId: "1:1086703036747:web:b0b2a1a48e0c62889660ce",
  measurementId: "G-QD4EVMHNPS"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };