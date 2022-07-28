import { render } from "solid-js/web";
import { styled, ThemeProvider } from "solid-styled-components";

import { theme } from "./theme";

import type { Component } from "solid-js";

const Container = styled.div<{ opacity: number }>`
  padding: ${(props) => props.theme?.spacing[1]};
  color: ${(props) => props.theme?.colors.text[400]};
  font-family: ${(props) => props.theme?.fonts.body};
  background-color: ${(props) => props.theme?.colors.surface[0]};
  opacity: ${(props) => props.opacity};
`;

const App: Component = () => (
  <ThemeProvider theme={theme}>
    <Container opacity={0.4}>Hello</Container>
  </ThemeProvider>
);

const appRoot = document.getElementById("app-root");

if (!appRoot) throw new Error("#app-root not found");

render(() => <App />, appRoot);
