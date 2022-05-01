import styled from '@emotion/styled';

const Container = styled.img`
  border-radius: 50%;
  height: 100%;
  background-color: #ddd;
`;

const Profile = () => {
  return <Container src="/img/user.svg" />;
};

export default Profile;
