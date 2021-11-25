import NextAuth from "next-auth"
import GoogleProviders from "next-auth/providers/google"
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import firebaseConfig from "../../../firebase"

import firebase from "firebase/app"
import "firebase/firestore"

const firestore = (
  firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
).firestore()

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: FirebaseAdapter(firestore)
})

