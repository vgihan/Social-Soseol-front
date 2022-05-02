import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

import styled from '@emotion/styled';

import theme from 'styles/theme';

const KakaoButtonImage = styled.img`
  content: url('/img/kakao_login_long.png');
  @media (max-width: ${theme.breakpoints.md}) {
    content: url('/img/kakao_login_short.png');
  }
`;

const KakaoLoginButton = (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  return (
    <a {...props} style={{ textAlign: 'center' }}>
      <KakaoButtonImage alt="kakao" />
    </a>
  );
};

export default KakaoLoginButton;
