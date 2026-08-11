"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById("aboutus-section");
    const header = document.querySelector(".header-content") as HTMLElement | null;
    if (!el) return;
    const offset = header?.offsetHeight ?? 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section className="home-slider" id="home-slider">
      <div className="home-slider-title">
        <h2>We Help Provide Funds For Community Groups Through Sponsorship</h2>
        <p>
          <span>
            We Provide Effective Management of Sponsorship and Marketing
            Investment For Brands
          </span>
        </p>
      </div>
      <button
        className="arrow-vertical"
        onClick={scrollToAbout}
        aria-label="Scroll to About Us"
      />
      <Image
        src="/images/slider-banner.jpg"
        alt="slider-content"
        width={1900}
        height={720}
        priority
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
}
