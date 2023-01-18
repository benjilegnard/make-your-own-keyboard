import "./style.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";

import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown";
import Notes from "reveal.js/plugin/notes/notes";

let deck = new Reveal({
  plugins: [Markdown, Notes],
});

deck.initialize({
  progress: false,
  controls: true,
  hashOneBasedIndex: true,
  hash: true,
  history: true,
});
