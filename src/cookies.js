import React, { useState } from 'react';
import "./App.css";
import { Cookies, useCookies } from 'react-cookie';

var date = new Date();
date.setDate(date.getDate() + 30);



  export const CookiesComponent = () => {

    const [cookie, setCookie, removeCookie] = useCookies(['nazwa-cookie']);


    if(cookie['nazwa_cookie']===undefined){

        console.log('jest undefined');

    }else{
        console.log('NIE jest undefined');
        setTimeout(() => { 
            var element = document.getElementById("cookies");
            element.style.visibility = "hidden";
         }, 1);
    }

      function addNewCookie(){
          setCookie('nazwa_cookie', 'wartosc_cookie',['/', date]);
          console.log('New cookie is added');

          var element = document.getElementById("cookies");
          element.style.visibility = "hidden";
          
      }
    return (
    <div id='cookies'>
        <span>Ta strona korzysta z ciasteczek, aby świadczyć usługi na najwyższym poziomie</span>
        <button onClick={addNewCookie}>X</button>
    </div>

  
    )
  };


  /*

    setCookie('nazwa', value, { path: '/', expires});
    var value = new Date();
    var expires = value +30;
    console.log(value);



  */