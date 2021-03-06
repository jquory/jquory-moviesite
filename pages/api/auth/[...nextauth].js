


// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
// export default NextAuth({
  //   // https://next-auth.js.org/providers/overview
  //   providers: [
    //     GoogleProvider({
      //       clientId: process.env.GOOGLE_ID,
      //       clientSecret: process.env.GOOGLE_SECRET,
      //     }),
      //   ],
      //   adapter: FirebaseAdapter(firestore),
      // })
      
      
      
      
      
      
import "firebase/firestore"
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { db } from "../../../firebase";
import {FirebaseAdapter} from '@next-auth/firebase-adapter'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  adapter: FirebaseAdapter(db),
});