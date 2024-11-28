import React from "react";

const JournalEntryCard = ({foodName, ingredients, reaction, url}) => {
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
      <h3 style={{ margin: "0 0 8px" }}>{foodName}</h3>
      <p style={{ margin: "4px 0" }}>
        <strong>Ingredients:</strong> {ingredients.join(", ")}
      </p>
      <p style={{ margin: "4px 0" }}>
        <strong>Reaction:</strong> {reaction}
      </p>
      <img src={url} alt={foodName} />
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
