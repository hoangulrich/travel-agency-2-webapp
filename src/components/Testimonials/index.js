import React from "react";
import {
  TestimonialsContainer,
  TestimonialsPart,
  TopLine,
  Description,
  ContentWrapper,
  ColumnOne,
  ColumnTwo,
  Images,
  CheckmarkIcon,
  BulbIcon,
} from "./TestimonialsElements";
import ppl1 from "./../../Media/Images/ppl1.jpg";
import ppl2 from "./../../Media/Images/ppl2.jpg";

const Testimonials = () => {
  return (
    <>
      <TestimonialsContainer>
        <TopLine>Testimonials</TopLine>
        <Description>What People are Saying</Description>
        <ContentWrapper>
          <ColumnOne>
            <TestimonialsPart>
              <CheckmarkIcon />
              <h3>Sean Michaels</h3>
              <p>
                "The greatest experience of my life. It was so much fun
                exploring the mountains and they made it super easy to book my
                trip and accomodation."
              </p>
            </TestimonialsPart>
            <TestimonialsPart>
              <BulbIcon />
              <h3>Sarah Kin</h3>
              <p>
                "It was so easy to set up my trip! They answered all my
                questions right away and give the best price out of all
                companies I researched."
              </p>
            </TestimonialsPart>
          </ColumnOne>
          <ColumnTwo>
            <Images src={ppl1} alt="ppl" />
            <Images src={ppl2} alt="ppl" />
          </ColumnTwo>
        </ContentWrapper>
      </TestimonialsContainer>
    </>
  );
};

export default Testimonials;
