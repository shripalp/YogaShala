import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const ToggleModal = () => {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const auth = getAuth();
  //const navigate = useNavigate();

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

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
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
      //navigate("/");
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
      //navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
      setError(error.message);
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Auth</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            {user ? (
              <Button onClick={handleLogout}>LogOut</Button>
            ) : (
              <>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h3>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Your email" />
                  </div>
                  <TextInput
                    id="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Your password" />
                  </div>
                  <TextInput
                    id="password"
                    type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <div className="w-full">
                  <Button onClick={handleLogin}>Log in</Button>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?&nbsp;
                  <a
                    href={handleRegistration}
                    className="text-cyan-700 hover:underline dark:text-cyan-500"
                  >
                    Create account
                  </a>
                </div>
                {error ? <div className="text-red text-xl">{error}</div> : ""}
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ToggleModal;
