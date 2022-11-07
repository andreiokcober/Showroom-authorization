import './styles.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref,set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { openBody } from './developer/registerForm';
import {renderInSystems,localVizit} from "./developer/inSystems"
import {loadName} from "./developer/asyncFetch"
import {} from "./developer/localStore"

const firebaseConfig = {
  apiKey: "AIzaSyCSMcWipvT2Px25VhQI84MO8uoC7EpSzpg",
  authDomain: "create-signup-test.firebaseapp.com",
  databaseURL: "https://create-signup-test-default-rtdb.firebaseio.com",
  projectId: "create-signup-test",
  storageBucket: "create-signup-test.appspot.com",
  messagingSenderId: "462609716542",
  appId: "1:462609716542:web:dc20f240bac63144d9086f",
  measurementId: "G-5CXCVV427H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase(app);

export async function newPersonWithForm(newPerson){

  const email = newPerson.email
  const password = newPerson.password
  const name = newPerson.name
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const uid = user.uid

   writeUserData(uid,email,name)
    alert('Вы успешно зарегистрировались')
    localStorage.setItem('vizit',true)
    openBody()
   renderInSystems(name,email,uid)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('такой адресс уже используется')
    // ..
  });

}
export  function authPersonWithForm(newPerson){
  const email = newPerson.email
  const password = newPerson.password

  signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const uid = user.uid

    alert('Вы успешно зашли в ситему')
    localStorage.setItem('vizit',true)
    openBody() 
    loadName(uid)  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Неверный логин или пароль')

  });
  
}
function  writeUserData(uid,email,name){
   const db = getDatabase();
   set(ref(db, 'users/' + uid), {
    username:name,
    email:email,
   })
}

