import { Button, Text } from "components";
import { loanTypes } from "pages/constants/getloanconst";
import React, { useState } from "react";

export default function EmiCalculatorForm() {
  const [sliderValue1, setSliderValue1] = useState<number>(500000);
  const [inputValue1, setInputValue1] = useState<string>("500000");

  const [sliderValue2, setSliderValue2] = useState<number>(8);
  const [inputValue2, setInputValue2] = useState<string>("8");

  const [sliderValue3, setSliderValue3] = useState<number>(3);
  const [inputValue3, setInputValue3] = useState<string>("3");

  const [buttonState, setButtonState] = useState<boolean>(true);

  const [selectedLoan, setSelectedLoan] = useState<string>("Personal Loan"); // Set 'Personal' as the initial value

  // Select the loan type
  const handleClick = (loanType: string) => {
    setSelectedLoan(loanType);
  };

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

  return (
    <>
      <div className="mx-auto w-[90%] h-full mt-5 rounded-lg border-2 border-[#C3C3C3] shadow-2xl p-10 sm:p-1 sm:h-full sm:pb-3">
        <div className="flex w-[95%] ml-10 mt-5 flex-wrap gap-x-16 md:grid md:grid-cols-5 md:gap-y-2.5 md:gap-x-1 sm:ml-0 sm:mt-2 sm:place-content-between sm:grid-cols-3 sm:gap-x-1 sm:gap-y-3 sm:w-full">
          {loanTypes.map((loanType) => (
            <Text
              as="p"
              key={loanType}
              className={`font-medium hover:cursor-pointer sm:text-sm  ${
                selectedLoan === loanType
                  ? "text-[#E80D55] underline underline-offset-8 md:text-sm  sm:underline-offset-1 md:underline-offset-1"
                  : "text-[#5B5B5B] hover:text-[#E80D55] hover:underline hover:underline-offset-8 md:text-sm sm:hover:underline-offset-1 md:hover:underline-offset-1"
              }`}
              onClick={() => handleClick(loanType)}
            >
              {selectedLoan === loanType ? `${loanType}` : loanType}
            </Text>
          ))}
        </div>
        <hr className="w-[95%] mx-auto border-[#C3C3C3] mt-3" />
        <div className="w-full h-10 mt-10 flex text-lg sm:text-base sm:p-2 sm:items-center">
          <div className="flex items-center gap-10 w-fit pl-10 sm:p-0 sm:gap-1">
            <label htmlFor="loan-amount" className="sm:text-base">
              {selectedLoan} Amount
            </label>
            <input
              type="number"
              min="500000"
              max="5000000"
              value={inputValue1}
              onChange={handleInputChange1}
              name="loan-amount"
              id="loan-amount"
              className="w-[300px] sm:w-[130px] h-10 sm:!p-2 !p-5 !bg-[#FCF1F4] !rounded-sm text-[#000000]"
            />
          </div>
          <span className=" bg-[#E80D55] w-[40px] sm:w-[30px] h-10 relative rounded-br rounded-tr text-center flex items-center justify-center ">
            ₹
          </span>
        </div>

        <div className="flex p-10 w-[100%] flex-col gap-1.5 sm:p-2 sm:pt-5">
          <input
            type="range"
            min="500000"
            max="5000000"
            value={sliderValue1}
            onChange={handleSliderChange1}
            id="loan-range"
            title="loan-range"
            className="flex h-[20px] rounded "
          />
          <div className="flex flex-wrap justify-between gap-5 sm:gap-2">
            <Text as="p" className="sm:text-xs">
              5L
            </Text>
            <Text as="p" className="sm:text-xs">
              10L
            </Text>
            <Text as="p" className="sm:text-xs">
              15L
            </Text>
            <Text as="p" className="sm:text-xs">
              20L
            </Text>
            <Text as="p" className="sm:text-xs">
              25L
            </Text>
            <Text as="p" className="sm:text-xs">
              30L
            </Text>
            <Text as="p" className="sm:text-xs">
              35L
            </Text>
            <Text as="p" className="sm:text-xs">
              40L
            </Text>
            <Text as="p" className="sm:text-xs">
              45L
            </Text>
            <Text as="p" className="sm:text-xs">
              50L
            </Text>
          </div>
        </div>
        {/* Home Loan */}
        {/* Interest Rate */}
        <div className="w-full h-10 mt-10 flex text-lg sm:text-base sm:p-2 sm:items-center">
          <div className="flex items-center gap-10 w-fit pl-10 sm:p-0 sm:gap-1">
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

        <div className="flex p-10 w-[100%] flex-col gap-1.5 sm:p-2 sm:pt-5">
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
          <div className="flex flex-wrap justify-between gap-5 sm:gap-2">
            <Text as="p" className="sm:text-xs">
              8
            </Text>
            <Text as="p" className="sm:text-xs">
              9
            </Text>
            <Text as="p" className="sm:text-xs">
              10
            </Text>
            <Text as="p" className="sm:text-xs">
              11
            </Text>
            <Text as="p" className="sm:text-xs">
              12
            </Text>
            <Text as="p" className="sm:text-xs">
              13
            </Text>
            <Text as="p" className="sm:text-xs">
              14
            </Text>
            <Text as="p" className="sm:text-xs">
              15
            </Text>
            <Text as="p" className="sm:text-xs">
              16
            </Text>
          </div>
        </div>
        {/* Interest Rate */}
        {/* Loan Tenure */}
        <div className="w-full h-10 mt-10 flex text-lg sm:text-base sm:p-2 sm:items-center">
          <div className="flex items-center gap-10 w-fit pl-10 sm:p-0 sm:gap-1">
            <label htmlFor="loan-tenure">Loan Tenure</label>
            <input
              type="text"
              min="3"
              max="30"
              value={inputValue3}
              onChange={handleInputChange3}
              name="loan-tenure"
              id="loan-tenure"
              className="w-[300px] sm:w-[130px] h-10 sm:!p-2 !p-5 !bg-[#FCF1F4] !rounded-sm text-[#000000]"
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

        <div className="flex p-10 w-[100%] flex-col gap-1.5 sm:p-2 sm:pt-5">
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
          <div className="flex flex-wrap justify-between gap-5 sm:gap-2">
            <Text as="p" className="sm:text-xs">
              3
            </Text>
            <Text as="p" className="sm:text-xs">
              6
            </Text>
            <Text as="p" className="sm:text-xs">
              9
            </Text>
            <Text as="p" className="sm:text-xs">
              12
            </Text>
            <Text as="p" className="sm:text-xs">
              15
            </Text>
            <Text as="p" className="sm:text-xs">
              18
            </Text>
            <Text as="p" className="sm:text-xs">
              21
            </Text>
            <Text as="p" className="sm:text-xs">
              24
            </Text>
            <Text as="p" className="sm:text-xs">
              27
            </Text>
            <Text as="p" className="sm:text-xs">
              30
            </Text>
          </div>
        </div>
        {/* Loan Tenure */}

        <div className="w-[75%] h-[500px] bg-[#F9F9F9] border-2 border-[#D7D7D7] rounded-sm mx-auto flex md:w-full sm:flex-col sm:w-[90%]">
          <div className="w-[40%] h-full flex flex-col gap-y-16 items-center mt-10 sm:gap-y-4 sm:mt-2 sm:w-full">
            <div className="flex flex-col items-center gap-y-3 sm:gap-y-1">
              <Text as="p" className="text-[#353535] sm:text-base">
                Loan EMI
              </Text>
              <Text as="p" className="text-[#353535] sm:text-base">
                ₹ {inputValue1}
              </Text>
            </div>
            <div className="flex flex-col items-center gap-y-3">
              <Text as="p" className="text-[#353535] sm:text-base">
                Total Interest Payable
              </Text>
              <Text as="p" className="text-[#353535] sm:text-base">
                ₹ {inputValue2}
              </Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Text as="p" className="text-[#353535] sm:text-base">
                Total Payment
              </Text>
              <Text as="p" className="text-[#353535] sm:text-base">
                (Principal + Interest)
              </Text>
              <Text as="p" className="text-[#353535] sm:text-base">
                ₹ {Number(inputValue1) + Number(inputValue2)}
              </Text>
            </div>
          </div>
          <div className="w-[60%] h-full flex flex-col justify-center items-center gap-y-10 sm:w-full sm:gap-y-3">
            <>{/* <EmiGraph /> */}</>
            <img
              src="images/Vectorsemicircle.svg"
              alt="vector"
              className="md:w-[75%] sm:w-[85%]"
            />
            <div className="w-[76%] h-28 bg-[#FFFFFF] border-2 border-[#D7D7D7] flex flex-col justify-center sm:w-[95%]">
              <div className="flex items-center gap-x-5 ml-24 md:ml-6 md:gap-x-1 sm:ml-2 sm:gap-x-3">
                <div className="w-5 h-5 rounded-full bg-[#2D96D7]"></div>
                <Text as="p" className="sm:!text-base">
                  Principal Loan Amount
                </Text>
              </div>
              <div className="flex items-center gap-x-5 ml-24 md:ml-6 md:gap-x-1 sm:ml-2 sm:gap-x-3">
                <div className="w-5 h-5 rounded-full bg-[#0F528B]"></div>
                <Text as="p" className="sm:!text-base">
                  Total Interest
                </Text>
              </div>
            </div>
          </div>
        </div>
        <Button
          shape="round"
          className="w-60 mx-auto mt-12 font-lato font-medium sm:w-40 sm:mt-3"
        >
          Get Loan
        </Button>
      </div>
    </>
  );
}
