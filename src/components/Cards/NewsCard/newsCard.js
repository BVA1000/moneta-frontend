import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { amber } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import goldcoins from "../../../assets/images/monetagold.jpg";
import "./newsCard.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function NewsCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 550, bgcolor: "#f7f0a3" }}>
      <CardHeader
        sx={{ color: "#8b8002" }}
        avatar={
          <Avatar sx={{ bgcolor: amber[500] }} aria-label="coins">
            BVA
          </Avatar>
        }
        action={
          <IconButton sx={{ color: "#8b8002" }} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="History Of The Roman Coin"
        subheader="January 14, 2022"
      />
      <CardMedia>
        <img
          src={goldcoins}
          className="goldCoins"
          alt="Gold Coins"
          height={200}
          width={550}
        />
      </CardMedia>
      <CardContent>
        <Typography
          sx={{ color: "#8b8002" }}
          variant="body2"
          color="text.secondary"
        >
          The Roman economy, from its founding and establishment as a Republic,
          through to the fifth and fourth centuries BC was a system of barter
          and community trade. All manner of trade goods, farm products,
          livestock and services were used as a means of exchange...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton sx={{ color: "#ff1744" }} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton sx={{ color: "#637bfe" }} aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          sx={{ color: "#8b8002" }}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ color: "#8b8002" }} paragraph>
            The Roman economy, from its founding and establishment as a
            Republic, through to the fifth and fourth centuries BC was a system
            of barter and community trade. All manner of trade goods, farm
            products, livestock and services were used as a means of exchange.
          </Typography>
          <Typography sx={{ color: "#8b8002" }} paragraph>
            As Rome grew, and the need for a system other than barter with it,
            lumps of bronze and other base metals began to be used in lieu of
            the exchange of one good for another. These lumps, called Aes Rude
            (raw bronze), could be used not only as coinage but also in large
            enough quantities, they could be melted down for the manufacturing
            of various metal tools and objects.
          </Typography>
          <Typography sx={{ color: "#8b8002" }} paragraph>
            As time passed and the circulation of Aes Rude became more common,
            the Romans and their neighbors began to rely on this simple system
            of economic transfer. The first true Roman coin, the Aes Signatum
            (signed bronze), replaced the Aes Rude sometime around the start of
            the 3rd century BC. These were more than lumps of metal, in that
            they were cast, had a regular and discernable rectangular shape and
            were stamped with raised designs. The Aes Signatum carried a
            particular value and were cast with marks indicating the government
            authority. Each was cast at a weight standard of 1600 grams so
            weighing by traders would not have to be done at each transaction.
            This rather hefty weight, however, along with the single
            denomination made making change a fragment cutting affair. This
            system obviously carried inherent problems and would very quickly be
            in need of a replacement.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default NewsCard;

/*import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import goldcoins from "../../../assets/images/monetagold.jpg";
import "./newsCard.css";

function NewsCard() {
  return (
    <div id="newsCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia>
            <img
              src={goldcoins}
              className="goldCoins"
              alt="Gold Coins"
              height={150}
              width={350}
            />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Gold Coins Of The Roman Era
            </Typography>
            <Typography variant="body1">Written by Ben Von Achen</Typography>
            <Typography variant="body2" color="text.secondary">
              Aureus, basic gold monetary unit of ancient Rome and the Roman
              world. It was first named nummus aureus (“gold money”), or
              denarius aureus, and was equal to 25 silver denarii; a denarius
              equaled 10 bronze asses.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default NewsCard;*/
