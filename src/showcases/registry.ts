import type { ComponentType } from "react";
import Example1 from "./example1/Example1";
import Example2 from "./example2/Example2";
import Example3 from "./example3/Example3";
import Example4 from "./example4/Example4";
import Example5 from "./example5/Example5";
import Example6 from "./example6/Example6";
import example1 from "./example1/config.json";
import example2 from "./example2/config.json";
import example3 from "./example3/config.json";
import example4 from "./example4/config.json";
import example5 from "./example5/config.json";
import example6 from "./example6/config.json";
import type { ShowcaseConfig } from "../types/showcase";

export type ShowcaseProps = { navigate: (path: string) => void };
export const showcaseRegistry: Record<
  string,
  { config: ShowcaseConfig; component: ComponentType<ShowcaseProps> }
> = {
  example1: { config: example1, component: Example1 },
  example2: { config: example2, component: Example2 },
  example3: { config: example3, component: Example3 },
  example4: { config: example4, component: Example4 },
  example5: { config: example5, component: Example5 },
  example6: { config: example6, component: Example6 },
};
