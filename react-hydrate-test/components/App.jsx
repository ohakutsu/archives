import React from "react";

const App = () => {
  let d = "";
  if (typeof window === "undefined") {
    d = "server";
  } else {
    d = "client";
  }

  return (
    <>
      <div
        style={{ backgroundColor: "pink" }}
        dangerouslySetInnerHTML={{ __html: d }}
      ></div>
      <div>{d}</div>
    </>
  );
};

export default App;
