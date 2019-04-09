import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
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
            <div className="title">Different Abilities</div>
            <div className="subtitle">
              Ability impacts diversity, inclusion, and social justice.
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="subtitle">Different Abilities</div>
        <p>
          Some people are differently abled than others. Contrary to common
          misconception, however, this does not limit them as people. It is
          important to use people-first language, such as the phrase "people
          with different abilities," rather than defining people by their
          physical status, and putting them into a box.
        </p>
        <p>
          Ability is one of the most important aspects of social justice, and
          yet, it is often overlooked. Many things we take for granted are not
          accessible at all, including buildings, passageways, and even
          websites. By not paying attention to the struggles of another
          identity, we run the risk of being hypocritical, and oppressing that
          group.
        </p>
        <p>
          There are resources available on campus for students with different
          abilities. For example, the Student Disability Resource Center works
          with students to provide accomodations, and University Housing can
          match differently abled students with accessible rooms. FSU is a
          university that is conscious about accessibility, and makes an effort
          to make campus accessible for everyone.
        </p>
        <p>
          That being said, there is still more that can, and should, be done. My
          friend has started a Twitter thread about places and spots on campus
          that are not as accessible as they should be.
        </p>
        <p>
          <TwitterTweetEmbed tweetId="1112890588611923968" />
        </p>
        <p>
          We have a responsibility as allies to join hands with my friend and
          people who share an identity with her, to improve the accessibility of
          our campus, so that they can also feel welcomed on campus. As
          orientation leaders, it is our job to make students feel at home here,
          and by neglecting members of our student body, we cannot do that.
        </p>
      </section>
    </div>
  );
};
