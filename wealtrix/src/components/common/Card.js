import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor || 'var(--background)'};
  border-radius: var(--border-radius-md);
  box-shadow: ${({ elevated }) => elevated ? 'var(--shadow-lg)' : 'var(--shadow-md)'};
  padding: ${({ padding }) => padding || '2rem'};
  transition: all 0.3s ease;
  height: ${({ height }) => height || 'auto'};
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: ${({ hoverEffect }) => hoverEffect ? 'translateY(-10px)' : 'none'};
    box-shadow: ${({ hoverEffect }) => hoverEffect ? 'var(--shadow-lg)' : ''};
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ color }) => color || 'var(--text-primary)'};
`;

const CardSubtitle = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
`;

const CardBody = styled.div`
  flex: 1;
`;

const CardFooter = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: ${({ align }) => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
      case 'between':
        return 'space-between';
      default:
        return 'flex-start';
    }
  }};
`;

const Card = ({
  children,
  title,
  subtitle,
  footer,
  bgColor,
  titleColor,
  padding,
  elevated = false,
  hoverEffect = false,
  height,
  footerAlign = 'left',
  className,
  ...rest
}) => {
  return (
    <CardContainer
      bgColor={bgColor}
      padding={padding}
      elevated={elevated}
      hoverEffect={hoverEffect}
      height={height}
      className={className}
      {...rest}
    >
      {(title || subtitle) && (
        <CardHeader>
          {title && <CardTitle color={titleColor}>{title}</CardTitle>}
          {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
        </CardHeader>
      )}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter align={footerAlign}>{footer}</CardFooter>}
    </CardContainer>
  );
};

export default Card;
