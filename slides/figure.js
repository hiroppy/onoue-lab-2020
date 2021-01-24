import React from "react";

export const Figure = (props) => {
  return (
    <figure style={{ maxWidth: props.width ?? "100%" }}>
      <img src={props.src} alt={props.alt} />
      {props.caption && <figcaption>{props.caption}</figcaption>}
    </figure>
  );
};
