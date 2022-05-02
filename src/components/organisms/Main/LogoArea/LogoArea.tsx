import styled from '@emotion/styled';

import FlexCenter from 'components/utils/FlexCenter';
import Logo from 'components/utils/Logo';

const Container = styled(FlexCenter)`
  align-items: end;
`;

const LogoArea = () => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default LogoArea;
