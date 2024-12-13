import React from "react";

function T32_Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a hero!");
  }
  return <div>{heroName}</div>;
}

export default T32_Hero;
