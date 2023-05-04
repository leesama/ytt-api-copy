import { createRoot } from "react-dom/client";
import Panel from "./Panel";

import { awaitElement, log } from "./utils";

log("React script has successfully started");

// Do required initial work. Gets called every time the URL changes,
// so that elements can be re-inserted as a user navigates a page with
// different routes.
async function main() {
  // Find <body/>. This can be any element. We wait until
  // the page has loaded enough for that element to exist.
  const body = await awaitElement("body");
  const container = document.createElement("div");
  container.id = "setting-panel";
  body.append(container);
  createRoot(container).render(<Panel />);
}

main().catch((e) => {
  log(e);
});
