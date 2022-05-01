import type { NextPage } from 'next';

import InputTextArea from '../components/organisms/Main/InputTextArea';
import LogoArea from '../components/organisms/Main/LogoArea';
import NavigationArea from '../components/organisms/Main/NavigationArea';
import TopArea from '../components/organisms/Main/TopArea';
import MainTemplate from '../components/templates/MainTemplate';

const Home: NextPage = () => {
  return (
    <MainTemplate>
      <TopArea />
      <LogoArea />
      <NavigationArea />
      <InputTextArea />
    </MainTemplate>
  );
};

export default Home;
