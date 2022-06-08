import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { GiAges } from "react-icons/gi";

import { GrContactInfo } from "react-icons/gr";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

const ActivityDetail = (props) => {
  return (
    <Grid container sx={{ p: 4 }} spacing={7}>
      <Grid item xs={8}>
        <Card
          sx={{
            maxWidth: 700,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box",
            padding: 6,
            margin: 5,
            textAlign: "justify",
          }}
        >
          <Typography gutterBottom variant="h3" component="div">
            {props.title}
          </Typography>
          <CardMedia
            sx={{ maxWidth: 300 }}
            component="img"
            height="350"
            image={props.imageUrl}
            alt="img"
          ></CardMedia>
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card
          sx={{
            maxWidth: 700,
            display: "flex",
            flexDirection: "column",

            boxSizing: "border-box",
            padding: 6,
            margin: 5,
            textAlign: "justify",
            gap: 7,
          }}
        >
          <Typography variant="body1" color="text.secondary">
            {" "}
            <HiOutlineLocationMarker /> {"  "}
            {props.location}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {" "}
            <MdDateRange /> {"  "}
            {props.date}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {" "}
            <GiAges /> {"   "}
            {props.ageRange}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ borderBottom: "1px solid lightGrey" }}
          >
            Price: €{props.price}
          </Typography>
          <Typography>
            <GrContactInfo />
            {"  "} Contact information
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {props.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone Number: {props.phone}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};
export default ActivityDetail;
