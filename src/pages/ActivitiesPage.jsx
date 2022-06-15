import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchActivities } from "../store/activity/action";
import { selectActivities } from "../store/activity/selector";
import Activity from "../components/Activity";
import Map from "../components/Map";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MyCalendar from "../components/Calendar";
import moment from "moment";

export default function Activities() {
  const dispatch = useDispatch();
  const activities = useSelector(selectActivities);
  const [getInputText, setInputText] = useState("");
  const [age, setAge] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  console.log("dateSelected", selectedDate);
  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const style = { p: 4 };
  const filterActivities = activities
    .filter((a) => a.title.toLowerCase().includes(getInputText))
    .filter((a) => {
      return age ? a.ageRange === age : true;
    })
    .filter((a) => {
      return selectedDate ? moment(selectedDate).isSame(a.date, "day") : true;
    });

  return (
    <>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Box className="context">
        <Grid container sx={style} spacing={10}>
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              p: 10,
              gap: 5,
            }}
          >
            <TextField
              sx={{
                backgroundColor: "white",
              }}
              type="text"
              label="Search"
              value={getInputText}
              onChange={(e) => setInputText(e.target.value)}
            ></TextField>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    value="infant"
                    checked={age === "infant"}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                }
                label="Infant"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    value="pre-schooler"
                    checked={age === "pre-schooler"}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                }
                label="Pre-schooler"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    value="school-age"
                    checked={age === "school-age"}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                }
                label="School-age"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    value="all-ages"
                    checked={age === "all-ages"}
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                }
                label="All-ages"
              />
            </FormGroup>
            <Button
              variant="contained"
              onClick={() => {
                setAge(false);
                setInputText("");
                setSelectedDate(null);
              }}
            >
              Clear filters
            </Button>

            <MyCalendar
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />

            <Map />
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            {filterActivities.length ? (
              filterActivities.map((a) => (
                <Activity
                  key={a.id}
                  title={a.title}
                  location={a.location}
                  date={a.date}
                  imageUrl={a.imageUrl}
                  ageRange={a.ageRange}
                  id={a.id}
                />
              ))
            ) : (
              <h2>There are no activities on this day</h2>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
