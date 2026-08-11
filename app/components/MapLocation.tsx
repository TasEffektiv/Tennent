export default function MapLocation() {
  return (
    <section className="map-location">
      <div className="map-link-body">
        <a
          href="https://www.google.com.au/maps/place/Balmain+NSW+2041,+Australia/@-33.8583148,151.1806992,15z/data=!3m1!4b1!4m5!3m4!1s0x6b12af9c9556e141:0x5017d681632aca0!8m2!3d-33.8587742!4d151.1775556?hl=en"
          target="_blank"
          rel="noreferrer"
        >
          Open The Location Map
        </a>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13252.865389982087!2d151.18069915!3d-33.85831485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12af9c9556e141%3A0x5017d681632aca0!2sBalmain%20NSW%202041%2C%20Australia!5e0!3m2!1sen!2sbd!4v1658199601003!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen
          title="Tennent location map"
        />
      </div>
    </section>
  );
}
