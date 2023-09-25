"use client";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth"; // Import the necessary Firebase authentication function
import { auth, db } from "@/firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import {
  getRedirectResult,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const router = useRouter();

  const provider = new GoogleAuthProvider();

  // State for user input
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("🚀 ~ file: page.tsx:22 ~ handleSignUp ~ user:", user);
      // Store additional user information in Firestore
      const userRef = doc(db, "users", user.uid); // Assuming you have a 'users' collection
      const userData = {
        username: username,
        email: email,
      };
      await setDoc(userRef, userData);
      router.push("/profile");

      return user;
    } catch (error: any) {
      const errorCode = error.code;
      console.log(
        "🚀 ~ file: page.tsx:26 ~ handleSignUp ~ errorCode:",
        errorCode
      );
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("🚀 ~ file: page.tsx:22 ~ handleSignUp ~ user:", user);

      router.push("/profile");

      return user;
    } catch (error: any) {
      const errorCode = error.code;
      console.log(
        "🚀 ~ file: page.tsx:26 ~ handleSignUp ~ errorCode:",
        errorCode
      );
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  useEffect(() => {
    const handleSignInRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);

        if (result) {
          const user = result.user;

          if (user && user.uid) {
            // User is valid with a UID, create the userRef
            const userRef = doc(db, "users", user.uid);

            // ... (your code for Firestore interactions)
            // For example, you can set user data in Firestore:
            await setDoc(userRef, {
              name: user.displayName,
              email: user.email,
            });

            // Set the user data in the component state
            setError(""); // Clear any previous errors
            router.push("/profile"); // Redirect to the profile page
          } else {
            // Handle the case where user or user.uid is missing
            setError("User information is missing or invalid");
          }
        }
      } catch (error: any) {
        // Handle errors here
        setError(error.message); // Store the error message
      }
    };

    // Call the function to handle the Google Sign-In redirect
    handleSignInRedirect();
  }, []); // Only runs once when the component mounts

  return (
    <div className="min-h-screen flex flex-row items-center justify-center">
      <div className="max-w-md w-full p-4  space-y-4 flex-grow">
        <h1 className="text-2xl font-semibold">Sign Up</h1>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label htmlFor="Username" className="block text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="Username"
            className="w-full border border-gray-300 rounded-md p-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white rounded-md p-2 w-full"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
      <div className="max-w-md w-full p-4  space-y-4 flex-1">
        <div>
          <h1 className="text-2xl font-semibold">Sign In</h1>
          {error && <p className="text-red-500">{error}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-md p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-300 rounded-md p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white rounded-md p-2 w-full"
          onClick={handleSignIn}
        >
          Sign In
        </button>

        <button
          className="bg-rose-500 text-white rounded-md p-2 w-full"
          onClick={() => signInWithRedirect(auth, provider)}
        >
          Sign In with google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
