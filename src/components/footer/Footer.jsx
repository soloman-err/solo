import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <footer>{'////'} © {currentYear} Soloman - Design & Code</footer>;
};

export default Footer;
