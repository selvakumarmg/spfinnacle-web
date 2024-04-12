import React from "react";
import HappyCustomers from "./HappyCustomers";
import TrustedBanks from "./TrustedBanks";

export default function TrustedBanksHC() {
  return (
    <div className="w-full h-screen flex items-center justify-between md:flex-col">
      <TrustedBanks />
      <HappyCustomers />
    </div>
  );
}
