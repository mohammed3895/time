import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Toaster } from "./components/ui/toaster.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider storageKey="vite-ui-theme">
        <App />
        <Toaster />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
