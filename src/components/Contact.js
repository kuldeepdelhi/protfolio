import { Feedback } from "./Feedback";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__title">
          <h3>CONTACT</h3>
          <h5>
            Feel free to contact me over email or phone. Always open to discuss
            new ideas!
          </h5>
        </div>
        <div className="contact__content">
          <Feedback />
          <div className="contact__icons">
            <div className="contact__icon-box">
              <a href="tel:9971268698">
                <span>
                  <i className="fa-solid fa-mobile"></i>
                </span>
                <div className="contact__info">
                  <h5>Phone</h5>
                  7000376934
                </div>{" "}
              </a>
            </div>

          

            <div className="contact__icon-box">
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=pravesh.meena2892@gmail.com&tf=cm">
                <span>
                  <i className="fa-solid fa-envelope-open-text"></i>
                </span>
                <div className="contact__info">
                  <h5>Mail</h5>
                  kuldeep.meena.delhi@gmail.com
                </div>
              </a>
            </div>

            <div className="contact__icon-box">
              <a href="https://drive.google.com/file/d/1mbWzvn7UXU0vQd9wJ5BhPuqw4GOV-PjV/view?usp=sharing" download target="_blank">
                <span>
                  <i className="fa-solid fa-file"></i>
                </span>
                <div className="contact__info">
                  <h5>Resume</h5>
                  download
                </div>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
