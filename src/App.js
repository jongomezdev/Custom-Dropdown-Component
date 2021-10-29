import React from "react";
import { ActionMenu } from "./components/ActionMenu";
import AnalyticsProvider from "./components/AnalyticsContext";

import "./App.scss";

const data = [
  { label: "Chocolate", value: "Chocolate" },
  { label: "Vanilla", value: "Vanilla" },
  { label: "Strawberry", value: "Strawberry" }
];

const size = [{ default: "default" }, { large: "large" }];

const App = () => {
  return (
    <main className="app-main">
      <h1>Code challenge sandbox</h1>
      <p>Use this space to document/demo your Action Menu component</p>
      <AnalyticsProvider>
        <ActionMenu data={data} size={size} />
      </AnalyticsProvider>
    </main>
  );
};

export default App;
