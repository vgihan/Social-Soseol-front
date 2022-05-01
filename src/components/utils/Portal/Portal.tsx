import { PropsWithChildren } from 'react';

import ReactDOM from 'react-dom';

type Props = {
  selector: string;
};

const Portal: React.FC<PropsWithChildren<Props>> = ({ children, selector }) => {
  const element = typeof window !== 'undefined' && document.querySelector(selector);
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
