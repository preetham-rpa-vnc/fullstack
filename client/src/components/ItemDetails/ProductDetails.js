import React, { useEffect, useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: 'white',
      width: '100%',
    //   marginLeft:'3%',
    //   marginTop:'4%'
    },
  }));

export default function ProductDetails() {
    const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return(
    <div className={classes.root}>
    <AppBar position="static" color="default" className="product-sub-tab">
        <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
        >
        <Tab label="Product Description" {...a11yProps(0)} />
        <Tab label="Specifications" {...a11yProps(1)} />
        <Tab label="Company Details" {...a11yProps(2)} />
        </Tabs>
    </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction} style={{border:'1px solid #707070', marginTop:'2%', marginBottom:'2%'}}>
        <p className="product-tab-header-txt"><u>Product Description</u></p>
        <p className="product-details-txt2">John Deere 5D series tractors range from 36HP to 55 HP. The 5D series tractors are multi utility 
            in nature, efficient in both agricultural applications as well as heavy duty haulage. These 
            tractors offer higher comfort in terms of wider operator station, neutral safety switch ,
            and lower maintenance cost. John Deere 5D series includes PowerPro models and Value+++ models, 
            offering our customers a wide range of tractors to select from.</p>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction} style={{border:'1px solid #707070', marginTop:'2%', marginBottom:'2%'}}>
            <p className="product-tab-header-txt"><u>Specifications</u></p>
            <Grid container spacing={12}>            
                <Grid lg={6} xs={12} md={6}>
                    <p className="product-details-txt">Engine Power: 39HP</p>
                    <p className="product-details-txt">Brand: Massey Ferguson</p>
                    <p className="product-details-txt">model Name/Number: 1035 DI</p>
                    <p className="product-details-txt">Lifting Capacity: 2400 CC</p>
                    <p className="product-details-txt">Transmission Type: Sliding Mesh / Partial constant Mesh</p>
                    <p className="product-details-txt">Number of speed: 8 Forward + 2 Reverse</p>
                    <p className="product-details-txt">Brake Type: Dry disk brakes (Dura Brakes)</p>
                    <p className="product-details-txt">Tyre Dimension: 6.00 * 16 Front, 12.4*28 / 13.6 * 28 Rear</p>
                    <p className="product-details-txt">Clutch Type: Dual dry / Single</p>
                    <p className="product-details-txt">PTO Type: Live,six spinned shaft</p>
                    <p className="product-details-txt">Number od cylinders: 3</p>
                    <p className="product-details-txt">PTO speed: 540 RPM @ 1500 ERPM</p>
                </Grid>                          
                                      
                <Grid lg={6} xs={12} md={6}>
                    <p className="product-details-txt">Overall Length: 3340 mm </p>
                    <p className="product-details-txt">Overall Width: 1650 mm</p>
                    <p className="product-details-txt">Overall Height: 2210 mm</p>
                    <p className="product-details-txt">Fuel Injection Pump: Inline</p>
                    <p className="product-details-txt">Fuel Tank Capacity: 47 L</p>
                    <p className="product-details-txt">Ground Clearance: 345 mm</p>
                    <p className="product-details-txt">Total Weight: 1700 kg</p>
                    <p className="product-details-txt">Electricals: 12 V 75 Ah Battery,12 V 36 A Alternator</p>
                    <p className="product-details-txt">Make : SIMPSONS S337 T III A</p>
                    <p className="product-details-txt">Three Point Linkage And Controls: Draft,position and response control.</p>
                    <p className="product-details-txt">Wheel Base: 1785 mm</p>
                    <p className="product-details-txt">Forward Speed: 30.2 kmph @ rated RPM</p>
                    <p className="product-details-txt">Minimum Turning Circle Radius: 2850 mm (with brakes)</p>
                    <p className="product-details-txt">Steering: Manual steering / Power steering</p>
                </Grid>
            </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction} style={{border:'1px solid #707070', marginTop:'2%', marginBottom:'2%'}}>
        <p className="product-tab-header-txt"><u>Company Details</u></p>
          <p className="product-details-txt2">Company Details John deere – Tractors and Farm Equipment Limited, is an Indian tractor major 
            incorporated in 1960 at Chennai, with an annual turnover of INR 93 billion (2014-15). 
            The third-largest tractor manufacturer in the world and the second largest in India by volumes, 
            John deere wields about 25% market share of the Indian tractor industry with a sale of over 
            150,000 tractors (domestic and international) annually. john deere's partnership with AGCO 
            Corporation and the Massey Ferguson brand for over 55 years is a stellar example of its 
            commitment to building long-term relationships with its stakeholders, through fair and ethical 
            business practices. john deere is also a significant shareholder in AGCO Corporation, 
            USA – a US $8 billion tractor and agricultural equipment manufacturer. john deere has earned 
            the trust of customers through its range of products that are widely acclaimed for quality and 
            low cost of operation. A strong distribution network of over 1000 dealers effectively backs 
            john deere's three iconic tractor brands – Massey Ferguson, TAFE, and Eicher. john deere exports 
            tractors, both in partnership with AGCO and independently, 
            powering farms in over 100 countries which include developed countries in Europe and the Americas.
          </p>
        </TabPanel>
    </div>
  )
}