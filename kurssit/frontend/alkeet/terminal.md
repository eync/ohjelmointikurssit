---
sidebar_position: 0.1
---

# Komentoliittymä

Englanniksi Command Line Interface (CLI).
Toisella nimellä myös tunnettu Terminaali tai englanniksi Terminal.

## Johdanto

Terminaalilla voimme hallita tietokonetta ilman visuaalista ympäristöä.
Käyttäen terminaalia voimme navigoida tietokoneen tiedostoja, asentaa ohjelmia tai koodata. Voimme myös suorittaa asioita nopeammin kuin esimerkiksi klikkaillemalla oman käyttöjärjestelmän (Windows, MacOS, Linux) nappuloita.
Terminaalilla pystymme myös kirjoittamaan skriptejä eli automaattisia toimintoja.

Tarvitsemme hyvän yleisymmärryksen komentoliittymän (terminaalin) käytöstä, jos haluamme olla hyviä koodareita. Hyvä ymmärrys terminaalista nopeuttaa työntekemistä. Sitä käytetään päivittäin ja sen ymmärtäminen on erittäin tärkeää. 

## Terminaali tietokoneen käyttöjärjestelmän perusteella

Komennot ovat universaaleja ja samat komennot pätee Windowsilla ja Macilla. Paitsi, että windowsin CMD (Command Prompt) on erittäin huono ja sitä ei kannata käyttää. Se ei tue kaikkia koodauksessa tarvittavia komentoja. Joten windowsille suositellaan jotain erikseen ladattaa softaa. Esim PowerShell, GitBash tai Cmder. 

Macilla nykyään terminaali on nimellä "zsh" - macOS Catalinasta ylöspäin. Vanhemissa versioissa nimellä "Bash". 

TLDR; Mitä terminaalia käyttää?  
Windows -> PowerShell, GitBash tai Cmder   
Mac -> zsh / bash


## Tehtävät

### 1. Terminaalin käyttö  

Aloita katsomalla alla oleva video terminaaliin liittyen.    
Kiinnitä huomiota erityisesti näihin komentoihin ja kirjoita niistä muistiinpanot tietokoneellesi. Tulet käyttämään niitä tulevassa tehtävässä sekä koko ohjelmointi urasi ajan.

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

Nyt kun olemme saaneet ymmärrystä terminaalista voimme aloittaa sen käyttämisen. 

Teemme terminaalin avulla developer kansion johon lisäämme kaikki koodit/projektit/muistiinpanot jotka luomme täällä digitalents academyn pajalla.

Käytämme myös oikeaa nimikettä kansiolle joka on "directory".

1. Avaa terminaali.
2. Printtaa missä olet.
3. Printtaa mitä tiedostoja tässä directoryssä on.

Tässä vaiheessa on hyvä päättää minne haluamme tehdä "developer" directoryn. Haluamme sen olevan helposti saatavilla.

Omasta kokemuksesta tykkään laittaa "developer" directoryn heti käyttäjä juureen joka on yleensä kohteessa /user/joaleitola. Miksi? Koska se säästää aikaa ja sinne pääsee nopeasti heti terminaalin avautuessa ja ei tarvitse seikkailla kymmeniä foldereita. Voit itse päättää.

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

Tässä vaiheessa voimme itse leikkiä komennoilla ja selailla tietokoneemme directoryjä. Tärkeintä on että saimme "developer" kansion (directoryn) johon voimme tallentaa tehtäviämme. 


