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

const Author = styled.span`
  font-weight: bold;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterPanel>Github basic app - Powered by <Author>surionah</Author></FooterPanel>
  )
}

export default Footer;