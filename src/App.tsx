import { create, keyframes, props } from "@stylexjs/stylex";
import { Mail } from "lucide-react";
import { GithubLogo } from "./assets/GithubLogo";
import { LinkedInLogo } from "./assets/LinkedInLogo";
import avatar from "./assets/avatar.jpeg";
import { useState } from "react";

const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "40%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const glideUp = keyframes({
  from: { transform: "translateY(20px)" },
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
  avatarRoot: {
    WebkitTapHighlightColor: "transparent",
    animationDuration: `1600ms, 2000ms`,
    animationName: `${fadeIn}, ${glideUp}`,
    animationTimingFunction: "ease-out, ease-out",
    borderRadius: "100%",
    borderTopRightRadius: 0,
    cursor: "pointer",
    position: "relative",
  },
  avatarNudge: {
    alignItems: "center",
    borderRadius: "100%",
    boxShadow: "inset 0 0 0 2px currentColor",
    boxSizing: "border-box",
    display: "flex",
    fontSize: "12px",
    height: 34,
    justifyContent: "center",
    opacity: 0,
    paddingTop: 3,
    position: "absolute",
    right: -3,
    top: -3,
    transform: "translateX(-100%) translateY(100%) scale(0)",
    transition:
      "transform 500ms cubic-bezier(.15,.26,.28,.95), opacity 500ms cubic-bezier(.15,.26,.28,.95)",
    width: 34,
  },
  avatarNudgeHover: {
    opacity: 1,
    transform: "translateX(10px) translateY(-10px) scale(1)",
    visibility: "visible",
  },
  avatar: {
    borderRadius: "100%",
    boxShadow: "0 0 0 2px currentColor",
    cursor: "pointer",
    display: "block",
    height: 160,
    position: "relative",
    transition: "150ms ease-in-out box-shadow",
    width: 160,
    zIndex: 2,
  },
  avatarHover: {},
  heading: {
    animationDuration: `1450ms, 1850ms`,
    animationName: `${fadeIn}, ${glideUp}`,
    animationTimingFunction: "ease-out, ease-out",
    margin: 0,
  },
  subHeading: {
    animationDuration: `1300ms, 1700ms`,
    animationName: `${fadeIn}, ${glideUp}`,
    animationTimingFunction: "ease-out, ease-out",
    fontWeight: 300,
    margin: 0,
  },
  links: {
    animationDuration: `1150ms, 1550ms`,
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
  const [avatarHover, setAvatarHover] = useState(false);

  return (
    <div {...props(styles.root)}>
      <div
        {...props(styles.avatarRoot)}
        onMouseEnter={() => setAvatarHover(true)}
        onMouseLeave={() => setAvatarHover(false)}
      >
        <div
          {...props(styles.avatarNudge, avatarHover && styles.avatarNudgeHover)}
        >
          hi
        </div>
        <img
          src={avatar}
          {...props(styles.avatar, avatarHover && styles.avatarHover)}
        />
      </div>
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
