import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0;
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 1.5rem 0;
  }
`;

function PageTitle({content}) {
  return (
    <Title>{content}</Title>
  );
}

PageTitle.propTypes = {
  content: PropTypes.string.isRequired
}

export default PageTitle;
