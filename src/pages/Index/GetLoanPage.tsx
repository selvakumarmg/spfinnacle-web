import { Button, Input } from "components";
import { loanTypes } from "pages/constants/getloanconst";
import React, { useState } from "react";

export default function GetLoanPage() {
  // State to manage the selected loan type
  const [loanTypeSelected, setLoanTypeSelected] = useState();

  // Function to handle change in selected loan type
  const handleLoanTypeChange = (event) => {
    setLoanTypeSelected(event.target.value);
  };
  return (
    <>
      <div className="grid gap-x-4 gap-y-5 grid-cols-2 sm:grid-cols-1 md:grid-cols-3 md:gap-y-2 sm:gap-y-1">
        <div>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            id="name"
            placeholder="Name"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm text-[#000000]"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm text-[#000000]"
          />
        </div>
        <div>
          <label htmlFor="mobile-number">Mobile Number</label>
          <Input
            type="number"
            id="mobile-number"
            placeholder="Mobile Number"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm !appearance-none text-[#000000]"
          />
        </div>
        <div>
          <label htmlFor="employee-type">Employee Type</label>
          <Input
            type="text"
            id="employee-type"
            placeholder="Employee Type"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm text-[#000000]"
          />
        </div>
        <div>
          <label htmlFor="pincode">Pincode</label>
          <Input
            type="text"
            id="pincode"
            placeholder="Pincode"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm text-[#000000]"
          />
        </div>
        <div>
          <label htmlFor="annual-income">Annual Income</label>
          <Input
            type="text"
            id="annual-income"
            placeholder="Annual Income"
            className="h-10 !p-5 my-3 !bg-[#FCF1F4] !rounded-sm text-[#000000]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="type-of-loan">Type Of Loan</label>
          {/* <Input
            type="text"
            id="type-of-loan"
            placeholder="Type of Loan"
            className="h-10 !p-5 my-3  !bg-[#FCF1F4] !rounded-sm text-[#000000]"
          /> */}
          <select
            name="type-of-loan"
            id="type-of-loan"
            value={loanTypeSelected}
            onChange={handleLoanTypeChange}
            className="h-15 my-3 p-3 bg-[#FCF1F4] md:w-[250px] rounded-sm text-[#000000]"
          >
            <option disabled defaultValue={"Select Loan Type"}>
              Select Loan Type
            </option>
            {loanTypes.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full">
        <Button
          shape="round"
          className="mt-[20px] mx-auto min-w-[300px] font-lato font-medium sm:px-5  sm:min-w-[150px] hover:bg-[hsl(340,89%,58%)]"
        >
          Submit
        </Button>
      </div>
    </>
  );
}
