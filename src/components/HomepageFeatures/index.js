import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import image1 from "@site/static/img/image1.png";
import image2 from "@site/static/img/image2.png";
import image3 from "@site/static/img/image3.png";

const FeatureList = [
  {
    title: "Ticket Sales",
    ImgSrc: image1,
    description: (
      <>
        Fans can buy tickets easily through the platform, ensuring a seamless
        experience from purchase to entry. This feature allows for easy management of ticket sales and event attendance.
      </>
    ),
  },
  {
    title: "Membership Management",
    ImgSrc: image2,
    description: (
      <>
        Fans can subscribe to or manage their club memberships directly through
        the platform. This feature allows for easy tracking and management of club memberships.
      </>
    ),
  },
  {
    title: "Access Control",
    ImgSrc: image3,
    description: (
      <>
        Staff members validate tickets efficiently using QR code scanning,
        guaranteeing secure and fast entry at events. This feature also allows for easy tracking of attendance and ticket sales.
      </>
    ),
  },
];

function Feature({ ImgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={ImgSrc} alt={title} style={{ width: "250px", borderRadius: "5%" }} />
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
