import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
export default function Home() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 5,
        margin: 0,
        maxWidth: 2000,
      }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/CuL6YJpiAIg"
            title="YouTube video player"
          />
          <CardContent>
            <Typography variant="body1" color="text.secondary">
              Learn the basics of how to play the Piano and how to play a simple
              pattern in just a few minutes!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/7gl3PogKfuA"
            title="YouTube video player"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/rZd_hzFWVNc"
            title="YouTube video player"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/VDuX74tD2EE"
            title="YouTube video player"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/sD_FrkKcjwk"
            title="YouTube video player"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card className="video-responsive" sx={{ margin: 2 }}>
          <CardMedia
            sx={{ height: 230 }}
            component="iframe"
            src="https://www.youtube.com/embed/slYX1OUKuhI"
            title="YouTube video player"
          />
        </Card>
      </Grid>
    </Grid>
  );
}
