import styled from "styled-components";

export const TripsContainer = styled.div`
  /* min-height: 100vh; */
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  /* background: red; */
`;

export const TripsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`;

export const TripsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 17px;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

export const TripsCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`;

export const TripsImg = styled.img`
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  object-fit: cover;

  &:hover {
    filter: brightness(100%);
  }
`;

export const TripsInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`;

export const TripsTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
