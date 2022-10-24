import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const QASection = () => {
  return (
    <Box id='questions'>
      <Typography
        variant="h1"
        textAlign="center"
        color="primary.main"
        sx={{ mt: { md: "200px", xs: "67px" }, mb: { md: "54px", xs: "30px" } }}
      >
        Frequently Asked Questions
      </Typography>
      <Box
        sx={{
          maxWidth: "1400px",
          margin: "0 auto",
          background: " #1a1a1a",
          borderRadius: "36px",
          padding: { md: "7.5rem 0", xs: "40px 30px 0 30px" },
        }}
      >
        <Typography
          sx={{
            mb: "72px",
            color: "secondary.main",
            fontSize: { md: "48px", xs: "24px" },
            paddingLeft: { md: "90px", xs: 0 },
          }}
        >
          How do I acquire a birb NFT?
        </Typography>
        <Box mx={{ md: "56px" }}>
          <Typography sx={{color: "secondary.main",
                           fontSize: { md: "48px", xs: "24px" },
                            paddingLeft: { md: "90px", xs: 0 },}}>
                        Instructions will be provided here when the mint date is announced on Twitter.
          </Typography>
          {/* <HorizontalNonLinearStepper /> */}
        </Box>
      </Box>
      <CustomizedAccordions />
    </Box>
  );
};

export default QASection;

// function HorizontalNonLinearStepper() {
//   return (
//     <div className="how-buy__content">
//       <div className="how-buy__line">
//         <div className="how-buy__line-item"><Typography variant="h4">1</Typography></div>
//         <div className="how-buy__line-item"><Typography variant="h4">2</Typography></div>
//         <div className="how-buy__line-item"><Typography variant="h4">3</Typography></div>
//         <div className="how-buy__line-item"><Typography variant="h4">4</Typography></div>
//       </div>
//       <div className="how-buy__body">
//         <div className="how-buy__item _1">
//           <Typography variant="h4">
//            Click on the button in the top right corner to connect your wallet.
//           </Typography></div>
//         <div className="how-buy__item _2">
//           <Typography variant="h4">
//             Click on the “Mint” button on the homepage and select the amount of birbs you want to buy
//           </Typography>
//         </div>
//         <div className="how-buy__item _3"> 
//           <Typography variant="h4">
//           Accept the transaction in your wallet and wait for the confirmation
//           </Typography>
//         </div>
//         <div className="how-buy__item _4">
//           <Typography variant="h4">
//           Enjoy your birb (or many birbs!) and share it with your friends!
//           </Typography>
//         </div>
//       </div>
//     </div>
//   );
// }

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
   
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const QAList = [
  {
    label: "HOW MANY BIRBS ARE THERE GOING TO BE?",
    value:
      " 10.000 RANDOMLY GENERATED BIRBS WITH UNIQUE TRAIT COMBINATIONS",
  },
  {
    label: "WHAT IS THE MINT DATE?",
    value:
      " TBA",
  },
  {
    label: "WHAT IS THE MINT PRICE?",
    value:
      " TBA",
  },
  {
    label: "WILL PEOPLE BE ABLE TO SEE MY BIRB IN GAME?",
    value:
      " Holders will play «THE LOST BIRB» with their own NFT, while non-holders will use the default, colourless birb. Birb holders will be granted access to unlimited bids for multiplayer mode alongside with other perks.",
  },
];

export function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ maxWidth: "1232px", margin: "0 auto", px: "20px" }}>
      {QAList.map((QA, index) => (
        <Accordion expanded={expanded === index} onChange={handleChange(index)}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="h2">
              {QA.label}
            </Typography>
          </AccordionSummary>
          <AccordionDetails> 
            <Typography variant="h3">
              {QA.value}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
