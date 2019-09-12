import React from 'react';
import { Desktop, Mobile } from "../../../utils/device";
import MobileListing from "./MobileListing";
import DesktopListing from "./DesktopListing";

const Listing = () => {
  return (
    <div>
      <Desktop>
        <DesktopListing />
      </Desktop>
      <Mobile>
        <MobileListing />
      </Mobile>
    </div>
  );
};

export default Listing;