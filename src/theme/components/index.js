import Button from "./Button";
import Link from "./Link";
import Accordion from "./Accordion";

const components = (theme) => ({
  ...Button(theme),
  ...Link(theme),
  ...Accordion(theme),
});

export default components;
