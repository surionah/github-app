import styled from 'styled-components';

const FooterPanel = styled.div`
  height: 5rem;
  color: white;
  background-color: #343a40;
  margin-top: 2rem;
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  border-top: 1rem solid white;
`;

const Author = styled.span`
  font-weight: bold;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterPanel className="fixed-bottom">
      Github basic app - Powered by
      <Author> surionah</Author>
    </FooterPanel>
  )
}

export default Footer;
