
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyCpV4IoPFmjDj7YwaBj7QccBc8oEmZqjj0",
  authDomain: "guia-passageiro-6ef60.firebaseapp.com",
  projectId: "guia-passageiro-6ef60",
  storageBucket: "guia-passageiro-6ef60.appspot.com",
  messagingSenderId: "385449808400",
  appId: "1:385449808400:web:3311579c7cb26895977095"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)