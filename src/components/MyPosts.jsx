import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteOneActivity } from "../store/user/actions";

const MyPosts = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        border: "1px solid black",
        padding: 20,
        margin: 20,
        maxWidth: 700,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{props.title}</h1>
      <img style={{ maxWidth: 200 }} src={props.imageUrl} alt="img" />
      <p>
        <HiOutlineLocationMarker />
        {props.location}
      </p>
      <p>
        <MdDateRange />
        {props.date}
      </p>
      <div style={{ display: "flex", gap: 80 }}>
        <button onClick={() => dispatch(deleteOneActivity(props.id))}>
          Delete post
        </button>
        <button>Modify post</button>
      </div>
    </div>
  );
};
export default MyPosts;