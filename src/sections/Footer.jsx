import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="socials">
            {socialImgs.map((socialImg, index) => (
              <div key={index} className="icon">
                <a 
                  href={socialImg.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Visit ${socialImg.name}`}
                >
                  <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
                </a>
              </div>
            ))}
          </div>
          <div className="contact-info flex flex-col items-center gap-2">
            <a href="mailto:reddygohjpl@gmail.com" className="text-white-50 hover:text-white transition-colors">
              Email : reddygopalkrishna06@gmail.com
            </a>
            <a href="tel:+917989875331" className="text-white-50 hover:text-white transition-colors">
              Phone Number : +91 7989875331
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Reddy Gopala Krishna. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
