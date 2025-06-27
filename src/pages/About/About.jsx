import "./About.css";
import { About as AboutComponent } from "@components/features/About/About";

export const About = () => {

  return (
    <>
      <section className="about__container">
        <AboutComponent />
      </section>
    </>
  );
};
