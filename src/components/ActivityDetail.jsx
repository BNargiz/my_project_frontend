import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { GiAges } from "react-icons/gi";

import { AiOutlineMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

const ActivityDetail = (props) => {
  return (
    <Grid container sx={{ p: 4 }} spacing={7}>
      <Grid item xs={12} sm={6} md={8}>
        <Card
          sx={{
            width: 700,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box",
            padding: 6,
            margin: 5,
            textAlign: "justify",

            color: "#022b3a",
          }}
        >
          <Typography gutterBottom variant="h3" component="div">
            {props.title}
          </Typography>
          <CardMedia
            sx={{ width: "100%" }}
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
      <Grid item xs={12} sm={2} md={4}>
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
            color: "#022b3a",
            backgroundColor: "#f7f7f7;",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              borderLeft: "3px solid #d81159",
              fontSize: 25,
              paddingLeft: 1,
            }}
          >
            {"  "} {props.title}
          </Typography>
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
            sx={{ borderBottom: "1px solid #d81159" }}
          >
            Price: €{props.price}
          </Typography>
          <Typography>{"  "} Contact</Typography>
          <Typography variant="body2" color="text.secondary">
            <AiOutlineMail /> {props.email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <AiFillPhone /> {props.phone}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};
export default ActivityDetail;
