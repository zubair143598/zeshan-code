import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate=useNavigate();
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/login")
        alert("Sign-out successful.")
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <h2 className="text-white">Home</h2>
      <button onClick={handleLogout} className="btn btn-primary">Log Out</button>
    </>
  );
};

export default Home;
