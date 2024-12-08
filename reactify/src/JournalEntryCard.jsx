import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const JournalEntryCard = (props) => {
  const [isFavorited, setIsFavorited] = useState(props.bookmark.length > 0);
  const [bookmarkAddedAt, setBookmarkAddedAt] = useState(
    props.bookmark.length > 0 ? props.bookmark[0].addedAt : ""
  );

  const onFavoriteToggle = async () => {
    if (isFavorited) {
      try {
        // Fetch and delete bookmarks
        const response = await fetch(`http://localhost:3000/bookmarks?journalEntryId=${props.id}`);
        const bookmarks = await response.json();

        // Delete bookmarks one by one
        await Promise.all(
          bookmarks.map((mark) =>
            fetch(`http://localhost:3000/bookmarks/${mark.id}`, { method: "DELETE" })
          )
        );

        console.log(`Deleted all bookmarks for journalEntryId: ${props.id}`);
        setIsFavorited(false); // Update local state
        setBookmarkAddedAt(""); // Clear timestamp
      } catch (err) {
        console.error("Error deleting bookmarks:", err);
      }
    } else {
      // Add a new bookmark
      const newBookmark = {
        id: Date.now().toString(),
        journalEntryId: props.id,
        addedAt: new Date().toISOString(),
      };
      try {
        await fetch("http://localhost:3000/bookmarks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBookmark),
        });
        console.log("Bookmark added:", newBookmark);
        setIsFavorited(true); // Update local state
        setBookmarkAddedAt(newBookmark.addedAt); // Update timestamp
      } catch (err) {
        console.error("Error adding bookmark:", err);
      }
    }
  };

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
      <Link
        to={`http://localhost:3000/home/${props.id}`}
        style={{ margin: "0 0 8px", display: "block" }}
        className="card-link"
      >
        {props.foodName}
      </Link>
      <p style={{ margin: "4px 0" }}>
        <strong>Ingredients:</strong> {Array.isArray(props.ingredients) ? props.ingredients.join(", ") : props.ingredients}
      </p>
      <p style={{ margin: "4px 0" }}>
        <strong>Reaction:</strong> {Array.isArray(props.reaction) ? props.reaction.join(", ") : props.reaction}
      </p>
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <img
          src={props.url}
          alt={props.foodName}
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          onClick={onFavoriteToggle}
          style={{
            marginTop: "12px",
            padding: "8px 16px",
            backgroundColor: isFavorited ? "#ffc107" : "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            display: "block",
          }}
        >
          {isFavorited ? "Unfavorite" : "Add to Favorites"}
        </button>
        <p style={{ marginTop: "8px", fontSize: "0.9em", color: "#555" }}>
          {isFavorited ? `Added on: ${bookmarkAddedAt}` : ""}
        </p>
      </div>
    </div>
  );
};

export default JournalEntryCard;
