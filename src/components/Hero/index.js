import React from "react";
import { Button } from "../Global/Button";
import Video from "../../Media/Videos/travel.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from "./HeroElements";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            src={Video}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </HeroBg>
        <HeroContent>
          <HeroItems>
            <HeroH1>Unreal Destinations</HeroH1>
            <HeroP>Out of this world</HeroP>
            <Button primary big round to="/trips">
              Travel Now
            </Button>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
