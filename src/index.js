import './styles.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {} from "./developer/registerForm";
import {} from "./developer/signIn";


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


export function newPersonWithForm(newPerson){
  const email = newPerson.email
  const password = newPerson.password

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
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


