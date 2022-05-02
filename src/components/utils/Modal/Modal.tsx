import { MouseEventHandler, PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import theme from '../../../styles/theme';
import FlexCenter from '../FlexCenter';
import Portal from '../Portal';

const Background = styled(FlexCenter)`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;
const Frame = styled.div`
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  background-color: white;
  padding: 40px 0;
  box-sizing: border-box;
  width: 500px;
  height: 650px;
  @media (max-width: ${theme.breakpoints.lg}) {
    width: 400px;
    height: 600px;
  }
  @media (max-width: ${theme.breakpoints.md}) {
    width: 400px;
    height: 500px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 250px;
    height: 400px;
  }
`;

type Props = {
  onOutsideClick: MouseEventHandler;
};

const Modal: React.FC<PropsWithChildren<Props>> = ({ children, onOutsideClick }) => {
  return (
    <Portal selector="#portal">
      <Background onClick={onOutsideClick}>
        <Frame>{children}</Frame>
      </Background>
    </Portal>
  );
};

export default Modal;
