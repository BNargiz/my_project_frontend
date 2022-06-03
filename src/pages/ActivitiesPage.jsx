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
  const [age, setAge] = useState(false);
  console.log("age", age);
  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  return (
    <div style={{}}>
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
        <p>
          <input
            type="radio"
            value="infant"
            checked={age === "infant"}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          Infant <br />
          <input
            type="radio"
            value="pre-schooler"
            checked={age === "pre-schooler"}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />{" "}
          Pre-schooler <br />
          <input
            type="radio"
            value="school-age"
            checked={age === "school-age"}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />{" "}
          School-age <br />
          <input
            type="radio"
            value="all-ages"
            checked={age === "all-ages"}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />{" "}
          All-ages <br />
        </p>
        <button
          onClick={() => {
            setAge(false);
            setInputText("");
          }}
        >
          Clear filters
        </button>
        {activities
          .filter((a) => a.title.toLowerCase().includes(getInputText))
          .filter((a) => {
            return age ? a.ageRange === age : a;
          })
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
