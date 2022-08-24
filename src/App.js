import React from "react";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register/Register";
import Footer from "./component/Footer/Footer";
import UserPerfil from "./pages/Perfil/UserPerfil";
import Context from "./context/index";

function App() {
  const { signed } = React.useContext(Context);

  return (
    <>
      <Routes>
        <Route index path="*" element={<Navigate to="/login" replace />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        {signed ? (
          <>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/profile" element={<UserPerfil />} />
          </>
        ) : (
          <Route exact path="/login" element={<Login />} />
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
