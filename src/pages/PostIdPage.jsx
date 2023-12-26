import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import CommentList from "../components/CommentList";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById();
    setPost(response.data);
  });
  const [fetchComments, isCommentLoading, commentError] = useFetching(
    async () => {
      const response = await PostService.getCommentsByPostId(1);
      // console.log(id);
      console.log(params.id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div style={{ marginTop: "30px" }}>
          <Loader />
        </div>
      ) : (
        <div>
          <h2>
            {post.id}. {post.title}
          </h2>
          <p>{post.body}</p>
        </div>
      )}
      <h2 style={{ marginTop: "30px" }}>Comments</h2>
      {isCommentLoading ? (
        <div style={{ marginTop: "50px" }}>
          <Loader />
        </div>
      ) : (
        <CommentList comments={comments} />
      )}
    </div>
  );
};

export default PostIdPage;
