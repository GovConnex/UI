import styled from "styled-components";


const StyledRadio = styled.input
    (({ theme }) => `
-webkit-appearance: none;
appearance: none;
margin: 0;
width: 20px;
height: 20px; 
min-width: 20px;
min-height: 20px;
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
    &::after {
        background-color: ${theme.primary.brand[500]};
    }
}
&:focus {
    outline: 0px solid ${theme.primary.brand[100]};
    &::after{
        background-color: ${theme.primary.brand[500]};
    }
}
&:checked {
    border: 5px solid ${theme.primary.brand[500]};
    ::after {
        display: none;
    }
    &:hover {
        outline-offset: 2px;
    }
}
`);

const RadioLabel = styled.label<{ variant: string }>(({ theme, variant }) => `

${variant === "card" ? `
div:hover {
    background-color: ${theme.extended.state.secondaryHover};
    border-color:${theme.primary.brand[300]};
    border-width:2px;
    padding: calc(${theme.spacing.sm} - 1px);
}
:focus-within {
    div{
        border-color:${theme.primary.brand[500]};
        border-width:2px;
        padding: calc(${theme.spacing.sm} - 1px);
    }
}
` : ""}


`);

const RadioWrapper = styled.div<{ checked: boolean, variant: string }>(({ theme, checked, variant }) => `

${variant === "card" ? `
border-radius: ${theme.borderRadius.sm};
border-color:${theme.primary.neutral[200]};
border-style:solid;
border-width:1px;
` : ""}

cursor: pointer;

padding: ${theme.spacing.sm};


${checked && variant === "card" ? `
    border-color:${theme.primary.brand[500]};
    border-width:2px;
    border-style:solid;
    padding: calc(${theme.spacing.sm} - 1px);
` : ""}

display: flex;
align-items: center;
gap: ${theme.spacing.xs};
flex-direction: ${variant === "default" ? "row-reverse" : "row"}};
justify-content: ${variant === "default" ? "start" : "space-between"}};
` );

const RadioTextWrapper = styled.span(({ theme }) => `
display: flex;
flex-direction: column;
` );

export { StyledRadio, RadioLabel, RadioWrapper, RadioTextWrapper };
