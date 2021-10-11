Imperatiivisessä koodissa käydään tekemässä ja samalla tarkistetaan että se tulostuu, ns kädestä pitäen.
```js title="Esimerkki imperatiivisesta javascript koodista"
const kurssit = ['Frontend väylä','Backend väylä','Fullstack väylä'];

const tekstinPituus = () => {
    let kurssitLaskettuna = [];
    for (let x = 0; x < kurssit.length; x++) {
        kurssitLaskettuna.push(kurssit[x].length)
    }
    return kurssitLaskettuna
}

tekstinPituus(kurssit);
// mitä tulostaa: 
// => [ 14, 13, 15 ]
```