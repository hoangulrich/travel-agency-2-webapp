import React from "react";
import {
  StatsContainer,
  Heading,
  Wrapper,
  StatsBox,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Title,
  Description,
} from "./StatsElements";

const Stats = () => {
  return (
    <>
      <StatsContainer>
        <Heading>Why Choose Us?</Heading>
        <Wrapper>
          <StatsBox>
            <Icon1 />
            <Title>Over 100 Destinations</Title>
            <Description>Travel to over 100 unique places</Description>
          </StatsBox>

          <StatsBox>
            <Icon2 />
            <Title>1 Million Trips Made</Title>
            <Description>Over 1 million trips completed last year</Description>
          </StatsBox>

          <StatsBox>
            <Icon3 />
            <Title>Fastest Support</Title>
            <Description>Access our support team 24/7</Description>
          </StatsBox>

          <StatsBox>
            <Icon4 />
            <Title>Best Deals</Title>
            <Description>We offer the best prices</Description>
          </StatsBox>
        </Wrapper>
      </StatsContainer>
    </>
  );
};

export default Stats;
