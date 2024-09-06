import Lottie from "lottie-react";
import "./Conatct.css";
import { useForm, ValidationError } from "@formspree/react";
import doneAnimation from "../../../src/animation/successfully done.json";
import contactAnimation from "../../../src/animation/contact-us.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjkbzvnl");

  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-envelope" />
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and get notified when i publish
        something new.
      </p>
      <div
        className="flex"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your Message:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Your Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p
              className="flex contact-us-p"
              style={{ fontSize: "16px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 80 }}
                animationData={doneAnimation}
              />
              Your message has been sent successfully! 👌
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 400 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
