import { useEffect } from "react";
import { Skills } from "./Skills";

const Home = () => {
  function apiCall() {
    const p = document.getElementById("quotes");
    const data = fetch("https://api.kanye.rest/")
      .then((response) => response.json())
      .then((data) => (p.innerText = data.quote + "\n- Kanye West"));
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    apiCall();
    console.log("i fire once");
  });
  return (
    <section className="hero " id="home">
      <div className="hero-content ">
        <div className="hero-text">
          <h1>Web Developer</h1>
          <p>
            Hi, I'm <span className="imp">kuldeep Meena</span>. A passionate
            Web Developer.
          </p>

          <p id="quotes"></p>
          <div className="hero-icons">
            <a href="https://www.linkedin.com/in/kuldeep-meena-65508083/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/kuldeepdelhi">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://drive.google.com/file/d/1mbWzvn7UXU0vQd9wJ5BhPuqw4GOV-PjV/view?usp=sharing" download="">
              <span>
                <i className="fa-solid fa-file"></i>
              </span>
            </a>
          </div>
        
        </div>

        <div className="hero__img">
          <img className="hero-img" src="dp.jpg" alt="" />
        </div>
      </div>

      <Skills />
    </section>
  );
};
export default Home;
