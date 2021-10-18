import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const fireBaseConfig = {
    apiKey: "AIzaSyCZAld55WUPSo0ngBmK945m6XmJzsMIccw",
  authDomain: "login-dev-9e89f.firebaseapp.com",
  projectId: "login-dev-9e89f",
  storageBucket: "login-dev-9e89f.appspot.com",
  messagingSenderId: "1092453095598",
  appId: "1:1092453095598:web:b12e0f669566cf158b353f"
}

const app = initializeApp(fireBaseConfig)

export const auth = getAuth(app)
export default app