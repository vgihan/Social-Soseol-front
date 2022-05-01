import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

const KakaoLoginButton = (props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  return (
    <a {...props}>
      <img src="/img/kakao_login.png" alt="kakao" />
    </a>
  );
};

export default KakaoLoginButton;
