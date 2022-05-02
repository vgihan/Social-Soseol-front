import styled from '@emotion/styled';
import Link from 'next/link';

import Anchor from '../../../utils/Anchor';
import FlexCenter from '../../../utils/FlexCenter';

const Container = styled(FlexCenter)`
  flex-wrap: wrap;
  > a {
    @media (max-width: 300px) {
      font-size: 12px;
    }
  }
`;

const NavigationArea = () => {
  return (
    <Container>
      <Link href="/write">
        <Anchor>글쓰기</Anchor>
      </Link>
      <Link href="/a">
        <Anchor>글쓰기</Anchor>
      </Link>
      <Link href="/b">
        <Anchor>글쓰기</Anchor>
      </Link>
      <Link href="/b">
        <Anchor>글쓰기</Anchor>
      </Link>
      <Link href="/b">
        <Anchor>글쓰기</Anchor>
      </Link>
    </Container>
  );
};

export default NavigationArea;
