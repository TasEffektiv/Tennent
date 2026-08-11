import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="home-about" id="aboutus-section">
      <div className="container">
        <div className="row">
          <div className="home-about-left">
            <h4>About Us</h4>
            <p>
              Small sporting clubs and associations need money to provide
              services for their members and seek this through sponsorship.
              Large corporations have marketing budgets but small clubs and
              associations don&rsquo;t have the ability to approach large
              corporations to present themselves properly.
            </p>
            <p>
              Large corporations want to reach grass roots consumers with
              their marketing, but generally can&rsquo;t deal with thousands
              of small community based clubs and associations.
            </p>
            <div className="home-about-left-text">
              <p>
                <strong>
                  Tennent is one single point of contact for large
                  corporations to reach thousands of individual groups, while
                  being able to represent small clubs and associations to
                  large corporations.
                </strong>
              </p>
              <p>
                Through Tennent&rsquo;s association with media network
                Business Plaza we have sponsorship rights for more than 7,000
                sporting clubs and associations across Australia covering
                most codes. This will continue to increase as schools and
                charities join the network.
              </p>
            </div>
          </div>
          <div className="home-about-right-col">
            <div className="home-about-right">
              <Image
                src="/images/home-about.jpg"
                alt="About Tennent"
                width={482}
                height={440}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
