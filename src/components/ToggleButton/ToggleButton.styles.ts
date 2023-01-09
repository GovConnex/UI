import styled from "styled-components";

const StyledToggleButton = styled.div<{}>
(({ theme}) =>
`
padding: ${theme.spacing.xs};

background-color: transparent;

border-radius: ${theme.borderRadius.xs};
border-color:${theme.primary.neutral[200]};
border-style:solid;
border-width:1px;

font-size:${theme.typography.body.md.fontSize};
background-color: ${theme.primary.base.white};

min-height: 22px;

&:focus {
outline-color:${ theme.primary.base.brand};
}

&:disabled::placeholder{
color:${theme.extended.state.disabled};
}

`);

export default StyledToggleButton;