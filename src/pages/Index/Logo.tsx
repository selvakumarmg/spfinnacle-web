import CompanyLogo from "assets/images/CompanyLogo";
import React from "react";

export default function Logo() {
  return (
    <div className="flex-1">
      <a href="#home-page" title="home">
        <CompanyLogo />
      </a>
    </div>
  );
}
