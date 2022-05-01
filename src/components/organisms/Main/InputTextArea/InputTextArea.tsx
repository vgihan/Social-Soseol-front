import React, { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

import FlexCenter from '../../../utils/FlexCenter';
import InputText from '../../../utils/InputText';

const Container = styled(FlexCenter)`
  width: 100%;
  height: 100%;
`;
const Wrapper = styled(FlexCenter)`
  width: 50vmin;
  height: 45px;
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
