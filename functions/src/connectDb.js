import { initializeApp, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore";
import { secrets } from "../secrets.js";

initializeApp({ // connects to Firebase project using the credentials on line 6 
    credential: cert(secrets)
})

export const db = getFirestore()//db is our connection to Firestore