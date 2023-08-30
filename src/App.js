import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import "./css/base.css";
import img1 from "./img/img1.jpeg";
import img2 from "./img/img2.jpeg";
import img3 from "./img/img3.jpeg";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="card-container">
        <Card
          title="@eric"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          imageUrl= {img1} 
        />
        <Card
          title="@andy"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          imageUrl={img2} 
        />
        <Card
          title="@nana"
          paragraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          imageUrl={img3} 
        />
      </div>
    </div>
  );
};

export default App;
