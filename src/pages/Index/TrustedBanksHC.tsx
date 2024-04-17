import React from "react";
import HappyCustomers from "./HappyCustomers";
import TrustedBanks from "./TrustedBanks";

export default function TrustedBanksHC() {
  return (
    <div className="w-full h-screen flex sm:flex-col items-center justify-between md:flex-col md:items-stretch md:justify-center md:h-max sm:h-min sm:pt-10 sm:gap-y-5">
      <TrustedBanks />
      <HappyCustomers />
    </div>
  );
}
