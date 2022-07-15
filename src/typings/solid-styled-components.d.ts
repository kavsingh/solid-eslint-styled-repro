import "solid-styled-components";
import type { UITheme } from "../theme";

declare module "solid-styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends UITheme {}
}
