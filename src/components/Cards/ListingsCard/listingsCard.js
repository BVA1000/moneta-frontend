import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { amber } from '@mui/material/colors';
//import FavoriteIcon from '@mui/icons-material/Favorite';
//import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import seatedliberty from '../../../assets/images/seatedlibdollar.png';
import './listingsCard.css';

//import { useSelector } from "react-redux";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ListingsCard() {
  //const post = useSelector((state) => state.post.value);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 550, bgcolor: '#f7f0a3' }}>
      <CardHeader
        sx={{ color: '#8b8002' }}
        avatar={
          <Avatar sx={{ bgcolor: amber[500] }} aria-label="coins">
            BVA
          </Avatar>
        }
        action={
          <IconButton sx={{ color: '#8b8002' }} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Beautiful Seated Liberty Dollar"
        subheader="1866 Motto PCGS MS67"
      />
      <CardMedia>
        <img
          src={seatedliberty}
          className="seatedLib"
          alt="Seated Liberty Dollar"
          height={300}
          width={550}
        />
      </CardMedia>
      <CardContent>
        <Typography
          sx={{ color: '#8b8002' }}
          variant="body2"
          color="text.secondary"
        >
          Pedigreed to an original mint set that sold at Christie’s Auction in
          May 1989 from the Texas Collection of United States Coins for over
          $100,000 RAW. It then sold at RARCOA auction the following year in
          1990 again by no accident for $100,000 described as a “flawless,
          reflective with satin smooth finish, as creamy white obverse and
          iridescent blue-green reverse.” It was described as the finest graded
          30 years ago and is still so today. Since 1990 this finest seated
          dollar has sold in 2005 for over $300,000 via private treaty...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/*<IconButton sx={{ color: '#ff1744' }} aria-label="add to favorites">
          <FavoriteIcon />
      </IconButton>*/}
        {/*<IconButton sx={{ color: '#637bfe' }} aria-label="share">
          <ShareIcon />
    </IconButton>*/}
        <Typography
          sx={{ color: '#8b8002' }}
          variant="h5"
          color="text.secondary"
        >
          $550,000.00
        </Typography>
        <ExpandMore
          sx={{ color: '#8b8002' }}
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
          <Typography sx={{ color: '#8b8002' }} paragraph>
            At MS67 in the entire Liberty Seated Dollar series spanning from
            1840 to 1873, there have just been 4 known and graded at the
            unattainable MS67 level with none grading higher in all dates both
            type 1 and type 2. In type 1 - a 1849 and a 1863, whilst in type 2 -
            This coin and another 1866 $1 motto. Of the 4 MS67, 3 belong in the
            Hansen Collection. There has never been a type 2 sale of a ms67 and
            ms67 have traded north of $300,000 privately. The 1866 $1 motto as a
            date is significantly important as the first issue for the type as
            the start of the transition of the no motto to with motto series.
            This is the finest seated dollar of all dates and, one of two finest
            type 2 and the only ms67 seated available as a type.
          </Typography>
          <Typography sx={{ color: '#8b8002' }} paragraph>
            It has long been known that it is actually easier to find mint state
            type 1 $1 rather than type 2. Thus the two ms67 type 1 have a price
            guide of $200,000 having traded several times in the past decades
            privately, whilst type 1 has no price guide and no comp as it is a
            much tougher coin. A total of 12,216 type 1 mint state are known
            compared to 5,593 type 2 mint state ( pcgs population report)
            Looking at comps for the key date 1866 $1 motto, there has never
            been a MS67 sale. An MS65 PCGS CAC example sold for $79,313 in 2014,
            whilst the POGUE MS66+ PCGS CAC sold for a $135,000 during the
            pinnacle of the virus and also considering the coin had muted luster
            not to mention the eye appeal was not all there. Had pcgscoinfacts
            reflected the prices into the price guide that 66+ should be
            $150,000. This coin should be worth multiples at least 2.5 times the
            price guide of type 1 ms67 so $500,000.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ListingsCard;
