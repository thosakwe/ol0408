import React from "react";
import Crumb from "./crumb";
import whatTheXJpg from "../assets/what_the_x.jpg";

// d. Elaborate on the event and the importance of understanding/gaining insight about another
// person’s identi
export default () => {
  return (
    <div>
      <section
        className="hero is-medium is-dark has-text-centered"
        style={{
          backgroundImage: `url('${whatTheXJpg}')`,
          backgroundSize: "cover"
        }}
      >
        <Crumb />
        <div className="hero-body">
          <div className="container">
            <div className="title">What the X</div>
            <div className="subtitle">
              I attended HLSU and Pride's event about gender norms in the
              Spanish language.
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="subtitle">What the X?</div>
          <p>
            The event in question, "What the X?", which was held by the
            Hispanic/Latino Student Union, was actually something of a
            double-whammy, in terms of represented identities. The point of the
            event was discussion about the Spanish language's relation to gender
            and patriarchy, and the reason why many people have adopted the more
            inclusive term "Latinx," rather than "Latino," when referring to the
            community. The Pride Student Union collaborated with the HLSU on
            this event, so <i>two</i> SGA agencies were present.
          </p>
          <p>
            The discussion began with a video from the Mitú publication about
            the term "Latinx," which is a gender-neutral alternative for the
            word "Latino." Spanish is an extremely gendered language, and the
            presence of even one man or male in a group overrides the gender of
            the entire group. We learned that not only does this reinforce the
            existing patriarchy, but it also provides no space for people who
            are non-binary, or on different parts of the spectrum. We then broke
            into groups of two to try to describe events of our lives without
            using gendered language, and then also read an angry response
            written to the HLSU detesting their use of the word "Latinx." It was
            very eye-opening for me, as a person who is not of Hispanic/Latinx
            descent and did not grow up in the Spanish-speaking world, to see
            such push-back to an idea as simple as replacing an "o" with an "x."
          </p>
          <p>
            It is of the <i>utmost</i> importance to understand other's
            identities. I believe that ignorance is at the root of all
            oppression. I have seen, with my own eyes, people continue to
            discriminate against others because of misinformation, rather than
            to take the opportunity to know someone of another identity. Even something
            as simple as taking a moment to listen to what another person has to say
            can go so far to ending long-standing injustice.
          </p>
        </div>
      </section>
    </div>
  );
};
