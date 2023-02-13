import styled from 'styled-components';
import Icon from '../Icon';
import Button from '../Button';

export const StyledNewsletterCard = styled.div<{
  height?: string;
  width?: string;
  color?: string;
}>`
  box-sizing: border-box;
  height: ${(props) => props?.height};
  width: ${(props) => props?.width};
  border-radius: ${(props) => props?.theme?.borderRadius?.xs};
  min-width: 300px;
  min-height: 208px;
  display: flex;
  border: 1px solid black;
  background: ${(props) => props?.color};
  overflow: hidden;
  position: relative;
  padding: ${(props) => props.theme.spacing.sm};
`;

export const BackgroundIcon = styled(Icon)<{ bgColor?: string }>`
  z-index: 0;
  font-size: 300px;
  position: absolute;
  left: 65px;
  top: 35px;
  color: ${(props) => props?.bgColor};
`;

export const ContentContainer = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  .subContainer {
    display: flex;
    flex-direction: column;
    align-items: start;

    > * {
      margin-bottom: 12px;
    }
  }
`;

export const StyledButton = styled(Button)`
  color: #000;
  background-color: #fff;
  width: 100%;
  padding: 0;

  span {
    margin: 0 auto;
  }
`;
export const PopoverContainer = styled.div<{ width: string }>`
  width: calc(${(props) => props?.width} - (${(props) => props.theme.spacing.lg} + 4px));
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.core.border.borderLight};
  border-radius: ${(props) => props.theme.borderRadius.xs};

  > * {
    margin: 0;
    padding: 0px ${(props) => props.theme.spacing.sm};
    padding-top: ${(props) => props.theme.spacing.xs};
  }

  .unsubscribeButton {
    padding-top: ${(props) => props.theme.spacing.lg};
    padding-bottom: ${(props) => props.theme.spacing.md};

    > span {
      font-size: 12px;
    }
  }
`;

export default StyledNewsletterCard;
