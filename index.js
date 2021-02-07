console.log("it works");

/* Úloha 1 - Převod měny

Dejme tomu, že si jako programátoři vyděláváte 20 euro na hodinu. Uložte tuto hodnotu do proměnné wageInEur.
Spočítejte, kolik je vaše hodinová mzda v českých korunách, jestliže kurz eura je 26.58 kč. Výsledek zaokrouhlete na celé koruny a uložte do proměnné wageInCzk.
Vypište obsah proměnné wageInCzk do webové stránky tak, aby na stránce byl nadpis h1 s obsahem:
Mzda v korunách: 532 kč*/

const wageInEur = 20;
const wageInCzk = Math.round(20 * 26.58);

document.write(`<h1>Vaše hodinová mzda je ${wageInCzk}</h1>`);






/* Úloha 2 - Knihovna

V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha. 
Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, 
aby obsahovaly čísla, řetězce i vnořený objekt.
Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.*/


const books = {
  author: "George Orwell",
  name: "1984",
  pages: 220,
  publish: {
    publisher: "Nakladatelství",
    year: 2010,
  },

  author: "Erich Maria Remarque",
  name: "Na západní frontě klid",
  pages: 250,
  publish: {
    publisher: "Epocha",
    year: 2008,
  }
}

/*může být tak, nebo lepší mít druhou knihu jako proměnnou book2. Jak se dostanu přes tečkovou anotaci
k první knize? */









/*Úloha 3 - Registrace na očkování

V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. 
Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například
 k přihlášení do systému.

Jakmile uživatel zadá věk, zkontrolujte, že je větší nebo roven 65. Pokud ano, vypište věk v pořádku.
Pokud uživatel nemá alespoň 65 let, vypište Nízký věk.
Jakmile uživatel zadá heslo, zkontrolujte, že je delší než osm znaků. Pokud není, vypište slabé heslo.*/







/* Úloha 4 -
Na obrázku vidíte rozložení čísel na klasické Francouzské ruletě. Ruleta obsahuje čísla 0 - 36. 
Každé číslo s výjimkou nuly je buď sudé nebo liché a zároveň červené nebo černé. Pro čísla 1 až 10 a 19 až 28 platí, že 
lichá čísla jsou červená a sudá jsou černá. Pro zbytek platí obrácené pravidlo, tedy lichá jsou černá a sudá červená. 
Nula není ani lichá ani sudá, ani černá ani červená.



Vytvořte stránku, které uživatel zadá číslo a stránka odpoví jestli jde o číslo sudé nebo liché, 
černé nebo červené, nebo je to nula.*/


let sazba = 500;
let vyplata = 8 * 21 * sazba;
console.log(vyplata);

sazba = 700;
vyplata = 8 * 21 * sazba
console.log(vyplata);

/*může se takto psát let proměnná?, ale ne u const*/



