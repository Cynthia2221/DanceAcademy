import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import './Forum.css'; // Importa el archivo CSS que acabamos de crear

const Forum = () => {
  const firebaseConfig = {
    databaseURL: "https://danceacademy-92b7e-default-rtdb.europe-west1.firebasedatabase.app/",
  };

  // Inicializa Firebase dentro del componente Forum
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = ref(database, 'post');
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key]
        }));
        setPosts(postsArray);
      } else {
        setPosts([]);
      }
    });
  }, [database]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostRef = push(ref(database, 'post'));
    set(newPostRef, {
      Author: author,
      Content: content,
      Title: title
    });
    setAuthor('');
    setContent('');
    setTitle('');
  };

  const handleDelete = (postId) => {
    const postRef = ref(database, `post/${postId}`);
    remove(postRef);
  };

  const handleEdit = (postId, newContent) => {
    const postRef = ref(database, `post/${postId}`);
    update(postRef, {
      Content: newContent
    });
  };

  return (
    <div className="forum-container">
      <h1>Forum</h1>
      <form className="forum-form" onSubmit={handleSubmit}>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required></textarea>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <button type="submit">Add Post</button>
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="forum-post">
            <h3>{post.Title}</h3>
            <p><strong>Author:</strong> {post.Author}</p>
            <p><strong>Content:</strong> {post.Content}</p>
            <button className="button-edit" onClick={() => handleEdit(post.id, prompt("Edit content:", post.Content))}>Edit</button>
            <button className="button-delete" onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Forum;



