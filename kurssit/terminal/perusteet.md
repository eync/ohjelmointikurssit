Komentoliittymä (engl. Command Line Interface, Lyhenne: CLI). Tunnetaan myös sanalla terminaali (engl. Terminal).

## Johdanto

Komentoliittymällä voidaan hallita tietokonetta ilman visuaalista ympäristöä. Sillä voidaan myös muun muassa suunnistaa tietokoneen tiedostojärjestelmässä, asentaa ohjelmia tai koodata. Komentoliittymässä on mahdollista suorittaa asioita nopeammin kuin esimerkiksi navigoiden ja klikkailemalla käyttöjärjestelmän (Windows, MacOS, Linux) omasssa graafisessa käyttöliittymässä. Terminaalin avulla voidaan suorittaa skriptejä ja automatisoida myös toimintoja sekä tehtäviä. 

Ohjelmointipuolen tehtävissä terminaali onkin Stack Overflow:n 2020 kyselyn mukaan TOP 10 listalla käytetyimmissä ja hyvin maksavissa taidoissa. (Lähteet: https://insights.stackoverflow.com/survey/2020#top-paying-technologies https://insights.stackoverflow.com/survey/2020#technology-programming-scripting-and-markup-languages).

Hyvä yleisymmärrys terminaalin käyttämisestä nopeuttaa ohjelmointia sekä työntekemistä. Sen ymmärtäminen on erittäin tärkeää ja sen osaamista katsotaan myös hyvällä työelämässä, sitä kannattaa käyttää päivittäin jotta sen käyttämisestä tulisi sujuvaa. 

## Terminaali tietokoneen käyttöjärjestelmän perusteella

Moni komennoista ovat universaaleja ja toimivat myös Windowsilla, Macilla ja Linuxilla. Joitain eroavaisuuksia kuitenkin löytyy, esimerkiksi windowsin CMD (Command Prompt) ei voida suositella käytettävän sen puutteidein takia. Se ei tue kaikkia tarvittavia komentoja. Windowsille suositellaankin käytettävän joitain seuraavista terminaali sovelluksista: PowerShell, GitBash tai Cmder. 

Macilla on oletuksena hyvä terminaali, nimeltä Terminal. Jos haluat enemmän toiminnallisuuksia niin lataa esimerkiksi iTerm2.

Huom. jos kaipaat enemmän dynaamisiä toimintoja komentokehotteelle niin kannattaa asentaa ZSH. Se toimii valitsemasi terminaali sovelluksen päällä ja tuo aputoimintoja kuten hakutyökalun komentoriville. 

TLDR; Mitä terminaalia käyttää?  
Windows -> PowerShell, GitBash tai Cmder   
Mac -> Terminal tai iTerm2


## Tehtävät

### 1. Terminaalin käyttö  

Aloita katsomalla alla oleva video terminaaliin liittyen.    
Kiinnitä huomiota erityisesti näihin komentoihin ja kirjoita niistä muistiinpanot itsellesi. Tulet käyttämään niitä seuraavassa sekä tulevissa tehtävissä ja myös mahdollisesti koko ohjelmointi urasi ajan.

| Komento     | Kuvaus |
| ----------- | ----------- |
| pwd         | printtaa tämä kansio       |
| ls          | printtaa tämän kansio tiedostot       |
| clear       | puhdista terminaali       |
| cd          | vaihda kansio      |
| mkdir       | tee uusi kansio       |
| touch       | tee uusi tiedosto  |
| rm          | poista tiedosto tai kansio  |
| cat         | lue tiedosto  |

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CV-ven_rxhw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 2. Terminaalilla oma projektit kansio

Seuraavassa tehtävässä aloitetaan terminaalin käyttäminen. 

Luo terminaalin avulla "developer" niminen kansion, johon lisätään kaikki tulevat koodit, projektit, tehtävät ja muistiinpanot, jotka tulet tekemään ohjelmointi kurssit sivuston tehtävä osuuksissa.  

Huom. seuraavassa kohdassa ei käytetä sanaa kansio vaan englanninkielistä vastinetta "directory".

1. Avaa terminaali.
2. Printtaa missä olet tiedostojärjestelmässä.
3. Printtaa mitä tiedostoja tässä directoryssä on.

Tässä vaiheessa on hyvä päättää paikka minne luoda "developer" directory. Se tulisi olla helposto löydettävissä ja saatavilla.

Esimerkiksi voit laittaa "developer" directoryn käyttäjän juurihakemistoon. Windows käyttöjärjestelmässä käyttäjän juurihakemisto löytyy seuraavasta polusta: `c:\Users\JoaLeitola\`. Macillä se löytyy seuraavasta paikasta: `/users/JoaLeitola/`. Ja linuxilla: `/home/JoaLeitola/`. Käyttäjän kannattaa aina käyttää omaa kotikansioita luodessa tiedostoja omaan käyttöön, syyt tähän ovat seuraavat: löytyy helposti, on kirjoitusoikeudet tiedostohakemistoon, ja käyttöjärjestelmän tietoturva. Aiheeseen kannattaa tutustua omatoimisesti. 

<img src="/img/terminal-exercise-img-1.png" style={{width: 590, height: 350}}/>

4. Tee uusi directory ja anna sille nimeksi "developer".
5. Printtaa mitä tiedostoja tässä directoryssä on ja huomaa uusi "developer" directory.
6. Siirry uuteen "developer" directoryyn.
7. Printtaa missä olet.
8. Luo uusi tekstitiedosto "developer" directoryyn nimellä "random.txt".
9. Printtaa mitä tiedostoja tässä directoryssa on ja huomaa uusi "random.txt" tiedosto.
10. Poista "random.txt" tiedosto.
11. Printtaa mitä tiedostoja tässä directoryssä on ja huomaa että se on tyhjä.
12. Tyhjennä terminaali.

Tässä vaiheessa onkin hyvä hieman leikkiä komennoilla ja selailla tietokoneen directoryjä. Tärkeintä on että koneelta löytyy nyt "developer" niminen directory johon voi tallentaa tehtäviä. 