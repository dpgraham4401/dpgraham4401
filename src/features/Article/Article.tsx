import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { api } from "../../services";
import { Blog } from "../../types";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

function Article() {
  const { id } = useParams();

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
        <Card.Header>{article?.title}</Card.Header>
        <Card.Body>
          {loading ? (
            <h1 className="d-flex justify-content-center bg-transparent py-3">
              <FontAwesomeIcon
                className="fa-spin text-muted"
                icon={faCircleNotch}
              />
            </h1>
          ) : article ? (
            <ReactMarkdown children={article.content} />
          ) : (
            "yo"
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Article;
