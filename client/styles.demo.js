import styled, { css } from "styled-components";
import {Tab} from "react-tabs";

/** Style Button */
export const StyledButton = styled.button`
  color: blue;
  border: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    color: #fdb44b;
  }
  

  /** Some more styling */
  //font-size: 1em;
  //padding: 0.25em 3em;
  //&:focus {
  //  outline: 0;
  //}
  
`



/** Style Button */

/** Wrap styled components*/
// export const StyledSuccessButton = styled(StyledButton)`
//   color: green;
// `

/** Variants */
// ${(props => {
//   switch(props.variant) {
//     case "success":
//       return css`
//         color: green;
//       `
//     break;
//     case "danger":
//       return css`
//         color: red;
//       `
//       break;
//     default:
//       return css`
//         color: black;
//       `
//   }
// })}

export const theme = {
  colors: {
    success: "green",
    danger: "red",
    default: "black"
  }
}

/** Using theme - ThemeProvider */
    // ${(props => {
    //   switch(props.variant) {
    //     case "success":
    //       return css`
    //         color: ${props.theme.colors.success};
    //       `
    //       break;
    //     case "danger":
    //       return css`
    //         color: ${props.theme.colors.danger};
    //       `
    //       break;
    //     default:
    //       return css`
    //         primary: ${props.theme.colors.default};
    //       `
    //   }
    // })}


export const StyledTab = styled(Tab)`
  cursor: pointer;
  display: inline-block;
  color: red;
  font-size: 1.5rem;
  padding: 0.25rem 3rem;
  border-radius: 10px 10px 0 0;
  &:focus {
    outline: 0;
  }
  ${props => props.isActive ? css`
    border-width: 2px 2px 0 2px;
    border-color: #fdb44b;
    border-style: solid;
  ` : css`
      &:hover {
        color: #fdb44b;
      }
    `}
`

export const StyledDivider = styled.div`
    border: 1px solid #fdb44b;
    width: 100%;
`

/** Media queries*/
export const StyledInput = styled.input`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;