import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "Prime",
    imgPath:
      "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
  },
  {
    label: "Clothes",
    imgPath:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/GWherotator/GW_pc/8._CB414093065_.jpg",
  },
  {
    label: "Prime",
    imgPath:
      "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg",
  },
  {
    label: "Electronics",
    imgPath:
      "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
  },
  {
    label: "Christmas",
    imgPath:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Christmas20/GW/new/Christmas-GW-Hero-PC1x._CB413564947_.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    display: "block",
    overflow: "hidden",
    width: "100%",
  },
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {tutorialSteps.map((step, index) => (
        <div key={step.label}>
          {Math.abs(activeStep - index) <= 2 ? (
            <img className="home__image" src={step.imgPath} alt={step.label} />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  );
}

export default Carousel;
