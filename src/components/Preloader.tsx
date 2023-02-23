import React from "react";

type Props = {
  visibility: boolean;
};

export default function Preloader({ visibility }: Props) {
  return (
    <div
      className={
        (visibility ? "d-block " : "d-none ") +
        "spinner-border text-primary position-absolute"
      }
      style={{ width: "5rem", height: "5rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
