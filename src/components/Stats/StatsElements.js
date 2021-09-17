import styled from "styled-components";
import { GiEarthAmerica } from "react-icons/gi";
import { MdAirplanemodeActive, MdTimer } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";

export const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`;

export const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  padding: 0 2rem;
  margin-bottom: 3rem;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

export const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`;

export const Description = styled.p``;

export const Icon1 = styled(GiEarthAmerica)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #047bf1;
`;

export const Icon2 = styled(MdAirplanemodeActive)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #f3a82e;
`;

export const Icon3 = styled(MdTimer)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #f34f2e;
`;

export const Icon4 = styled(FaMoneyCheck)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #3af576;
`;
