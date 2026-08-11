import Image from "next/image";

const ITEMS = [
  { icon: "icon-do-one", text: "At grounds promotions and activations" },
  { icon: "icon-do-two", text: "At grounds hospitality events" },
  { icon: "icon-do-three", text: "Direct marketing to members" },
  {
    icon: "icon-do-four",
    text: "Target audiences geographically, by sporting code or demographically",
  },
  {
    icon: "icon-do-one",
    text: "Passive, with signage and branding at club grounds and web sites",
  },
  { icon: "icon-do-two", text: "High profile with branding on player kit" },
  { icon: "icon-do-three", text: "Short term for tactical campaigns" },
  { icon: "icon-do-four", text: "Long term for brand building" },
];

export default function WhatWeDo() {
  return (
    <section className="what-we-do" id="what-do-section">
      <div className="row row-eq-height">
        <div className="what-do-left">
          <div className="what-do-left-text">
            <h4>What We do</h4>
            <p>
              Tennent provides a complete one stop for all sponsorship
              management at grass roots communities. Sponsorship can include:
            </p>
            <ul>
              {ITEMS.map((item, i) => (
                <li key={i} className={item.icon}>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="what-do-right">
          <Image
            src="/images/what-do-right.jpg"
            alt="what-do-right"
            width={823}
            height={730}
          />
        </div>
      </div>
    </section>
  );
}
