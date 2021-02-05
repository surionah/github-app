import PropTypes from 'prop-types';
import styled from 'styled-components';

const Description = styled.h3`
  font-size: 1.5rem;
  margin: 0.5rem 0;
  @media (max-width: 768px) {
    font-size: 1.0rem;
  }
`;

function PageDescription({content}) {
  return (
    <Description>{content}</Description>
  );
}

PageDescription.propTypes = {
  content: PropTypes.string.isRequired
}

export default PageDescription;