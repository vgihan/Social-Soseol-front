import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../../../../store';
import { closeLoginModalAction } from '../../../../store/actions/main/closeLoginModal';
import LoginModalTemplate from '../../../templates/LoginModalTemplate';
import FlexCenter from '../../../utils/FlexCenter';
import KakaoLoginButton from '../../../utils/KakaoLoginButton';
import Logo from '../../../utils/Logo';
import Modal from '../../../utils/Modal';

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
