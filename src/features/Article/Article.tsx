import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { api } from "../../services";
import { Blog } from "../../types";
import ReactMarkdown from "react-markdown";
import DpgCard from "../../components/DpgCard";

function Article() {
  const { id } = useParams();

  const [loading, setLoading] = useState<boolean>(true);
  const [article, setArticle] = useState<Blog | undefined>(undefined);
  useEffect(() => {
    setLoading(true);
    api
      .get(`blog/${id}`, null)
      .then((response) => {
        setArticle(response.data as Blog);
      })
      .then(() => setLoading(false));
  }, [id]);
  return (
    <>
      <Container>
        <DpgCard>
          <DpgCard.Header title="hello card title" />
          <DpgCard.Body>
            {loading ? (
              <DpgCard.Spinner />
            ) : article ? (
              <ReactMarkdown children={article.content} />
            ) : (
              "ERROR: We're sorry, we're having trouble fetching this article."
            )}
          </DpgCard.Body>
        </DpgCard>
      </Container>
    </>
  );
}

export default Article;
