import * as React from 'react';
import { GenericCallback } from '@shared/types';
import classnames from 'classnames';

export interface TrashIconProps {
  size?: number;
  fill?: string;
  className?: string;
  onClick?: GenericCallback;
}

export const TrashIcon = (props: TrashIconProps) => {
  const { size, fill, onClick } = {
    size: 48,
    fill: '#000',
    onClick: undefined,
    ...props,
  };

  const className = classnames('i-trash', props.className);

  return (
    <svg onClick={onClick} className={className}  enableBackground="new 0 0 500 500" id="Layer_1" version="1.1" viewBox="0 0 500 500" width={`${size}px`} height={`${size}px`}>
      <path style={{fill}} clipRule="evenodd" d="M418.081,122.802h-59.057V68.29  c0-20.077-16.262-36.34-36.341-36.34H177.316c-20.078,0-36.342,16.264-36.342,36.34v54.513H81.918  c-12.536,0-22.713,10.177-22.713,22.715c0,12.536,10.177,22.713,22.713,22.713h13.629v263.48c0,20.078,16.262,36.34,36.341,36.34  h236.224c20.078,0,36.341-16.262,36.341-36.34v-263.48h13.629c12.535,0,22.715-10.177,22.715-22.713  C440.796,132.979,430.616,122.802,418.081,122.802z M313.598,122.802H186.4V97.367c0-11.083,8.909-19.991,19.991-19.991h87.216  c11.084,0,19.99,8.909,19.99,19.991V122.802z M186.4,186.401v218.051c0,9.992-8.181,18.172-18.17,18.172s-18.17-8.18-18.17-18.172  V186.401c0-9.989,8.18-18.17,18.17-18.17S186.4,176.412,186.4,186.401z M268.172,186.401v218.051  c0,9.992-8.181,18.172-18.172,18.172c-9.99,0-18.17-8.18-18.17-18.172V186.401c0-9.989,8.181-18.17,18.17-18.17  C259.991,168.231,268.172,176.412,268.172,186.401z M349.938,186.401v218.051c0,9.992-8.181,18.172-18.169,18.172  c-9.99,0-18.172-8.18-18.172-18.172V186.401c0-9.989,8.182-18.17,18.172-18.17C341.758,168.231,349.938,176.412,349.938,186.401z" fillRule="evenodd"/>
    </svg>
  )
};