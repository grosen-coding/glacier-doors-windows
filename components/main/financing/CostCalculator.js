import Button from "@/components/buttons/Button";
import React from "react";

const CostCalculator = () => {
  return (
    <div>
      <h3>Apply for the Greener Homes Grant (Loan)</h3>
      <div>
        <ul>
          <h5>
            <strong>
              Remember, before you can apply for the loan, you must:
            </strong>
          </h5>
          <li>
            <span>Icon</span> Be Approved for the Greener Homes Grant
          </li>
          <li>
            <span>Icon</span> Have a pre-retrofit evaluation done and have your
            renovation upgrade report
          </li>
          <li>
            <span>Icon</span> Receive quotes from contractors for the retrofits
            yo plan to do
          </li>
        </ul>
        <p>
          <strong>Please Note:</strong> You will only receive your final loan
          amount after your completed work has been verified through a
          post-retrofit evaluation
        </p>
        <p>
          You can always view your application by logging in your Greener Homes
          profile.
        </p>
        <div>
          <Button text="Learn More" />
          <Button text="Go to the Greener Homes Portal" />
        </div>
      </div>
      <div>
        <div>
          <ul>
            <h4>Loan Details:</h4>
            <li>
              <span>Icon</span> <strong>Maximum</strong> : $40,000
            </li>
            <li>
              <span>Icon</span> <strong>Minimum</strong> : $5,000
            </li>
            <li>
              <span>Icon</span> <strong>Interest Rate</strong> : 10 years,
              interest-free
            </li>
            <li>
              <span>Icon</span> <strong>Loan Type</strong> : Unsecured personal
              loan on approved credit
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
