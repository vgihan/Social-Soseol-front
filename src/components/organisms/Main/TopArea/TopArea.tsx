import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Dropdown from '../../../utils/Dropdown';
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
  const router = useRouter();

  return (
    <Container>
      <ElementBox />
      <ElementBox>
        <Dropdown
          menus={[
            { name: '로그인', handler: () => router.push('/login') },
            { name: '로그아웃', handler: () => router.push('/') },
          ]}
        >
          <Profile />
          <img src="/img/dropdown.svg" alt="dropdown" height="100%" />
        </Dropdown>
      </ElementBox>
    </Container>
  );
};

export default TopArea;
