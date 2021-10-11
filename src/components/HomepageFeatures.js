import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Ajankohtaiset materiaalit',
    Svg: require('../../static/img/undraw_ajankohtaisuus.svg').default,
    description: (
      <>
        Materiaalit ja väylämoduulit muuttuvat teknologia-alan tarpeiden ja myös saadun palautteen myötä.
        Tarjonta on tällä hetkellä sellainen mihin jokaisella on helppo päästä mukaan ja myös haastaa itseänsä.
      </>
    ),
  },
  {
    title: 'Johdonmukaista opettelua',
    Svg: require('../../static/img/undraw_vaylat.svg').default,
    description: (
      <>
        Selkeät väylät auttavat ohjelmoinnin opettelussa. Sivustolta löydät viisi web-ohjelmointia tukevaa opiskelu väylää pääteemoittain.
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/kurssit/">
            Katso saatavilla oleva kurssitarjonta
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Kuratointi',
    Svg: require('../../static/img/undraw_kuratointi.svg').default,
    description: (
      <>
        Sivulta löydät esimerkiksi videoita mitä hyödynnetään osuuksien selittämisessä. Kaikki suomenkieliset tekstit on kirjoitettu kouluttajan toimesta.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
