import { Button } from "components";
import React from "react";

export default function GetLoanPage() {
  return (
    <>
      <div className="grid gap-x-4 gap-y-5 grid-cols-2 sm:grid-cols-1">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="mobile-number">Mobile Number</label>
          <input
            type="number"
            id="mobile-number"
            placeholder="Mobile Number"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="employee-type">Employee Type</label>
          <input
            type="text"
            id="employee-type"
            placeholder="Employee Type"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            placeholder="Pincode"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="annual-income">Annual Income</label>
          <input
            type="text"
            id="annual-income"
            placeholder="Annual Income"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm"
          />
        </div>
        <div>
          <label htmlFor="type-of-loan">Type Of Loan</label>
          <input
            type="text"
            id="type-of-loan"
            placeholder="Type of Loan"
            className="h-10 !p-5 my-3  !bg-[#FCF1F4] !rounded-sm"
          />
        </div>
      </div>
      <Button
        shape="round"
        className="mt-[20px] ml-40 min-w-[300px] font-lato font-medium sm:px-5 hover:bg-[hsl(340,89%,58%)]"
      >
        Submit
      </Button>
    </>
  );
}
