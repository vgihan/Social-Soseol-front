import Link from 'next/link';

import Anchor from '../../../utils/Anchor';
import FlexCenter from '../../../utils/FlexCenter';

const NavigationArea = () => {
  return (
    <FlexCenter>
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
    </FlexCenter>
  );
};

export default NavigationArea;
