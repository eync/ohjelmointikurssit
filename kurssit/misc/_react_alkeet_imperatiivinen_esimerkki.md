Imperatiivisessä koodissa käydään tekemässä ja samalla tarkistetaan että se tulostuu, ns kädestä pitäen.
```js title="Esimerkki imperatiivisesta javascript koodista"
const kurssit = ['Frontend väylä','Backend väylä','Fullstack väylä'];

const tekstinPituus = tulo => {
    let kurssitLaskettuna = [];
    for (let x = 0; x < tulo.length; x++) {
        kurssitLaskettuna.push(tulo[x].length)
    }
    return kurssitLaskettuna
}

tekstinPituus(kurssit);
// mitä tulostaa: 
// => [ 14, 13, 15 ]
```