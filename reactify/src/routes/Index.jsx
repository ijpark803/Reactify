import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useState, useEffect} from "react";
import Form from '../Form';

export default function Index() {


  const navigate = useNavigate();

  const onSubmit=(post, event) => {
    // event.preventDefault();
    const newPost = {
      id: Date.now().toString(),
      foodName: post.foodName,
      date: new Date().toString(),
      ingredients: post.ingredients.split(",").map(ingredient => ingredient.trim()),
      reaction: post.symptoms, 
      imageUrl: post.selectedImage ? URL.createObjectURL(post.selectedImage) : "",
    };
    
    fetch("http://localhost:3000/journalEntries", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      navigate("/home");
      toast.success("You successfully created your post.");
    });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", width: "100%" }}>
      <div className="text-center">
        <Form 
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
