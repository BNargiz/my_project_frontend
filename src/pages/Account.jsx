import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyPosts from "../components/MyPosts";
import { selectToken, selectUserActivities } from "../store/user/selectors";
import Loading from "../components/Loading";
// import { useState } from "react";
import Form from "../components/Form";
import Grid from "@mui/material/Grid";

export default function Account() {
  const token = useSelector(selectToken);
  const userActivities = useSelector(selectUserActivities);
  const navigate = useNavigate();
  if (token === null) {
    navigate("/");
  }
  // const [formOpen, setFormOpen] = useState(false);

  // const closeForm = () => {
  //   console.log("t");
  //   setFormOpen(false);
  // };

  return userActivities !== null ? (
    <div className="relative">
      <div className="my-account"></div>

      <div
        className="absolute"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Form />

        {/* <Button onClick={() => setFormOpen(!formOpen)}>Post an activity</Button>
      {formOpen && <Form closeForm={closeForm} />} */}
        {userActivities.map((a) => (
          <MyPosts
            key={a.id}
            id={a.id}
            title={a.title}
            imageUrl={a.imageUrl}
            location={a.location}
            date={a.date}
          />
        ))}
      </div>
    </div>
  ) : (
    <p>
      <Loading />
    </p>
  );
}
