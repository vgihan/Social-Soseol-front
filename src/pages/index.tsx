import type { NextPage } from 'next';

import LogoArea from '../components/organisms/Main/LogoArea';
import NavigationArea from '../components/organisms/Main/NavigationArea';
import MainTemplate from '../components/templates/MainTemplate';

const Home: NextPage = () => {
  return (
    <MainTemplate>
      <LogoArea />
      <NavigationArea />
    </MainTemplate>
  );
};

export default Home;
