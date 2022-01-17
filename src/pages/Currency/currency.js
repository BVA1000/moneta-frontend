import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../assets/fonts/fonts.css";
import "./currency.css";
//import { amber } from "@mui/material/colors";
import Grid from "@mui/material/Grid";

function Currency() {
  return (
    <div id="currency">
      <Grid container spacing={3}>
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <h2>Currency</h2>
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
                United States Currency
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#8b8002" }}>
                To look at the vast selection of United States Currency, here is
                the link to{" "}
                <a href="https://en.numista.com/catalogue/united-states-banknotes-1.html">
                  US Currency
                </a>
                .
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
                World Currency
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#8b8002" }}>
                To look at World Currency, here is the list of the most popular
                ones
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/united-kingdom-banknotes-1.html">
                      British
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/canada_section-banknotes-1.html">
                      Canadian
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/china-banknotes-1.html">
                      Chinese
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/france_section-banknotes-1.html">
                      French
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/germany-banknotes-1.html">
                      German
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/russia-banknotes-1.html">
                      Russian
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://en.numista.com/catalogue/index.php?ct=banknote">
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
              id="panel3a-header"
            >
              <Typography variant="h4" sx={{ color: "#8b8002" }}>
                Other Certificates
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#8b8002" }}>
                <a href="https://www.ncpedia.org/anchor/paper-money-civil-war">
                  Us Civil War Confederate Notes
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>

        <Grid item xs={1} sm={2} />
      </Grid>
    </div>
  );
}

export default Currency;
