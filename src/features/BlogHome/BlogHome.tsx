import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { api } from "../../services";
import { Blog } from "../../types";
import DpgCard from "../../components/DpgCard";
import { Link } from "react-router-dom";

function BlogHome() {
  const [blogs, setBlogs] = useState<Blog[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    api
      .get("blog", null)
      .then((response) => {
        setBlogs(response as Blog[]);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Container>
        <DpgCard>
          <DpgCard.Header title="Ramblings for Consumption" />
          <DpgCard.Body>
            {loading ? (
              <DpgCard.Spinner />
            ) : blogs ? (
              listArticles(blogs)
            ) : (
              "error"
            )}
          </DpgCard.Body>
        </DpgCard>
      </Container>
    </>
  );
}

function listArticles(blogs: Blog[]) {
  if (blogs.length === 0 || undefined) {
    return <div></div>;
  }
  return blogs.map((blog: Blog, i: number) => {
    return (
      <div key={i}>
        <Link to={`/blog/${blog.id}`} className="h3 text-decoration-none">
          {blog.title}
        </Link>
        <p className="ms-2 mb-0 text-muted">{blog.createDate}</p>
        <p className="mt-0">
          {blog.content}
          <span>
            <Link className="text-decoration-none" to={`/blog/${blog.id}`}>
              {"read more..."}
            </Link>
          </span>
        </p>
      </div>
    );
  });
}

export default BlogHome;
