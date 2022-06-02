import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyPosts from "../components/MyPosts";
import { selectToken, selectUserActivities } from "../store/user/selectors";
import Loading from "../components/Loading";
import { useState } from "react";
import Form from "../components/Form";

export default function Account() {
  const token = useSelector(selectToken);
  const userActivities = useSelector(selectUserActivities);
  const navigate = useNavigate();
  if (token === null) {
    navigate("/");
  }
  const [formOpen, setFormOpen] = useState(false);
  return userActivities !== null ? (
    <div>
      <button onClick={() => setFormOpen(!formOpen)}>Post an activity</button>
      {formOpen && <Form />}
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
  ) : (
    <p>
      <Loading />
    </p>
  );
}
