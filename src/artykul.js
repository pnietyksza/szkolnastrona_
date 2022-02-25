import React from "react";
import "./App.css";

const artykuly = require('./jsons/artykuly.json');

export const Artykul = () => {
  return (
     <div>
         <h2>Lista artykułów: </h2>
         {
             Object.keys(artykuly).map(( key, i ) => (
                 <p key={key}>
                     <span>Oto tytuł artykułu: {artykuly[key].tytul}</span><br></br>
                     <span>Oto data utworzenia artykułu: {artykuly[key].data_utworzenia}</span><br></br>
                     <span>Oto autor artykułu: {artykuly[key].autor}</span><br></br>
                     <span>Oto treść artykułu: {artykuly[key].tresc}</span><br></br>
                 </p>
             ))
         }
    </div>

  )
};
