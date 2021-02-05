import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Col,
  Image,
  Row
} from 'react-bootstrap';
import styled from 'styled-components';

const Name = styled.span`
  margin-left: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function ItemList({name, imageUrl, pageUrl}) {
  return (
    <Card
      bg="dark"
      text="light"
    >
      <Card.Body>
        <Card.Title>
          <Row>
            <Col
              md="9"
              sm="12"
            >
              <Image
                src={imageUrl}
                alt="avatar"
                width="40"
                height="40"
              />
              <Name>{name}</Name>
            </Col>
            <Col
              md="3"
              sm="12"
            >
              <Button
                variant="primary"
                className="float-md-right mt-md-0 mt-3"
                href={pageUrl}
                target="_blank"
              >
                See more...
              </Button>
            </Col>
          </Row>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

ItemList.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired
}

export default ItemList;