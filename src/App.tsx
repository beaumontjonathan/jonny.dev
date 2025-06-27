import { create, keyframes, props } from "@stylexjs/stylex";
import { GithubLogo } from "./assets/GithubLogo";
import { LinkedInLogo } from "./assets/LinkedInLogo";

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
  heading: {
    animationDuration: "800ms, 1000ms",
    animationName: `${fadeIn}, ${glideUp}`,
    animationTimingFunction: "ease-out, ease-out",
    margin: 0,
  },
  subHeading: {
    animationDuration: "800ms, 1000ms",
    animationName: `${fadeIn}, ${glideUp}`,
    animationTimingFunction: "ease-out, ease-out",
    fontWeight: 300,
    margin: 0,
  },
  links: {
    animationDuration: "800ms, 1000ms",
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
      <h1 {...props(styles.heading)}>jonathan beaumont</h1>
      <h2 {...props(styles.subHeading)}>i write code</h2>
      <div {...props(styles.links)}>
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
