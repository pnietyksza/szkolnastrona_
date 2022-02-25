import React from "react";
import "./App.css";
//import './jsons/placowki.json';
const placowki = require('./jsons/placowki.json');

export const Nazwa = () => {
  return (
     <div>
         <h2>Lista placówek: </h2>
         {
             Object.keys(placowki).map(( key, i ) => (
                 <p key={key}>
                     <span>Oto nazwa placówki: {placowki[key].nazwa_placowki}</span><br></br>
                     <span>Oto adres placówki: {placowki[key].adres}</span>
                 </p>
             ))
         }
    </div>

  )
};


//{JSON.stringify(placowki, null, 2)}