import type { MetaFunction } from "@remix-run/node";
import Home from "~/components/pages/Home";

export const meta: MetaFunction = () => {
  return [
    { title: "Sam Crider" },
    { name: "description", content: "Welcome to my personal site!" },
  ];
};

export default function Index() {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.8",
        height: "100vh",
      }}
    >
      <Home />
    </div>
  );
}
