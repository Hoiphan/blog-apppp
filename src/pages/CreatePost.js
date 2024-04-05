import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebaseconfi";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, Settitle] = useState("");
  const [postTest, SetpostTest] = useState("");

  const postCollectionref = collection(db, "posts");

  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionref, {
      title: title,
      post: postTest,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        gmail: auth.currentUser.email,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/ideti");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label>Title:</label>
          <input
            placeholder="Title..."
            onChange={(e) => {
              Settitle(e.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label>Post:</label>
          <textarea
            placeholder="Post..."
            onChange={(e) => {
              SetpostTest(e.target.value);
            }}
          />
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
