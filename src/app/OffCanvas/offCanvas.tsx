import styled from 'styled-components';
import React, { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface OffCanvasProps {
  open: boolean;
  direction?: 'left' | 'right'; // optional
  width?: string; // optional
  onClose?: () => void;
  children?: ReactNode;
}

const Wrapper = styled.div<OffCanvasProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  ${({ direction, open }) =>
    open
      ? direction === 'left'
        ? 'left: 0'
        : 'right: 0'
      : direction === 'left'
      ? 'left: -100%'
      : 'right: -100%'};
  width: ${({ width }) => width};
  background: white;
  transition: transform 0.3s ease-in-out;
  z-index: 999;
`;

const Shadow = styled.div<OffCanvasProps>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  width: 100%;
`;

export function OffCanvas(props: OffCanvasProps) {
  return (
    <>
      <Shadow open={props.open} onClick={props.onClose} />
      <Wrapper
        open={props.open}
        direction={props.direction}
        width={props.width}
      >
        {props.children}
      </Wrapper>
    </>
  );
}
