import styled from 'styled-components';

const Description = styled.h3`
  font-size: 1.5rem;
  margin: 1rem 0;
`;

function PageDescription({content}) {
  return (
    <Description>{ content }</Description>
  );
}

export default PageDescription;