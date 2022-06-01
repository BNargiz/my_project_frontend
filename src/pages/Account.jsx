import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MyPosts from "../components/MyPosts";
import { selectToken, selectUserActivities } from "../store/user/selectors";
import Loading from "../components/Loading";

export default function Account() {
  const token = useSelector(selectToken);
  const userActivities = useSelector(selectUserActivities);
  const navigate = useNavigate();
  if (token === null) {
    navigate("/");
  }
  return userActivities !== null ? (
    <div>
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
