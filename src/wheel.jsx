import React from "react";
import Crumb from "./crumb";
import wheelStillJpg from "../assets/wheel_still.jpg";
import wheelPdf from "../assets/wheel.pdf";

//  Wheel. What new perspectives have you learned about your own ide
export default () => {
  return (
    <div>
      <section
        className="hero is-medium is-dark has-text-centered"
        style={{
          backgroundImage: `url('${wheelStillJpg}')`,
          backgroundSize: "cover"
        }}
      >
        <Crumb />
        <div className="hero-body">
          <div className="container">
            <div className="title">Personal/Social Identity Wheels</div>
            <div className="subtitle">
              I completed the Personal and Social Identity wheels to better
              understand my own identity.
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="subtitle">Personal/Social Identity Wheels</div>
          <p>
            <a href={wheelPdf} target="_blank">Click here</a> to download my identity wheels.
          </p>
          <p>
            To be honest, I actually was already very cognizant of my identity.
            However, it is always important to check one's self, and remember
            that you might have privileges that you take for granted. For
            example, though I am an African American, I am also a man,
            cisgender, and am heterosexual, which means that there are many
            aspects of my identity for which I will not face persecution. It is
            important to consider the intersection of multiple identities, as
            people are multi-faceted, and cannot be fit neatly into boxes.
          </p>
          <p>
            It is important for me to keep my identity in mind when talking to
            women, members of the LGBTQIA+ community, and specifically members
            of the trans community. My status as a member of an oppressive group
            can create a power dynamic in conversations that I must be mindful
            of. Otherwise, I will not be making orientiation a truly inclusive
            and welcoming space for all students.
          </p>
        </div>
      </section>
    </div>
  );
};
