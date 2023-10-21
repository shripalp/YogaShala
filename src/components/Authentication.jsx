import { useState, useEffect } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const auth = getAuth();

//import { NavLink, useNavigate } from "react-router-dom";

function Authentication() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    return () => unsubscribe(); // Unsubscribe from the listener when the component unmounts.
  }, []);

  const handleRegistration = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registration successful");

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration failed:", error);
      setError(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Login failed:", error);
      setError(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logout successful");

      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Logout failed:", error);
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto p-4 text-slate-600">
      <h2 className="text-white font-bold text-2xl">Authentication</h2>
      <div>
        <label htmlFor="email" className="block font-medium">
          E-mail:
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full md:w-1/4 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="block font-medium ">
          Password:
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full md:w-1/4  px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error ? <div className="text-red text-xl">{error}</div> : ""}

      <button
        className="w-1/8 bg-blue-500 text-white rounded-lg py-2 font-medium hover:bg-blue-600 p-4 m-4"
        onClick={handleRegistration}
      >
        Register
      </button>
      {user ? (
        <button
          className="w-1/8 bg-blue-500 text-white rounded-lg py-2 font-medium hover:bg-blue-600 p-4 m-4"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="w-1/8 bg-blue-500 text-white rounded-lg py-2 font-medium hover:bg-blue-600 p-4 m-4"
          onClick={handleLogin}
        >
          Login
        </button>
      )}

      {user ? (
        <div className="text-xl text-fuchsia-950">
          user logged in successfully!
        </div>
      ) : (
        <div className="text-xl">login if already registered or register</div>
      )}
    </div>
  );
}

export default Authentication;
