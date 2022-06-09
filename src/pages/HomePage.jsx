import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
export default function Home() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        gap: 5,
        justifyContent: "center",
        p: 5,
        margin: 0,
        maxWidth: 2000,
      }}
    >
      <Grid item xs={12} sm={4} md={4}>
        <Card className="video-responsive">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CuL6YJpiAIg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Card className="video-responsive">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/7gl3PogKfuA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Card className="video-responsive">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rZd_hzFWVNc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Card className="video-responsive">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VDuX74tD2EE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Card className="video-responsive">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/sD_FrkKcjwk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Card>
      </Grid>
    </Grid>
  );
}
