import React from "react";
import { AbsoluteButton } from "../Global/Button";
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
        <TripsHeading>Our Favorite Destinations</TripsHeading>
        <TripsWrapper>
          {TripsData.map((trip) => (
            <TripsCard>
              <TripsImg src={trip.img} alt={trip.alt} />
              <TripsInfo>
                <TextWrap>
                  <ImLocation />
                  <TripsTitle>{trip.title}</TripsTitle>
                </TextWrap>
                <AbsoluteButton to="/trips" primary="true" round="true">
                  {trip.buttonLabel}
                </AbsoluteButton>
              </TripsInfo>
            </TripsCard>
          ))}
        </TripsWrapper>
      </TripsContainer>
    </>
  );
};

export default Trips;
