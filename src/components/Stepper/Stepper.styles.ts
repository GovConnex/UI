import styled from "styled-components";

const StyledStepper = styled.div`
  ${({ theme }) => `
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    `}
`;
const StyledBullet = styled.div<{
  active: Boolean;
  passed: Boolean;
  disabled: Boolean;
}>`
  ${({ theme, active, passed, disabled }) => `
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-sizing: border-box;

    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid white;

    outline: 2px solid ${theme.core.border.borderLight};

    ${
      active
        ? `
    outline: 2px solid ${theme.core.border.borderFocus};
    background-color: ${theme.core.border.borderFocus};
    border: 1px solid white;
    `
        : ``
    }

    ${
      passed
        ? `
    background-color: ${theme.core.border.borderFocus};
    outline: none;
    border: 3px solid ${theme.core.border.borderFocus};
    // outline: 2px solid ${theme.core.border.borderFocus};

    `
        : ``
    }

    ${
      disabled
        ? `
    background-color: ${theme.core.border.borderLight};
    outline: none;
    border: 3px solid ${theme.core.border.borderLight};

    `
        : ``
    }

    `}
`;
const StyledTrack = styled.div<{ passed: boolean }>`
  ${({ theme, passed }) => `
    height: 100%;
    min-height: 32px;
    width: 2px;
    background-color: ${theme.core.border.borderLight};

    margin-left: 7px;

    ${
      passed
        ? `
    background-color: ${theme.core.border.borderFocus};
    `
        : ``
    }
    `}
`;
const BulletWrapper = styled.div<{}>`
  ${({ theme }) => `
    display: flex;
    align-items: center;
    gap: 15px;
    max-height: 14px;
    `}
`;

const InfoWrapper = styled.div<{}>`
  ${({ theme }) => `
    display: flex;
    flex-direction: column;
    `}
`;

export { StyledStepper, InfoWrapper, StyledBullet, StyledTrack, BulletWrapper };
