import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Ajankohtaiset materiaalit',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Materiaalit ja väylämoduulit muuttuvat saadun palautteen myötä.
        Tarjonta on tällä hetkellä sellainen mihin jokaisella on helppo päästä mukaan ja myös haastaa itseänsä.
      </>
    ),
  },
  {
    title: 'Johdonmukaista opettelua',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Selkeät väylät auttavat ohjelmoinnin opettelussa. Sivustolta löydät 5 eri väylää pääteemoittain.
      </>
    ),
  },
  {
    title: 'Kuratointi',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Materiaali on kuratoitu sivuille ja osa materiaaleista on toteuttu ylläpitäjän eli kouluttajan toimesta.
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
