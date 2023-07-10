import React from "react";
import MyNav from "../components/main/MyNav";
import MyFooter from "../components/main/MyFooter";
import '../components/main/Card.css';

const Errorpage = () => {
  return (
    <>
      
            <MyNav />
            <h1 className="errorPage">
            Qui non c'è niente
            </h1>
            <img className="imgError" src="/fire.gif" alt="fire" />
            <MyFooter />
         
    </>
  );
};

export default Errorpage;