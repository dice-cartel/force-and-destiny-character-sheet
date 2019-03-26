import * as React from 'react';
import classnames from 'classnames';
import { GenericCallback } from '@shared/types';

export interface XIconProps {
  size?: number;
  fill?: string;
  className?: string;
  onClick?: GenericCallback;
}

export const XIcon = (props: XIconProps) => {
  const { size, fill, onClick } = {
    size: 48,
    fill: '#000',
    onClick: undefined,
    ...props,
  };

  const className = classnames('i-x', props.className);

  return (
    <svg onClick={onClick} className={className} style={{stroke: fill}} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" width={`${size}px`} height={`${size}px`}>
      <line x1="22" x2="2" y1="2" y2="22"/>
      <line x1="2" x2="22" y1="2" y2="22"/>
    </svg>
  )
};