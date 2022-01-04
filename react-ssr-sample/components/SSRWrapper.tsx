import React from "react";

interface Props {
  html: string;
  initialData: string;
}

const SSRWrapper = (props: Props) => {
  return (
    <>
      <div id="app" dangerouslySetInnerHTML={{ __html: props.html }}></div>
      <script
        id="initial-data"
        type="application/json"
        dangerouslySetInnerHTML={{ __html: props.initialData }}
      />
    </>
  );
};

export default SSRWrapper;
