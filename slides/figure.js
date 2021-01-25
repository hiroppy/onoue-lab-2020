import React from "react";

export const Figure = (props) => {
  return (
    <figure
      style={{
        maxWidth: props.width ?? "100%",
        height: props.height ?? "auto",
        // textAlign: props.position ?? "left",
        margin: props.position === "center" ? "0 auto" : "0",
      }}
    >
      <img src={props.src} alt={props.alt} />
      {props.caption && <figcaption>{props.caption}</figcaption>}
    </figure>
  );
};
