import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import Dropdown from 'components/utils/Dropdown';
import FlexCenter from 'components/utils/FlexCenter';
import Profile from 'components/utils/Profile';
import { openLoginModalAction } from 'store/actions/main/openLoginModal';

const Container = styled(FlexCenter)`
  justify-content: space-between;
  padding: 0 2vw;
`;
const ElementBox = styled.div`
  height: 55%;
`;

const TopArea = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <ElementBox />
      <ElementBox>
        <Dropdown menus={[{ name: '로그인', handler: () => dispatch(openLoginModalAction()) }]}>
          <Profile />
          <img src="/img/dropdown.svg" alt="dropdown" height="100%" />
        </Dropdown>
      </ElementBox>
    </Container>
  );
};

export default TopArea;
