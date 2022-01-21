import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../assets/fonts/fonts.css";
import "./coins.css";
import Grid from "@mui/material/Grid";

function Coins() {
  return (
    <div id="coins">
      <Grid container spacing={3}>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <h2>Coins</h2>
        </Grid>
        <Grid item xs={1} sm={2} />

        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <Accordion sx={{ bgcolor: "#f7f0a3" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4" sx={{ color: "#8b8002" }}>
                United States Coins
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#8b8002" }}>
                To look at the vast selection of United States Coins, here is
                the link to{" "}
                <a href="https://www.pcgs.com/coinfacts">US Coins</a>.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={1} sm={2} />

        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <Accordion sx={{ bgcolor: "#f7f0a3" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h4" sx={{ color: "#8b8002" }}>
                World Coins
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#8b8002" }}>
                To look at World Coins, here is the list of the most popular
                ones
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/united-kingdom-1.html">
                      British
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/canada_section-1.html">
                      Canadian
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/china-1.html">
                      Chinese
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/france_section-1.html">
                      French
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/germany-1.html">
                      German
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/russia-1.html">
                      Russian
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/index.php?ct=coin">
                      Other
                    </a>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={1} sm={2} />

        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <Accordion sx={{ bgcolor: "#f7f0a3" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel2a-header"
            >
              <Typography variant="h4" sx={{ color: "#8b8002" }}>
                Ancient Coins
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#8b8002" }}>
                To look at Ancient Coins, here is the list of the most popular
                ones
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/celtic-britain-1.html">
                      Celtic Coins
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/egypt-ancient-1.html">
                      Egyptian Coins
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/grece_antique-1.html">
                      Greek Coins
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/rome_section-1.html">
                      Roman Coins
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/index.php?ct=coin">
                      Other
                    </a>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={1} sm={2} />

        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <Accordion sx={{ bgcolor: "#f7f0a3" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel2a-header"
            >
              <Typography variant="h4" sx={{ color: "#8b8002" }}>
                Tokens & Medals
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#8b8002" }}>
                To look at Medals and Tokens here are the links for the United
                States and World
                <ul>
                  <li>
                    <a href="https://www.numiscorner.com/collections/collection-of-tokens-and-medals/cat-1-united-states-of-america#M">
                      Medals and Tokens of The United States
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://www.numiscorner.com/collections/collection-of-tokens-and-medals">
                      Medals and Tokens of The World
                    </a>
                  </li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
    </div>
  );
}

export default Coins;
