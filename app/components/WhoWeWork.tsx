import Image from "next/image";

const PARTNERS = [
  {
    logo: "/images/business-plaza-logo.png",
    alt: "Business Plaza",
    width: 130,
    height: 55,
    name: "Business Plaza",
    description:
      " is a Local Area Media Network that provides an advertising channel for brands, both local and national, to advertise their products and services to local communities extremely cost effectively. It also provides recurring income for community based groups such as sports clubs and associations, schools and charities.",
    href: "https://www.business-plaza.com/",
    linkText: "www.business-plaza.com",
  },
  {
    logo: "/images/webalive-work-logo.png",
    alt: "WebAlive",
    width: 149,
    height: 25,
    name: "WebAlive",
    description:
      " is an Australian technology and digital agency that offers digital strategy, web design, eCommerce websites, development, graphic design and online marketing services to empower businesses with affordable, bespoke solutions.",
    href: "http://www.webalive.com.au/",
    linkText: "www.webalive.com.au",
  },
  {
    logo: "/images/autoBill-logo.png",
    alt: "AutoBill",
    width: 140,
    height: 44,
    name: "AutoBill",
    description:
      " is one of the most advanced recurring billing, subscriptions, invoicing and payments systems available. AutoBill puts you in control of your billing, while reducing the amount of time and effort you and your staff or volunteers have to spend on this important function, and it speeds up payment to you improving cash flow.",
    href: "http://www.autobill.com/",
    linkText: "www.autobill.com",
  },
  {
    logo: "/images/mercurycreative-logo.png",
    alt: "Mercury",
    width: 158,
    height: 52,
    name: "B Radio Network",
    description:
      " is one of the largest FM and DAB+ radio station networks in Australia operating across metropolitan and regional areas. All stations have a local community focus and support community sport through promotion of sport and outside broadcasts of games.",
    href: null,
    linkText: null,
  },
];

export default function WhoWeWork() {
  return (
    <section className="who-we-work">
      <div className="container">
        <h6 className="who-work-heading">
          <span>Who We Work With</span>
        </h6>
        <p className="sub-text">
          We have a number of relationships that provide substantial
          additional services to schools, clubs and associations.
        </p>
        <div className="our-work-wrap">
          {PARTNERS.map((partner) => (
            <div key={partner.name}>
              <div className="our-work-content">
                <div className="our-work-heading">
                  <Image
                    src={partner.logo}
                    alt={partner.alt}
                    width={partner.width}
                    height={partner.height}
                  />
                </div>
                <strong>{partner.name}</strong>
                {partner.description}{" "}
                {partner.href && (
                  <a href={partner.href} target="_blank" rel="noreferrer">
                    {partner.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
