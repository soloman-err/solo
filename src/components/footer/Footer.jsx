import './Footer.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="slider">
        <marquee>欢 迎 来 到 所 罗 门 总 部。</marquee>
      </div>
      ©{currentYear} Soloman - Design & Code
    </footer>
  );
};

export default Footer;
