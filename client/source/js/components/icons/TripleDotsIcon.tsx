import * as React from 'react';
import { GenericCallback } from '@shared/types';

export interface TripleDotsIconProps {
  size?: number;
  fill?: string;
  className?: string;
  onClick?: GenericCallback;
}

export const TripleDotsIcon = (props: TripleDotsIconProps) => {
  const { size, fill, className, onClick } = {
    size: 48,
    fill: '#000',
    className: 'i-pencil',
    onClick: undefined,
    ...props,
  };
  return (
    <svg onClick={onClick} className={className} id="Layer_1" enable-background="new 0 0 48 48" version="1.1" viewBox="0 0 48 48" height={`${size}px`} width={`${size}px`} >
      <g id="Layer_1_1_" fill={fill}><g><path d="M24,28c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4c2.2,0,4,1.8,4,4C28,26.2,26.2,28,24,28z M24,22c-1.1,0-2,0.9-2,2    c0,1.1,0.9,2,2,2c1.1,0,2-0.9,2-2C26,22.9,25.1,22,24,22z"/></g><g><path d="M24,42c-2.2,0-4-1.8-4-4s1.8-4,4-4c2.2,0,4,1.8,4,4S26.2,42,24,42z M24,36c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2    S25.1,36,24,36z"/></g><g><path d="M24,14c-2.2,0-4-1.8-4-4s1.8-4,4-4c2.2,0,4,1.8,4,4S26.2,14,24,14z M24,8c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2    S25.1,8,24,8z"/></g></g><g id="Layer_2"/>
    </svg>
  )
};