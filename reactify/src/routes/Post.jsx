import { useLoaderData, useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import JournalEntryCard from "../JournalEntryCard";

export default function Post() {
  const post = useLoaderData();
  const navigate = useNavigate();
  console.log("post", post)

  return (
    <div className="post-page">
      <JournalEntryCard 
            key={post.id}
            foodName={post.foodName}
            ingredients={post.ingredients}
            reaction={post.reaction}
            image = {post.url}
            bookmark = {[]}
          />

      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          const isDeleteConfirmed = window.confirm(
            "Are you sure you want to delete this post?"
          );

          if (isDeleteConfirmed) {
            fetch(`/journalEntries/${post.id}`, {
              method: "DELETE",
            }).then(() => {
              navigate("/");
              toast.success("Your post was successfully deleted.");
            });
          }
        }}
      >
        Delete
      </button>
      <Link to={`/home/${post.id}/edit`} className="btn btn-primary mx-3">
        Update
      </Link>
    </div>
  );
}