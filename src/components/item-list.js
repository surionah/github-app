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
`;

function ItemList({name, imageUrl, itemId}) {
  return (
    <Card bg="dark" text="light" key={itemId}>
      <Card.Body>
        <Card.Title>
          <Row>
            <Col md="9">
              <Image src={imageUrl} alt="avatar" width="40" height="40"></Image>
              <Name>{name}</Name>
            </Col>
            <Col md="3">
              <Button variant="primary" className="float-right">See more...</Button>
            </Col>
          </Row>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ItemList;