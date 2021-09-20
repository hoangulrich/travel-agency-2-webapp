import React from "react";
import { EmailButton } from "../Global/Button";
import { EmailContainer, EmailContent, FormWrap } from "./EmailElements";

const Email = () => {
  return (
    <>
      <EmailContainer>
        <EmailContent>
          <h1>Get Access to Exclusive Offers</h1>
          <p>
            Sign up for your newsletter below to get $100 off your first trips!
          </p>
          <form action="#">
            <FormWrap>
              <label htmlFor="email">
                <input type="email" placeholer="Enter your email" id="email" />
              </label>
              <EmailButton
                as="button"
                type="submit"
                primary
                round
                css={`
                  height: 99px;
                `}
              >
                Sign Up
              </EmailButton>
            </FormWrap>
          </form>
        </EmailContent>
      </EmailContainer>
    </>
  );
};

export default Email;
