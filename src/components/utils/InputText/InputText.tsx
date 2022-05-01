import styled from '@emotion/styled';

import FlexCenter from '../FlexCenter';

const Container = styled.div`
  border-radius: 100px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  height: 100%;
  width: 100%;
  padding: 0 20px 0 30px;
`;
const SearchBox = styled(FlexCenter)`
  column-gap: 20px;
  height: 100%;
`;
const Input = styled.input`
  font-size: 16px;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
`;

const InputText = () => {
  return (
    <Container>
      <SearchBox>
        <img src="/img/search.svg" width="16px" height="16px" alt="search" />
        <Input />
      </SearchBox>
    </Container>
  );
};

export default InputText;
