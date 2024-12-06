import React from "react";
import { Link } from "react-router-dom";


const JournalEntryCard = (props) => {
  console.log(props)
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      {/* <h3 style={{ margin: "0 0 8px" }}>{foodName}</h3> */}
      <Link to={`http://localhost:3000/home/${props.id}`} style={{ margin: "0 0 8px" }} className="card-link">{props.foodName}</Link>
      <p style={{ margin: "4px 0" }}>
        {/* <strong>Ingredients:</strong> {props.ingredients.join(", ")} */}
        <strong>Ingredients:</strong> {props.ingredients}
      </p>
      <p style={{ margin: "4px 0" }}>
        <strong>Reaction:</strong> {props.reaction}
      </p>
      <img src={props.url} alt={props.foodName} />
      {/* <button
        onClick={onFavoriteToggle}
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          backgroundColor: favorite ? "#ffc107" : "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {favorite ? "Unfavorite" : "Add to Favorites"}
      </button> */}
    </div>
  );
};

export default JournalEntryCard;
