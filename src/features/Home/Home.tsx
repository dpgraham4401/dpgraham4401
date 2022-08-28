import React, { useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';
import { api } from '../../services';

// interface Blog {
//   id: number;
//   title: string;
//   updatedDate: Date;
//   createdDate: string;
// }

function Home() {
  useEffect(() => {
    api.get('blog/1', null).then((response) => {
      console.log(response);
    });
  });
  return (
    <Container>
      <Card className="border-0">
        <Card.Header as="h5" className="bg-light">
          Home
        </Card.Header>
        <Card.Body>
          <p>hello</p>
          <a className="link-dpg-dark" href="https://github.com/dpgraham4401">
            hello github
          </a>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
