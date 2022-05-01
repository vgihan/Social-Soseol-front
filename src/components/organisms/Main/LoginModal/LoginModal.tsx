import LoginModalTemplate from '../../../templates/LoginModalTemplate';
import FlexCenter from '../../../utils/FlexCenter';
import KakaoLoginButton from '../../../utils/KakaoLoginButton';
import Modal from '../../../utils/Modal';

const LoginModal = () => {
  return (
    <Modal>
      <LoginModalTemplate>
        <FlexCenter>
          <img src="/img/logo.png" alt="logo" />
        </FlexCenter>
        <FlexCenter>
          <KakaoLoginButton href="#" />
        </FlexCenter>
      </LoginModalTemplate>
    </Modal>
  );
};

export default LoginModal;
