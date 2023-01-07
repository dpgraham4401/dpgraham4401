import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { api } from "../../services";
import { Blog } from "../../types";
import DpgCard from "../../components/DpgCard";
import DpgMarkdown from "../../components/DpgMarkdown";

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
          <DpgCard.Header title={article?.title} />
          <DpgCard.Body>
            {loading ? (
              <DpgCard.Spinner />
            ) : article ? (
              <DpgMarkdown article={article} />
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
