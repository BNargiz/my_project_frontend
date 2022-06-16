import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ActivityDetail from "../components/ActivityDetail";
import { fetchActivityById } from "../store/activity/action";
import { selectOneActivity } from "../store/activity/selector";

export default function ActivitiesDetailPage() {
  const dispatch = useDispatch();
  const activity = useSelector(selectOneActivity);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchActivityById(id));
  }, [dispatch, id]);

  // console.log(activity.reviews);
  return activity !== null ? (
    <div>
      <ActivityDetail
        key={activity.id}
        title={activity.title}
        location={activity.location}
        date={activity.date}
        ageRange={activity.ageRange}
        description={activity.description}
        imageUrl={activity.imageUrl}
        price={activity.price}
        email={activity.email}
        phone={activity.phone}
        review={activity.reviews}
      />
    </div>
  ) : (
    <p>Loading...</p>
  );
}
