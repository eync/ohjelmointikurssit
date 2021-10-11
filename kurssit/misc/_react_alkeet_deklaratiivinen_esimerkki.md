Deklaratiivisessä koodissa luotetaan että funktiot hoitavat homman niinkuin on pyydetty, eli lista kurssien nimien pituuksista.
```js title="Esimerkki deklaratiivisestä javascript koodista"
const kurssit = ['Frontend väylä','Backend väylä','Fullstack väylä'];

const tekstinPituus = tulo => {
    return tulo.map(kurssi => kurssi.length);
}

tekstinPituus(kurssit);
// mitä tulostaa: 
// => [ 14, 13, 15 ]
```