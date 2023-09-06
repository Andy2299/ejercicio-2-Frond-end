import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Login from "./components/Login";
import "./css/base.css";

import img1 from "./img/img1.jpeg";
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpeg";
import person from "./img/person.jpg"
import loading from "./img/loading.gif"

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleUserProfile = () => {
    setShowUserProfile(!showUserProfile);
  };

  const handleLogin = (username) => {
    setLoggedInUser(username);
    setErrorMessage(null);
  };

  const handleError = (message) => {
    setErrorMessage(message);
  };
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setLoggedInUser(null);
  };

  const posts = [
    {
      title: "@eric",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      imageUrl: img1,
    },
    {
      title: "@andy",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      imageUrl: img2,
    },
    {
      title: "@nana",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      imageUrl: img3,
    },
  ];

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      // Aquí podrías verificar el token con el servidor si es necesario
      setLoggedInUser("john"); // Este es un valor de ejemplo
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <Header toggleUserProfile={toggleUserProfile} onLogout={handleLogout} />
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="card-container">
        {loggedInUser ? (
          isLoading ? (
            <div className="div-loading">
            Loading...
            <img src={loading} alt="Loading icon" />
          </div>
          
          ) : showUserProfile ? (
            <div className="user-profile">
              <div className="img-profile">
                <img
                src={person}  // Asegúrate de usar 'src' para asignar la imagen
                alt="Imagen de perfil"
                />
              </div>
              <h3>{loggedInUser}</h3>
              <p>Este es el perfil de  <span>{loggedInUser}</span>.</p>
              <p className="p-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
          ) : (
            filteredPosts.map((post, index) => <Card key={index} {...post} />)
          )
        ) : (
          <Login onLogin={handleLogin} onError={handleError} />
        )}
      </div>
    </div>
  );
};

export default App;
