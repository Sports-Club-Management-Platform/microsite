import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import image1 from "@site/static/img/image1.png";

const FeatureList = [
  {
    title: "Ticket Sales",
    ImgSrc: image1,
    description: <></>,
  },
  {
    title: "Membership Management",
    ImgSrc: image1,
    description: <></>,
  },
  {
    title: "Access Control",
    ImgSrc: image1,
    description: <></>,
  },
];

function Feature({ ImgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={ImgSrc} alt={title} style={{ width: "250px" }} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
