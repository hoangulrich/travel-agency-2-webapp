import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  outline: none;
  border: none;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  background: ${({ primary }) => (primary ? "#f26a2e" : "#077bf1")};
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  white-space: nowrap;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  min-width: 100px;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#077bf1" : "#f26a2e")};
    transform: translateY(-2px);
  }
`;

export const AbsoluteButton = styled(Button)`
  position: absolute;
  top: 420px;
  font-size: 14px;
`;
