import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { api } from "../../services";
import { Blog } from "../../types";

function Home() {
  const [blogs, setBlogs] = useState<Blog[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    api
      .get("blog", null)
      .then((response) => {
        console.log(response);
        setBlogs(response as Blog[]);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      <Card className="border-0">
        <Card.Header as="h5" className="bg-light">
          Home
        </Card.Header>
        <Card.Body>{loading ? printData(blogs) : "loading"}</Card.Body>
      </Card>
    </Container>
  );
}

function printData(blogs: Blog[] | undefined) {
  if (blogs) {
    blogs.map((blog) => console.log(blog.id));
    return <p>hello</p>;
  } else {
    return <p>Good Bye</p>;
  }
}

export default Home;
