import React, { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import theme from '../../../../styles/theme';
import FlexCenter from '../../../utils/FlexCenter';
import InputText from '../../../utils/InputText';

const Container = styled(FlexCenter)`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled(FlexCenter)`
  width: 500px;
  height: 45px;
  @media (max-width: ${theme.breakpoints.md}) {
    width: 400px;
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    width: 250px;
  }
`;

const InputTextArea: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <Container>
      <Wrapper>
        <InputText />
      </Wrapper>
    </Container>
  );
};

export default InputTextArea;
