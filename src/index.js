import './styles.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import {} from "./developer/registerForm";


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


export function newPersonWithForm(newPerson){
 
  
  const email = newPerson.email
  const password = newPerson.password



  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    console.log(user)
    alert('Вы успешно зарегистрировались')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('такой адресс уже используется')
    // ..
  });

}

export function authPersonWithForm(newPerson){
  const email = newPerson.email
  const password = newPerson.password

  signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('Вошли в систему')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  
}


