import type { NextPage } from 'next';

import InputTextArea from 'components/organisms/Main/InputTextArea';
import LoginModal from 'components/organisms/Main/LoginModal';
import LogoArea from 'components/organisms/Main/LogoArea';
import NavigationArea from 'components/organisms/Main/NavigationArea';
import TopArea from 'components/organisms/Main/TopArea';
import MainTemplate from 'components/templates/MainTemplate';

const Home: NextPage = () => {
  return (
    <>
      <MainTemplate>
        <TopArea />
        <LogoArea />
        <NavigationArea />
        <InputTextArea />
      </MainTemplate>
      <LoginModal />
    </>
  );
};

export default Home;
