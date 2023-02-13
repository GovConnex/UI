import React, { useRef, useState, useEffect } from 'react';
import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import {
  StyledNewsletterCard,
  BackgroundIcon,
  ContentContainer,
  StyledButton,
  PopoverContainer,
} from './NewsletterCard.styles';
import Icon from '../Icon';
import Typography from '../Typography';
import Popover from '../Popover';
import Button from '../Button';

export interface NewsletterCardProps {
  /**
   * content of the NewsletterCard
   */
  children?: React.ReactNode;
  height?: string;
  width?: string;
  title?: string;
  bgIcon?: IconName;
  bgIconType?: IconPrefix;
  icon?: IconName;
  iconType?: IconPrefix;
  color?: string;
  bgColor?: string;
  isSubscribed?: boolean;
  onClick?: () => void;
}

/**
 *
 * `NewsletterCard` Describe what it does
 *
 * Component Demo: [NewsletterCard](https://ui.govconnex.com/?path=/story/components-NewsletterCard--example)
 *
 */
const NewsletterCard = ({
  children,
  height = '208px',
  width = '300px',
  title,
  icon = 'question',
  iconType = 'far',
  bgIcon = 'question',
  bgIconType = 'far',
  color,
  bgColor,
  isSubscribed = false,
  onClick,
}: NewsletterCardProps) => {
  const buttonRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!bgIcon) {
      bgIcon = icon;
    }
  }, []);

  const unsubscribeEvent = async () => {
    if (!onClick) {
      return;
    }
    try {
      const result = await onClick();
      setShowTooltip(false);
      return result;
    } catch (e) {
      throw new Error('Failed unsubscribing');
    }
  };

  return (
    <div>
      <StyledNewsletterCard height={height} width={width} color={color}>
        {/* <BackgroundIcon icon={faMoneyBillsSimple} key={key}/> */}
        <BackgroundIcon icon={[bgIconType, bgIcon]} bgColor={bgColor} />
        <ContentContainer>
          <div className={'subContainer'}>
            <Icon icon={[iconType, icon]} color="#FFF" size="2xl" />
            <Typography variant="heading" size="sm" color="#FFF">
              {title}
            </Typography>
          </div>
          {!isSubscribed ? (
            <StyledButton size="lg" variant="secondary" onClick={onClick}>
              Subscribe
            </StyledButton>
          ) : (
            <>
              <StyledButton
                size="lg"
                variant="secondary"
                ref={buttonRef}
                startAdornment={<Icon size="lg" icon={['fas', 'bell']} />}
                endAdornment={<Icon size="lg" icon={['fas', 'caret-down']} />}
                onClick={() => setShowTooltip(!showTooltip)}
              >
                Subscribed
              </StyledButton>
            </>
          )}
        </ContentContainer>
      </StyledNewsletterCard>

      {/* Keep popover tooltip outside container to not mess with background overflow */}
      {showTooltip && (
        <div>
          <Popover anchorEl={buttonRef} placement="bottom-end" style={{ zIndex: 2 }}>
            <PopoverContainer width={width}>
              <Typography variant="heading" size="xs">
                You are subscribed to {title}
              </Typography>
              <Typography variant="body">
                You'll now receive newsletter alerts for {title}.
              </Typography>
              <Button
                onClick={unsubscribeEvent}
                className="unsubscribeButton"
                size="lg"
                variant="text"
                startAdornment={<Icon size="lg" icon={['fas', 'bell-slash']} />}
              >
                Unsubscribe to newsletter
              </Button>
            </PopoverContainer>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default NewsletterCard;
