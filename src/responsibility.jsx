import React from "react";
import Crumb from "./crumb";
import bigPng from "../assets/ol19_big.png";

export default () => {
  return (
    <div>
      <section
        className="hero is-medium is-dark has-text-centered"
        style={{
          backgroundImage: `url('${bigPng}')`,
          backgroundSize: "cover"
        }}
      >
        <Crumb />
        <div className="hero-body">
          <div className="container">
            <div className="title">My Responsibility</div>
            <div className="subtitle">
              I have a responsibility when a member of my community is harmed.
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="subtitle">My Responsibility</div>
          <p>
            The beauty of humanity is free will, and self-awareness. The test of
            man is what one does when no one else is looking. When a member of
            my community is harmed, I have the option to do nothing, and remain
            completely silent. But if I remain complacent, I might as well be
            actively making problems worse.
          </p>
          <p>
            I understand that I have the power to make a change. As a wise man
            (Stan Lee :)) once said, with great power comes great
            responsibility. By taking a stand for what is right, I can not only
            make a change in that moment, but I can also inspire others to move
            for what is right.
          </p>
          <p>
            After completing this journey project, I learned about my own
            identity, the culture of other countries, different identities, and
            insight about people with different abilities. I am confident that I
            can, and <i>will</i>, take this information, and make a difference
            in the world around me, both as an orientation leader, and as a
            human being.
          </p>
        </div>
      </section>
    </div>
  );
};
