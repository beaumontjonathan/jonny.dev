import { GithubLogoVersion2 } from "./GithubLogo";
import { LinkedInLogo } from "./LinkedInLogo";

function App() {
  return (
    <div
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        textAlign: "center",
        gap: 32,
      }}
    >
      <h1 style={{ margin: 0 }}>jonathan beaumont</h1>
      <h2 style={{ margin: 0, fontWeight: 300 }}>i write code</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 32,
          justifyContent: "stretch",
        }}
      >
        <a href="https://github.com/beaumontjonathan">
          <span style={{ paddingTop: 2 }}>beaumontjonathan</span>
          <GithubLogoVersion2
            style={{ display: "block", width: 20, height: 20 }}
          />
        </a>
        <a href="https://www.linkedin.com/in/jonathan-beaumont-403187147">
          <span style={{ paddingTop: 2 }}>jonathan beaumont</span>
          <LinkedInLogo style={{ display: "block", width: 20, height: 20 }} />
        </a>
      </div>
    </div>
  );
}

export default App;
