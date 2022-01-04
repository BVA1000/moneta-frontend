import BackToAccountButton from "../Buttons/Account/backtoacct";
import SubmitPost from "../Buttons/Submit/submitpost";
import "./postCard.css";

function CreatePostCard() {
  return (
    <div id="createPostsCard">
      <form className="postCard">
        <div id="postInputs">
          <div>
            <input type="text" placeholder="Title" required />
          </div>
          <div>
            <input type="text" placeholder="Subject" required />
          </div>
          <div>
            <input type="text" placeholder="Author" required />
          </div>
        </div>
        <div>
          <textarea type="text" placeholder="Text Box" required />
        </div>
        <div id="btn-group">
          <SubmitPost />
          <BackToAccountButton />
        </div>
      </form>
    </div>
  );
}

export default CreatePostCard;
