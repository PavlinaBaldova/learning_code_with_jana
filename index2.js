"use strict";
console.log("it works");

/* Úloha 1 - Převod měny

Dejme tomu, že si jako programátoři vyděláváte 20 euro na hodinu. Uložte tuto hodnotu do proměnné wageInEur.
Spočítejte, kolik je vaše hodinová mzda v českých korunách, jestliže kurz eura je 26.58 kč. Výsledek zaokrouhlete na celé koruny a uložte do proměnné wageInCzk.
Vypište obsah proměnné wageInCzk do webové stránky tak, aby na stránce byl nadpis h1 s obsahem:
Mzda v korunách: 532 kč*/

const wageInEur = 20;
const eurToCzk = 26.58;
const wageInCzk = Math.round(wageInEur * eurToCzk);

document.write(`<h1>Vaše hodinová mzda je ${wageInCzk}</h1>`);






/* Úloha 2 - Knihovna

V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha. 
Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, 
aby obsahovaly čísla, řetězce i vnořený objekt.
Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.*/

const book1 = {
  author: "George Orwell",
  name: "1984",
  pages: 220,
  publish: {
    publisher: "Nakladatelství",
    year: 2010,
  },
  toString: function () {
    return `I am a book ${this.name} by ${this.author}`;
  }
};

const book2 = {
  author: "Sekora",
  name: "Ferda Mravenec",
  pages: 220,
  publish: {
    publisher: "Nakladatelství",
    year: 2010,
  },
  toString: function () {
    return `I am a book ${this.name} by ${this.author}`;
  }
}

const books = [book1, book2, 42, "Janca"];

books.forEach((book) => {
  console.log(`Kniha: ${book}`);
});




  const { author, name, pages } = books;

  const content = `Kniha má ${pages} stránek a napsal ji ${author}`;
  
  document.write(content);

