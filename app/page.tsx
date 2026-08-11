import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import WhyUseUs from "./components/WhyUseUs";
import WhoWeWork from "./components/WhoWeWork";
import Community from "./components/Community";
import MapLocation from "./components/MapLocation";
import ContactFooter from "./components/ContactFooter";
import FooterCopyright from "./components/FooterCopyright";

export default function Home() {
  return (
    <div className="full-page">
      <Header />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <WhyUseUs />
      <WhoWeWork />
      <Community />
      <MapLocation />
      <ContactFooter />
      <FooterCopyright />
    </div>
  );
}
