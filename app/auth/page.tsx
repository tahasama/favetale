"use client";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "@/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  getRedirectResult,
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
import { useCart } from "../provider/CartProvider";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  const provider = new GoogleAuthProvider();
  const { setUserx } = useCart();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log("🚀 ~ file: page.tsx:26 ~ SignUp ~ error:", error);
  const [login, setLogin] = useState(true);

  const errorMessage =
    error === "Firebase: Error (auth/user-not-found)"
      ? "Wrong email, please try again"
      : error === "Firebase: Error (auth/invalid-login-credentials)."
      ? "Wrong email or password, please try again"
      : error === "Firebase: Error (auth/wrong-password)"
      ? "Wrong password, please try again"
      : error === "Firebase: Error (auth/invalid-email)."
      ? "Please provide a valid email"
      : error === "Firebase: Error (auth/internal-error)"
      ? "Please provide a valid password"
      : error === "Firebase: Error (auth/network-request-failed)"
      ? "Failed to login, please try again"
      : error === "Firebase: Error (storage/object-not-found)" ||
        error === "Firebase: Error (auth/popup-closed-by-user)"
      ? ""
      : "An unexpected error occurred";

  // Assuming setErrorM is a function to set the error message somewhere

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userRef = doc(db, "users", user.uid);
      const userData = {
        name: username,
        email: email,
        creationTime: user.metadata.creationTime,
        lastSignInTime: user.metadata.lastSignInTime,
        diabled: false,
        image: "",
      };
      await setDoc(userRef, userData);
      router.push(`/profile/${user.uid}`);

      return user;
    } catch (error: any) {
      // const errorCode = error.code;
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
      setUserx(user);
      router.push(`/profile/${user.uid}`);

      return user;
    } catch (error: any) {
      // const errorCode = error.code;
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
            const userRef = doc(db, "users", user.uid);

            const userDoc = await getDoc(userRef);

            if (userDoc.exists()) {
              router.push(`/profile/${user.uid}`);
            } else {
              await setDoc(userRef, {
                name: user.displayName,
                email: user.email,
                creationTime: user.metadata.creationTime,
                lastSignInTime: user.metadata.lastSignInTime,
                diabled: false,
                image: "",
              })
                .then(async () => await getDoc(userRef))
                .finally(() => setUserx(user));

              router.push(`/profile/${user.uid}`);
            }
          } else {
            setError("User information is missing or invalid");
          }
        }
      } catch (error: any) {
        setError(error.message);
      }
    };
    handleSignInRedirect();
  }, []);

  return (
    <div className="h-[calc(100vh-70px)] flex flex-row items-center justify-center">
      <div
        className={`absolute max-w-md w-full p-4 mt-20 space-y-4 flex-grow ${
          login ? " opacity-0 -translate-y-96" : "opacity-1000"
        }  transition-all duration-700`}
      >
        {login ? null : (
          <>
            <h1 className="text-2xl font-semibold">Sign Up</h1>
            {error && <p className="text-red-500">{errorMessage}kkk</p>}
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
            <p>
              Already have an account? sing in{" "}
              <span
                onClick={() => setLogin(!login)}
                className="underline underline-offset-2 text-sky-500 cursor-pointer"
              >
                Here
              </span>
            </p>
          </>
        )}
      </div>

      <div
        className={`absolute max-w-md w-full mt-20 p-4 space-y-4 flex-1 ${
          !login ? "opacity-0 -translate-y-96" : "opacity-1000"
        } transition-all duration-700`}
      >
        {!login ? null : (
          <>
            {" "}
            <div>
              <h1 className="text-2xl font-semibold">Sign In</h1>
              {error && <p className="text-red-500">{errorMessage}</p>}
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
            <p className="pt-4">
              Dont have an account? sign up{" "}
              <span
                onClick={() => setLogin(!login)}
                className="underline underline-offset-2 text-sky-500 cursor-pointer"
              >
                Here
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
