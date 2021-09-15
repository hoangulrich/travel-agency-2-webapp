import React from "react";
import { Button } from "../Global/Button";
import {
  TripsContainer,
  TripsWrapper,
  TripsHeading,
  TripsCard,
  TripsInfo,
  TextWrap,
  TripsTitle,
  TripsImg,
} from "./TripsElements";
import { TripsData } from "../../Data/TripsData";
import { ImLocation } from "react-icons/im";

const Trips = () => {
  return (
    <>
      <TripsContainer>
        <TripsHeading>Heading</TripsHeading>
        <TripsWrapper>
          {TripsData.map((trip) => (
            <TripsCard>
              <TripsImg src={trip.img} alt={trip.alt} />
              <TripsInfo>
                <TextWrap>
                  <ImLocation />
                  <TripsTitle>{trip.title}</TripsTitle>
                </TextWrap>
                <Button
                  to="/trips"
                  primary="true"
                  round="true"
                  css={`
                    position: absolute;
                    top: 420px;
                    font-size: 14px;
                  `}
                >
                  {trip.buttonLabel}
                </Button>
              </TripsInfo>
            </TripsCard>
          ))}
        </TripsWrapper>
      </TripsContainer>
    </>
  );
};

export default Trips;
