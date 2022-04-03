import React, { PropsWithChildren } from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
  display: grid;
  grid-template-rows: 150px 75px 100px 50px 250px 250px 250px 250px;
  height: 100%;
`;

const MainTemplate: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainTemplate;
