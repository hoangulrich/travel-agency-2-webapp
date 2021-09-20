import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 5rem calc((100vw - 1100px) / 2);
  color: #000;
  background: #fafafb;

  /* @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  } */
`;

export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    color: #f26a2e;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`;

export const FooterLinkTitle = styled.h2`
  /* font-weight: bold; */
  margin-bottom: 16px;
  font-size: 14px;
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`;
