import clsx from "clsx";
import Heading from "@theme/Heading";
import Translate from '@docusaurus/Translate';
import { Map, Users, BookOpen } from 'lucide-react';
import styles from "./styles.module.css";

type FeatureItem = {
  title: JSX.Element;
  Icon: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate>Open Source GIS</Translate>,
    Icon: Map,
    description: (
      <Translate>
        Join us in promoting and developing open-source geospatial technologies in the Middle East. Share knowledge, collaborate on projects, and grow together.
      </Translate>
    ),
  },
  {
    title: <Translate>Community & Events</Translate>,
    Icon: Users,
    description: (
      <Translate>
        Connect with GIS professionals, developers, and enthusiasts. Participate in workshops, webinars, and conferences focused on open-source geospatial solutions.
      </Translate>
    ),
  },
  {
    title: <Translate>Resources & Support</Translate>,
    Icon: BookOpen,
    description: (
      <Translate>
        Access Arabic and English resources, documentation, and tutorials. Get support from the community and contribute to localizing GIS content.
      </Translate>
    ),
  },
];

function Feature({ title, Icon, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Icon className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
