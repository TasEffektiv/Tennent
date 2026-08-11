import Image from "next/image";

export default function WhyUseUs() {
  return (
    <section className="what-use-us" id="what-use-section">
      <div className="row row-eq-height">
        <div className="why-use-left">
          <Image
            src="/images/why-use-left.jpg"
            alt="why-use-left"
            width={797}
            height={565}
          />
        </div>
        <div className="why-use-right">
          <div className="why-use-text">
            <h4>Why Use Us</h4>
            <p>
              We have been managing sponsorship for community based groups
              since 2006 and understand the dynamics of volunteer not for
              profit community groups.
            </p>
            <p>
              With sporting and community groups being volunteer run, it
              means the volunteers have other jobs. Everyone is working
              harder and there are fewer and fewer volunteers, and as a
              result, aside from volunteer burn-out, with best intentions
              things often just don&rsquo;t get done.
            </p>
            <p>
              By taking a managing position in the relationship between
              sponsors and our clubs and associations we make sure that our
              communities are properly presented, that promises to sponsors
              are fulfilled and that benefits are maximised for each party.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
