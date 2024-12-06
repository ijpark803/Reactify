
import { useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

export default function Form(props) {
  const [ingredients, setIngredient] = useState("");
  const [foodName, setfood] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleChangeIngredients = (event) => {
    setIngredient(event.target.value);
  };

  const handleChangeFoodName = (event) => {
    setfood(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSymptoms(prevSymptoms => {
      if (checked) {
        return [...prevSymptoms, id];
      } else {
        return prevSymptoms.filter(symptom => symptom !== id);
      }
    });
  };
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  useEffect(() => {
    // Bootstrap custom validation logic
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener(
        'submit',
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        },
        false
      );
    });

    // Cleanup function to remove event listeners
    return () => {
      forms.forEach((form) => {
        form.removeEventListener('submit', (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
        });
      });
    };
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      ingredients: ingredients,
      foodName: foodName,
      symptoms: symptoms,
      selectedImage: selectedImage
    });
  };
  


  return (
    <form
      id="forminput"
      class="needs-validation"
      noValidate
      onSubmit={onSubmit}
      method="post">
      <div className="row">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <div class="invalid-feedback">Please upload an image.</div>
      </div>
      <div className="row mt-3">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          placeholder="What are you eating?"
          value={foodName}
          onChange={handleChangeFoodName}
          required
        />
        <div class="invalid-feedback">Please add a description.</div>
      </div>
      <div className="row mt-3">
        <textarea
          className="form-control"
          placeholder="Tag the ingredients (e.g., pasta, tomato, cheese)"
          value={ingredients}
          onChange={handleChangeIngredients}
          rows="4"
          required
        />
        <div class="invalid-feedback">Please add ingredients.</div>

        <div className="row mt-3"></div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="symptoms"
            id="bloating"
            onChange={handleCheckboxChange}
          />
          <label class="form-check-label" for="bloating">
            Bloating
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="symptoms"
            id="fatigue"
            onChange={handleCheckboxChange}
          />
          <label class="form-check-label" for="fatigue">
            Fatigue
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="symptoms"
            id="headache"
            onChange={handleCheckboxChange}
          />
          <label class="form-check-label" for="headache">
            Headache
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="symptoms"
            id="indigestion"
            onChange={handleCheckboxChange}
          />
          <label class="form-check-label" for="indigestion">
            Indigestion
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="symptoms"
            id="nausea"
            onChange={handleCheckboxChange}
          />
          <label class="form-check-label" for="nausea">
            Nausea
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name="symptoms"
            id="cramp"
            onChange={handleCheckboxChange}
          />
          <label class="form-check-label" for="cramp">
            Stomach Cramps
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="bookmark"
            id="bookmark"
          />
          <label class="form-check-label" for="bookmark">
            Select to Bookmark
          </label>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </div>
    </form>
  );
}
