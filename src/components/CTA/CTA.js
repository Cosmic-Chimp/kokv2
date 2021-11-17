import React from "react";
import { CtaOuter, CtaLeft, CtaRight } from "./CtaStyles"; // also import HeaderTwo from here
const CTA = () => {
  return (
    <>
      <CtaOuter>
        <CtaLeft>
          <h2>Subscribe</h2>
        </CtaLeft>
        <CtaRight>
          <button className="subButton">NewsLetter</button>
        </CtaRight>
      </CtaOuter>
    </>
  );
};

export default CTA;
