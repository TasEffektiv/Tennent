import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";

export default function FooterCopyright() {
  return (
    <footer className="footer-copyright">
      <div className="container">
        <div className="footer-bottom">
          <ul className="footer-social">
            <li>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Google Plus">
                <FaGooglePlusG />
              </a>
            </li>
          </ul>
          <p>&copy; Tennent 2015. All Rights Reserved.</p>
          <p className="copyright-text">
            Website by{" "}
            <a
              href="https://www.webalive.com.au/"
              target="_blank"
              rel="nofollow noreferrer"
            >
              WebAlive
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
