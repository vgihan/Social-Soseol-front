import { MouseEventHandler, PropsWithChildren, useState } from 'react';

import styled from '@emotion/styled';

const List = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  margin-top: 10px;
  padding: 10px;
  animation: fadein 0.3s ease-in;
  @keyframes fadein {
    from {
      opacity: 0;
      > a {
        height: 0;
      }
    }
    to {
      opacity: 1;
      > a {
        height: 100%;
      }
    }
  }
`;
const Element = styled.a`
  line-height: 20px;
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  box-sizing: border-box;
  z-index: 0;
  cursor: pointer;
`;
const Button = styled.button`
  text-align: end;
  width: 100%;
  height: 100%;
  background-color: white;
  border: none;
  cursor: pointer;
`;

type Menu = {
  name: string;
  handler: MouseEventHandler;
};

type Props = {
  menus: Array<Menu>;
};

const Dropdown: React.FC<PropsWithChildren<Props>> = ({ children, menus }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(isOpen !== true)}>{children}</Button>
      {isOpen && (
        <List>
          {menus.map(({ name, handler }) => (
            <Element key={name} onClick={handler}>
              {name}
            </Element>
          ))}
        </List>
      )}
    </>
  );
};

export default Dropdown;
