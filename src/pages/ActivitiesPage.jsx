import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../store/activity/action";
import { selectActivities } from "../store/activity/selector";
import Activity from "../components/Activity";

export default function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector(selectActivities);
  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);
  return (
    <div>
      {activities.map((a) => (
        <Activity
          key={a.id}
          title={a.title}
          location={a.location}
          date={a.date}
          imageUrl={a.imageUrl}
          ageRange={a.ageRange}
          id={a.id}
        />
      ))}
    </div>
  );
}
