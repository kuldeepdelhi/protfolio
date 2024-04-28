const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social">
          <a
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kuldeep-meena-65508083/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/kuldeepdelhi"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="resume">
          {" "}
          <a href="https://drive.google.com/file/d/1mbWzvn7UXU0vQd9wJ5BhPuqw4GOV-PjV/view?usp=sharing" download="">
            <span>
              <i className="fa-solid fa-file"></i>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
