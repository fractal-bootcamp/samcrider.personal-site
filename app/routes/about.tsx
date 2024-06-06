// eslint-disable-next-line import/no-unresolved

import About from "~/components/pages/About";

// unable to resolve path alias
// TODO: fix the stupid linting error.
// Eslint + typescript paths aliasing - Unable to resolve path to module
// https://stackoverflow.com/questions/70306158/eslint-typescript-paths-aliasing-unable-to-resolve-path-to-module
// https://github.com/remix-run/remix/discussions/7654

const Page = () => {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        height: "100vh",
      }}
    >
      <About />
    </div>
  );
};

export default Page;
