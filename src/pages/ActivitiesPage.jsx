import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../store/activity/action";
import { selectActivities } from "../store/activity/selector";
import { BiSearchAlt2 } from "react-icons/bi";
import Activity from "../components/Activity";
import Map from "../components/Map";
export default function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector(selectActivities);
  const [getInputText, setInputText] = useState("");
  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);
  return (
    <div style={{ display: "flex" }}>
      <Map />
      <div>
        <input
          type="text"
          placeholder="Search"
          value={getInputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        {/* <button type="submit" onClick={(e) => setInputText(e.target.value)}>
          <BiSearchAlt2 />
        </button> */}
        {activities
          .filter((a) => a.title.toLowerCase().includes(getInputText))
          .map((a) => (
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
    </div>
  );
}
