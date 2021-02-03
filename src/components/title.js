import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  margin: 2rem 0;
`;

function PageTitle({content}) {
  return (
    <Title>{ content }</Title>
  );
}

export default PageTitle;