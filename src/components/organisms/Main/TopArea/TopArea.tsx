import styled from '@emotion/styled';

import FlexCenter from '../../../utils/FlexCenter';
import Profile from '../../../utils/Profile';

const Container = styled(FlexCenter)`
  justify-content: space-between;
  padding: 0 30px;
`;
const ElementBox = styled.div`
  height: 55%;
`;

const TopArea = () => {
  return (
    <Container>
      <ElementBox />
      <ElementBox>
        <Profile />
        <img src="/img/dropdown.svg" alt="dropdown" height="100%" />
      </ElementBox>
    </Container>
  );
};

export default TopArea;
