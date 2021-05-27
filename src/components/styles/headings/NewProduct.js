import styled from "styled-components";
import { theme } from "../../../config/theme";

export const NewProduct = styled.h5`
  color: ${({ primary }) =>
    primary ? `${theme.colors.primary.base}` : `${theme.colors.gray.three}`};
  text-transform: uppercase;

  font-size: 1.1rem;
  letter-spacing: 0.5rem;
  font-weight: 400;
`;
