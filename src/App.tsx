import { create, keyframes, props } from "@stylexjs/stylex";
import { Mail } from "lucide-react";
import { GithubLogo } from "./assets/GithubLogo";
import { LinkedInLogo } from "./assets/LinkedInLogo";
import avatar from "./assets/avatar.jpeg";

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "40%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const glideUp = keyframes({
  from: { transform: "translateY(10px)" },
  to: { transform: "translateY(0px)" },
});

const styles = create({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: 32,
    margin: "0 auto",
    maxWidth: "1280px",
    padding: "2rem",
    placeItems: "center",
    textAlign: "center",
  },
  avatar: {
    animationDuration: "1600ms, 2000ms",
    animationName: `${fadeIn}, ${glideUp}`,
    animationTimingFunction: "ease-out, ease-out",
    borderColor: "currentColor",
    borderRadius: "100%",
    borderStyle: "solid",
    borderWidth: "2px",
    height: 160,
    width: 160,
  },
  heading: {
    animationDuration: "1450ms, 1850ms",
    animationName: `${fadeIn}, ${glideUp}`,
    animationTimingFunction: "ease-out, ease-out",
    margin: 0,
  },
  subHeading: {
    animationDuration: "1300ms, 1700ms",
    animationName: `${fadeIn}, ${glideUp}`,
    animationTimingFunction: "ease-out, ease-out",
    fontWeight: 300,
    margin: 0,
  },
  links: {
    animationDuration: "1150ms, 1550ms",
    animationName: `${fadeIn}, ${glideUp}`,
    animationTimingFunction: "ease-out, ease-out",
    display: "flex",
    flexDirection: "row",
    gap: 16,
    justifyContent: "stretch",
  },
  linkIcon: {
    display: "block",
    height: 20,
    width: 20,
  },
});

function App() {
  return (
    <div {...props(styles.root)}>
      <img src={avatar} {...props(styles.avatar)} />
      <h1 {...props(styles.heading)}>jonathan beaumont</h1>
      <h2 {...props(styles.subHeading)}>code, product, more</h2>
      <div {...props(styles.links)}>
        <a
          href={`mailto:hello@jonny.dev?subject=${encodeURIComponent("An introduction")}&body=${encodeURIComponent("Hi Jonathan\n\nI found your website & wanted to reach out.")}`}
        >
          <Mail {...props(styles.linkIcon)} />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-beaumont-403187147">
          <LinkedInLogo {...props(styles.linkIcon)} />
        </a>
        <a href="https://github.com/beaumontjonathan">
          <GithubLogo {...props(styles.linkIcon)} />
        </a>
      </div>
    </div>
  );
}

export default App;
