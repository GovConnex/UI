import styled from "styled-components";

const StyledRadio = styled.input
    (({ theme }) => `


-webkit-appearance: none;
appearance: none;
margin: 0;
width: 20px;
height: 20px;
border: 1px solid ${theme.primary.neutral[200]};
border-radius: 50%;
::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 4px;
}

&:hover {
    // outline: 2px solid blue;
    &::after {
        background-color: ${theme.primary.brand[500]};
    }
}
&:focus {
    outline: 2px solid ${theme.primary.brand[500]};
    outline-offset: 2px;
}
&:checked {
    border: 5px solid ${theme.primary.brand[500]};
    &:hover {
        // outline: 2px solid blue;
        outline-offset: 2px;
        // background-color: orange;
        // border: 2px solid grey;
        ::after {
            display: none;
        }
    }
}
`)
    ;
const RadioWrapperLabel = styled.label`

`;

export { StyledRadio, RadioWrapperLabel};