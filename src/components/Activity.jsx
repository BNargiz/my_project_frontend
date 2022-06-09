import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdDateRange } from "react-icons/md";
import { GiAges } from "react-icons/gi";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Activity = (props) => {
  return (
    <Card sx={{ marginBottom: 7, maxWidth: 800 }}>
      <CardActionArea
        sx={{
          display: "flex",
          boxSizing: "border-box",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          p: 0,
          margin: 0,

          gap: 3,
        }}
      >
        <CardMedia
          sx={{ maxWidth: 400 }}
          component="img"
          height="350"
          image={props.imageUrl}
          alt="img"
        />
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Typography gutterBottom variant="h4" component="div">
            {props.title}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            <HiOutlineLocationMarker /> {props.location}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <MdDateRange /> {"  "}
            {props.date}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            <GiAges /> {"   "}
            {props.ageRange}
          </Typography>

          <Link to={`/activities/${props.id}`}>
            <CardActions>
              <Button size="small" color="primary">
                Read More
              </Button>
            </CardActions>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Activity;
