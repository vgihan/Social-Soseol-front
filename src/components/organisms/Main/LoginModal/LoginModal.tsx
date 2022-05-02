import { useDispatch, useSelector } from 'react-redux';

import LoginModalTemplate from 'components/templates/LoginModalTemplate';
import FlexCenter from 'components/utils/FlexCenter';
import KakaoLoginButton from 'components/utils/KakaoLoginButton';
import Logo from 'components/utils/Logo';
import Modal from 'components/utils/Modal';
import { AppState } from 'store';
import { closeLoginModalAction } from 'store/actions/main/closeLoginModal';

const LoginModal = () => {
  const dispatch = useDispatch();
  const isOpenModal = useSelector((state: AppState) => state.mainReducer.isOpenLoginModal);

  const handleModalOutsideClick = () => {
    dispatch(closeLoginModalAction());
  };

  if (!isOpenModal) return <div />;

  return (
    <Modal onOutsideClick={handleModalOutsideClick}>
      <LoginModalTemplate>
        <FlexCenter>
          <Logo />
        </FlexCenter>
        <FlexCenter>
          <KakaoLoginButton href="#" />
        </FlexCenter>
      </LoginModalTemplate>
    </Modal>
  );
};

export default LoginModal;
