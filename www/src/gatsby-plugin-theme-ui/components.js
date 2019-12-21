import React from "react";
export default {
  li: props => {
    console.log(props, "li props");
    return <li {...props}>{props.children}</li>;
  }
};
