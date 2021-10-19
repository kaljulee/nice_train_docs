import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Lorem Ipsum',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        These sections
      </>
    ),
  },
  {
    title: 'Lorem Lorem Ipsum',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        May get used
      </>
    ),
  },
  {
    title: 'Ipsum Lorem',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Eventually
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
