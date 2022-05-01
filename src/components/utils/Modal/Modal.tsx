import { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import FlexCenter from '../FlexCenter';
import Portal from '../Portal';

const Background = styled(FlexCenter)`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;
const Frame = styled.div`
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  width: 500px;
  height: 650px;
  background-color: white;
`;

const Modal: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Portal selector="#portal">
      <Background>
        <Frame>{children}</Frame>
      </Background>
    </Portal>
  );
};

export default Modal;
