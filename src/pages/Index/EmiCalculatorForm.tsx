import EmiGraph from "assets/images/EmiGraph";
import { Button, Text } from "components";
import React, { useState } from "react";

export default function EmiCalculatorForm() {
  const [sliderValue1, setSliderValue1] = useState<number>(500000);
  const [inputValue1, setInputValue1] = useState<string>("500000");

  const [sliderValue2, setSliderValue2] = useState<number>(8);
  const [inputValue2, setInputValue2] = useState<string>("8");

  const [sliderValue3, setSliderValue3] = useState<number>(3);
  const [inputValue3, setInputValue3] = useState<string>("3");

  const [buttonState, setButtonState] = useState<boolean>(true);

  const [selectedLoan, setSelectedLoan] = useState<string>("Personal"); // Set 'Personal' as the initial value
  const loanTypes = [
    "Home Loan",
    "Personal Loan",
    "Business Loan",
    "Loan Against Property",
    "Educational Loan",
  ];

  // To Change the Slider and input field values
  const handleSliderChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSliderValue1(value);
    setInputValue1(value.toString());
  };

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue1(value);
    setSliderValue1(parseInt(value));
  };

  const handleSliderChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSliderValue2(value);
    setInputValue2(value.toString());
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue2(value);
    setSliderValue2(parseInt(value));
  };

  const handleSliderChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setSliderValue3(value);
    setInputValue3(value.toString() + (buttonState ? " Yr" : " Mo"));
  };

  const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^\d]/g, ""); // Remove non-numeric characters
    const unit = buttonState ? " Yr" : " Mo"; // Determine the unit based on the button state
    setInputValue3(newValue + unit); // Concatenate the numeric value and unit
    setSliderValue3(parseInt(newValue)); // Update the slider value
  };

  //Format Changer
  const handleYearButtonClick = () => {
    setButtonState(true);
    setInputValue3(sliderValue3.toString() + " Yr");
  };

  const handleMonthButtonClick = () => {
    setButtonState(false);
    setInputValue3(sliderValue3.toString() + " Mo");
  };

  // Select the loan type
  const handleClick = (loanType: string) => {
    setSelectedLoan(loanType);
  };

  return (
    <>
      <div className="mx-auto w-[90%] h-full mt-5 rounded-lg border-2 border-[#C3C3C3] shadow-2xl p-10">
        <div className="flex w-[95%] ml-10 mt-5 flex-wrap gap-x-16 md:grid md:grid-cols-3 md:gap-y-2.5">
          {loanTypes.map((loanType) => (
            <Text
              as="p"
              key={loanType}
              className={`font-medium hover:cursor-pointer ${
                selectedLoan === loanType
                  ? "text-[#E80D55] underline underline-offset-8"
                  : "text-[#5B5B5B] hover:text-[#E80D55] hover:underline hover:underline-offset-8"
              }`}
              onClick={() => handleClick(loanType)}
            >
              {selectedLoan === loanType ? `${loanType}` : loanType}
            </Text>
          ))}
        </div>
        <hr className="w-[95%] mx-auto border-[#C3C3C3] mt-3" />
        {/* Home Loan Amount */}
        <div className="w-full h-10 mt-10 flex text-lg">
          <div className="flex items-center gap-10 w-fit pl-10">
            <label htmlFor="home-loan-amount">{selectedLoan} Amount</label>
            <input
              type="number"
              min="500000"
              max="5000000"
              value={inputValue1}
              onChange={handleInputChange1}
              name="home-loan-amount"
              id="home-loan-amount"
              className="w-[300px] h-10 !p-5 !bg-[#FCF1F4] !rounded-sm text-[#000000]"
            />
          </div>
          <span className=" bg-[#E80D55] w-[40px] h-10 relative rounded-br rounded-tr text-center flex items-center justify-center">
            ₹
          </span>
        </div>

        <div className=" flex p-10 w-[100%] flex-col gap-1.5">
          <input
            type="range"
            min="500000"
            max="5000000"
            value={sliderValue1}
            onChange={handleSliderChange1}
            id="home-loan-range"
            title="home-loan-range"
            className="flex h-[20px] rounded"
          />
          <div className="flex flex-wrap justify-between gap-5">
            <Text as="p">5L</Text>
            <Text as="p">10L</Text>
            <Text as="p">15L</Text>
            <Text as="p">20L</Text>
            <Text as="p">25L</Text>
            <Text as="p">30L</Text>
            <Text as="p">35L</Text>
            <Text as="p">40L</Text>
            <Text as="p">45L</Text>
            <Text as="p">50L</Text>
          </div>
        </div>
        {/* Home Loan */}
        {/* Interest Rate */}
        <div className="w-full h-10 mt-10 flex text-lg">
          <div className="flex items-center gap-10 w-fit justify-between pl-10">
            <label htmlFor="interest-rate">Interest Rate</label>
            <input
              type="number"
              min="8"
              max="16"
              value={inputValue2}
              onChange={handleInputChange2}
              name="interest-rate"
              id="interest-rate"
              className="w-[150px] h-10 !p-5 !bg-[#FCF1F4] !rounded-sm text-[#000000]"
            />
          </div>
          <span className=" bg-[#E80D55] w-[40px] h-10 relative rounded-br rounded-tr text-center flex items-center justify-center">
            %
          </span>
        </div>

        <div className=" flex p-10 w-[100%] flex-col gap-1.5">
          <input
            type="range"
            min="8"
            max="16"
            value={sliderValue2}
            onChange={handleSliderChange2}
            id="interest-rate-range"
            title="interest-rate-range"
            className="flex h-[20px] rounded"
          />
          <div className="flex justify-between">
            <Text as="p">8</Text>
            <Text as="p">9</Text>
            <Text as="p">10</Text>
            <Text as="p">11</Text>
            <Text as="p">12</Text>
            <Text as="p">13</Text>
            <Text as="p">14</Text>
            <Text as="p">15</Text>
            <Text as="p">16</Text>
          </div>
        </div>
        {/* Interest Rate */}
        {/* Loan Tenure */}
        <div className="w-full h-10 mt-10 flex text-lg">
          <div className="flex items-center gap-10 w-fit justify-between pl-10">
            <label htmlFor="loan-tenure">Loan Tenure</label>
            <input
              type="text"
              min="3"
              max="30"
              value={inputValue3}
              onChange={handleInputChange3}
              name="loan-tenure"
              id="loan-tenure"
              className="w-[300px] h-10 !p-5 !bg-[#FCF1F4] !rounded-sm text-[#000000]"
            />
          </div>
          <button
            type="button"
            className={` w-[40px] h-10 relative text-center flex items-center justify-center ${
              buttonState ? "bg-[#A4264F]" : "bg-[#E80D55]"
            }`}
            onClick={handleYearButtonClick}
          >
            Yr
          </button>
          <button
            type="button"
            className={`w-[40px] h-10 relative rounded-br rounded-tr text-center flex items-center justify-center ${
              buttonState ? "bg-[#E80D55]" : "bg-[#A4264F]"
            }`}
            onClick={handleMonthButtonClick}
          >
            Mo
          </button>
        </div>

        <div className=" flex p-10 w-[100%] flex-col gap-1.5">
          <input
            type="range"
            min="3"
            max="30"
            value={sliderValue3}
            onChange={handleSliderChange3}
            id="loan-tenure-range"
            title="loan-tenure-range"
            className="flex h-[20px] rounded"
          />
          <div className="flex justify-between">
            <Text as="p">3</Text>
            <Text as="p">6</Text>
            <Text as="p">9</Text>
            <Text as="p">12</Text>
            <Text as="p">15</Text>
            <Text as="p">18</Text>
            <Text as="p">21</Text>
            <Text as="p">24</Text>
            <Text as="p">27</Text>
            <Text as="p">30</Text>
          </div>
        </div>
        {/* Loan Tenure */}

        <div className="w-[75%] h-[500px] bg-[#F9F9F9] border-2 border-[#D7D7D7] rounded-sm mx-auto flex">
          <div className="w-[40%] h-full flex flex-col gap-y-16 items-center mt-10">
            <div className="flex flex-col items-center gap-y-3">
              <Text as="p" className="text-[#353535]">
                Loan EMI
              </Text>
              <Text as="p" className="text-[#353535]">
                ₹ {inputValue1}
              </Text>
            </div>
            <div className="flex flex-col items-center gap-y-3">
              <Text as="p" className="text-[#353535]">
                Total Interest Payable
              </Text>
              <Text as="p" className="text-[#353535]">
                ₹ {inputValue2}
              </Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Text as="p" className="text-[#353535]">
                Total Payment
              </Text>
              <Text as="p" className="text-[#353535]">
                (Principal + Interest)
              </Text>
              <Text as="p" className="text-[#353535]">
                ₹ {Number(inputValue1) + Number(inputValue2)}
              </Text>
            </div>
          </div>
          <div className="w-[60%] h-full flex flex-col justify-center items-center gap-y-10">
            <>
              <EmiGraph />
            </>
            <div className="w-[76%] h-28 bg-[#FFFFFF] border-2 border-[#D7D7D7] flex flex-col justify-center">
              <div className="flex items-center gap-x-5 ml-24">
                <div className="w-5 h-5 rounded-full bg-[#2D96D7]"></div>
                <Text as="p">Principal Loan Amount</Text>
              </div>
              <div className="flex items-center gap-x-5 ml-24">
                <div className="w-5 h-5 rounded-full bg-[#0F528B]"></div>
                <Text as="p">Total Interest</Text>
              </div>
            </div>
          </div>
        </div>
        <Button
          shape="round"
          className="w-60 mx-auto mt-12 font-lato font-medium sm:px-5"
        >
          Get Loan
        </Button>
      </div>
    </>
  );
}
