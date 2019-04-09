import React from "react";
import Crumb from "./crumb";
import globalCafePng from "../assets/global_cafe.png";

export default () => {
  return (
    <div>
      <section
        className="hero is-medium is-dark has-text-centered"
        style={{
          backgroundImage: `url('${globalCafePng}')`,
          backgroundSize: "cover"
        }}
      >
        <Crumb />
        <div className="hero-body">
          <div className="container">
            <div className="title">Global Cafe</div>
            <div className="subtitle">
              I went with two fellow OL's to the Ecuadorean-themed Global Cafe
              event.
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="subtitle">Global Café</div>
          <p>
            I learned much more than I would have expected from Global Café, and
            overall, it was one of the most valuable experiences from this
            journey.
          </p>
          <p>
            Global Café is an event held on select Fridays, with the expressed
            goal of "[increasing] awareness and appreciation of the cultural
            diversity on our campus." On April 5th, when I went, student
            volunteers served Ecuadorean food, including extremely tasty rice,
            potatoes, and a fruit dessert. Perhaps the thing that amazed me the
            most was how little I knew about Ecuador before the event. For one
            thing, the aforementioned "fruit dessert" is actually a famous
            Ecuado dish called "come y bebe," which is Spanish for "eat and
            drink."
          </p>
          <p>
            Clearly, though, the point of the event was not really the food;
            Global Café exists so that FSU students can become more educated
            about the world around them. Especially in a nation like the United
            States where the cultural zeitgeist is very much "American
            exceptionalism," it can often be easy for us to overlook the very
            real importance of identities other than our own.
          </p>
          <p>
            As an orientation leader, I will inevitably encounter students of
            all sorts of different backgrounds. Allowing implicit biases and
            stereotypes to shape my perceptions of people is something I would
            like to avoid, and will&nbsp;
            <i>need</i> to avoid to my job well. Events like the Global Café
            help me keep my mind open.
          </p>
        </div>
      </section>
    </div>
  );
};
