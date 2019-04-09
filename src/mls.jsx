import React from "react";
import Crumb from "./crumb";
import mlsJpg from "../assets/mls.jpg";

export default () => {
  return (
    <div>
      <section
        className="hero is-medium is-dark has-text-centered"
        style={{
          backgroundImage: `url('${mlsJpg}')`,
          backgroundSize: "cover"
        }}
      >
        <Crumb />
        <div className="hero-body">
          <div className="container">
            <div className="title">MLS</div>
            <div className="subtitle">
              I attended the 2019 Multicultural Leadership Summit, which was
              held from January 25th to January 26th.
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="title">MLS</div>
        <div className="subtitle">
          (Note: I <i>am</i> in the above picture. You'll need to resize your
          window to see my head... :/)
        </div>
        <p>
          I attended the 2019 Multicultural Leadership Summit, which was held
          from January 25th to January 26th. Over the course of the event, I
          attended 3 breakout sessions, and also was involved in sessions with a
          randomly-selected small group. Overall, MLS was very educational for
          me, and I appreciated being able to learn about social issues and
          topics from multiple perspectives I might not have heard otherwise.
        </p>
      </section>
      <section className="section">
        <div className="subtitle">
          Preventing Burnout: Resiliency &amp; Building Communities Across
          Campus
        </div>
        <p>
          This was the first session I attended, and was the one I was maybe
          most excited for. However, due to time constraints, not all topics
          were covered. Most of the presentation was about creating buy-in
          within an organization , and getting members on board with a vision.
          What was not touched on much, though, was resiliency and building
          cross-campus relationships, both of which were points of discussion
          listed in the description. That being said, I did learn how to create
          buy-in within an organization. It's all about navigating
          conversations, and handling conflicts in a productive manner, to
          prevent the group from falling apart.
        </p>
      </section>
      <section className="section">
        <div className="subtitle">
          Understanding the Legal Framework for Discussing Diversity
        </div>
        <p>
          Overall, this was probably the best session I attended. Hosted by a
          professor from the School of Law, the entire session analyzed court
          cases and laws that dictated how black people have been historically
          treated in this country. Cases and laws covered included the Dred
          Scott decision, the Three Fifths Compromise, and the Civil Rights Act.
        </p>
        <p>
          What stood out to me about this session was its unique approach. I am
          not a law major, nor do I have any particular interest in studying law
          (at all...), so it was surprising to see the very law of the nation
          being used as evidence to support claims of injustice. However, it was
          eye-opening because the law could be potentially be another tool to
          pursue justice, even though the law itself has often been used as a
          tool of <i>injustice</i>.
        </p>
        <p>
          My only complaint is that the session felt a bit lecture-like at
          times. That being said, I can't really think of a more effective
          method of communicating legal information to people who might not know
          anything about legal studies.
        </p>
      </section>
      <section className="section">
        <div className="subtitle">Vision-driven Leadership</div>
        <p>
          This presentation was about, as the title, indicates, vision-driven
          leadership, which involves creating a mission or vision statement for
          a group, organization, or company, and relating everything the team
          does to that goal. We covered examples like Nike's Colin Kaepernick
          advertisement,and the mission statements of famous companies like
          Apple, and Carnival cruise line. This was very interesting to me
          because strategies that could be applied to seemingly random things,
          like a cruise company, could also work very well in the context of
          social justice.
        </p>
        <p>
          Overall, this was a very solid presentation. It had one goal, and
          communicated it very well. I liked that it was very interactive, and
          the audience had many opportunities to provide input.
        </p>
      </section>
    </div>
  );
};
