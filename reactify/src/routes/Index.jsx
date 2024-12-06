import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useState, useEffect} from "react";
import Form from '../Form';

export default function Index() {


  const navigate = useNavigate();
  //const posts = useLoaderData();

  // const handleChangeIngredients = (event) => {
  //   setIngredient(event.target.value);
  // };

  // const handleChangeFoodName = (event) => {
  //   setfood(event.target.value);
  // };

  // const handleCheckboxChange = (event) => {
  //   const { id, checked } = event.target;
  //   setSymptoms(prevSymptoms => {
  //     if (checked) {
  //       return [...prevSymptoms, id];
  //     } else {
  //       return prevSymptoms.filter(symptom => symptom !== id);
  //     }
  //   });
  // };
  // const handleImageChange = (event) => {
  //   setSelectedImage(event.target.files[0]);
  // };

  const onSubmit=(post, event) => {
    // event.preventDefault();
    const newPost = {
      id: Date.now().toISOString(),
      foodName: post.foodName,
      date: new Date().toISOString(),
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

  // useEffect(() => {
  //   // Bootstrap custom validation logic
  //   const forms = document.querySelectorAll('.needs-validation');
  //   Array.prototype.slice.call(forms).forEach((form) => {
  //     form.addEventListener(
  //       'submit',
  //       (event) => {
  //         if (!form.checkValidity()) {
  //           event.preventDefault();
  //           event.stopPropagation();
  //         }
  //         form.classList.add('was-validated');
  //       },
  //       false
  //     );
  //   });

  //   // Cleanup function to remove event listeners
  //   return () => {
  //     forms.forEach((form) => {
  //       form.removeEventListener('submit', (event) => {
  //         if (!form.checkValidity()) {
  //           event.preventDefault();
  //           event.stopPropagation();
  //         }
  //       });
  //     });
  //   };
  // }, []);

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
