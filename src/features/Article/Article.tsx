import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { api } from "../../services";
import { Blog } from "../../types";

function Article() {
  const { id } = useParams();
  // useEffect(() => {
  //   setLoading(true);
  //   api
  //     .get('blog', null)
  //     .then((response) => {
  //       console.log(response);
  //       setBlogs(response as Blog[]);
  //     })
  //     .then(() => {
  //       setLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  const [loading, setLoading] = useState<boolean>(true);
  const [article, setArticle] = useState<Blog | undefined>(undefined);
  useEffect(() => {
    setLoading(true);
    api
      .get(`blog/${id}`, null)
      .then((response) => {
        console.log(response);
        setArticle(response as Blog);
      })
      .then(() => setLoading(false));
  }, [id]);
  return (
    <Container>
      <Card>
        <Card.Header>Blog</Card.Header>
        <Card.Body>{article ? article.content : "yo"}</Card.Body>
      </Card>
    </Container>
  );
}

export default Article;
