import { useLoaderData } from "react-router-dom";
import { useState, useRef } from "react";

import { Link } from "react-router-dom";
import JournalEntryCard from "../JournalEntryCard";

export default function Home() {
  const entries = useLoaderData();
  //console.log("entries: ", entries)

return (

    <div style={{ maxWidth: "600px", margin: "auto", padding: "16px" }}>
      <h2>Food Journal Entries</h2>
      {entries && entries.length > 0 ? (
        entries.map((entry) => (
          <JournalEntryCard 
            key={entry.id}
            foodName={entry.foodName}
            ingredients={entry.ingredientsNames}
            reaction={entry.reactionDescription}
            image = {entry.url}
          />
        ))
      ) : (
        <p>No entries found.</p>
      )}
    </div>
  

);
}
