import React from "react";
import { render } from "react-dom";
import { App } from "./components/App.jsx";

render(


  <div>
    <p>Hello, World!</p>
    <p>
      {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
    </p>
    <App session_id={document.cookie}/>
  </div>,
  document.getElementById("root")
);
