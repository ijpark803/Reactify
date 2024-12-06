import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../Form";
import Index from "./Index";

export default function EditJournal() {
  const post = useLoaderData();
  console.log("post", post)
  const navigate = useNavigate();

  return (
    
    <Form
      onSubmit={(updatedPost) => {
        fetch(`http://localhost:3000/journalEntries/${post.id}`, {
          method: "PATCH",
          body: JSON.stringify(updatedPost),
          headers: {
            "Content-type": "application/json",
          },
        }).then(() => {
          navigate(`/home/${post.id}`);
          toast.success("Your post was successfully updated.");
        });
      }}
    />
  );
}