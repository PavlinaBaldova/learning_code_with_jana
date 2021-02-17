"use strict";
console.log("it works");

/*Napište funkci makeBorder, která jako vstup obdrží DOM element. Funkce nebude nic vracet, pouze předanému elementu nastaví černý rámeček tlustý 2 pixely. Vložte na stránku nějaký obsah a v konzoli vyzkoušejte, že vaše funkce funguje.*/

const makeBorder = () => {
  const makeBorderElm = document.querySelector("h1");
  makeBorderElm.style.border = "1px solid black"
  };

/*otázky fce:
vysvětlím DOM
jaký je rozdíl mezi vstupem a použitou proměnnou. Kdy se proměnná nemusí používat
vysvětlím return
jak dělat rychle komentáře
vyzkoušet anonymní fce*/

/*
Napište funkci bez parametrů s názvem goodbye. Funkce do konzole vypíše rozloučení. Příklad použití:
> goodbye()
Nashledanou
Končit e-mail slovy “nashledanou” je nezdvořilé. Přidejte proto do funkce goodbye parametr představující jméno pisatele e-mailu. Funkce do konzole vypíše koncový pozdrav i se jménem. Příklad použití:
> goodbye('Pavel Ovesný')
S pozdravem Pavel Ovesný*/

const name = "Pavel"

const goodbye = () => {
   console.log("Nashledanou" + name);
}

goodbye();

//jaký je rozdíl
const goodbye2 = (name) => {
  console.log(name);
}

goodbye2("lenka");


/* heslo => nesmí být delší jak 8 znaků, musí mít velké písmeno a číslo. 
z inputu uživatele*/

const inputElm = document.querySelector('input');
const value = inputElm.value;
const answer = document.querySelector("p");
const btnElm = document.querySelector('button');

const password = () => {
  if (value.length < 8) {
    answer.textContent = "heslo je příliš krátké";
    btnElm.textContent = "zkusit znovu";
  }
}


btnElm.addEventListener('click', password);


  /*otázky:
  používají se v praxi :nth-child, last-of-type
  máš zkušenosti s .Netem
  jak to vypadá s pozice kodérů vs. editory na CSS vs. UX
  mentorování přepisu Wix stránky
  frontendmentor: https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8*/









