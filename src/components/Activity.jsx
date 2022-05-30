import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { GiAges } from "react-icons/gi";
import { Link } from "react-router-dom";

const Activity = (props) => {
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
      <p>
        <GiAges />
        {props.ageRange}
      </p>
      <Link to={`/activities/${props.id}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
};
export default Activity;
