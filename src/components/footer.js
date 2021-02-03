import styled from 'styled-components';

const FooterPanel = styled.div`
  height: 5rem;
  color: white;
  background-color: #343a40;
  margin-top: 2rem;
  padding-top: 2rem;
  text-align: center;
  font-size: 0.8rem;
`;

function Footer() {
  return (
    <FooterPanel>Github basic app - Powered by surionah</FooterPanel>
  )
}

export default Footer;