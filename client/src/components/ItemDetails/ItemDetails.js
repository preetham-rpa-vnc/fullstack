import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/PhoneInTalk';
import '../../Styles/ItemDetails.css';
import redTreactor from '../../Assets/redTractor.jpg';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProductDetails from './ProductDetail';
import CompanyProfile from './CompanyProfile';

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
      width: '80%',
      marginLeft:'6%',
      marginTop:'4%',
      padding:'0px'
    },
  }));

export default function ItemDetails() {
    const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
    return(
        <div>
            <Grid container spacing={12}>
                <Grid item lg={5} xs={12} md={5}>
                    <img src={redTreactor} className="item-details-img"/>
                    <div style={{display:'flex'}}>
                        <img src={redTreactor} style={{marginLeft:'15%'}} className="item-details-sub-img"/>
                        <img src={redTreactor} className="item-details-sub-img"/>
                        <img src={redTreactor} className="item-details-sub-img"/>
                        <img src={redTreactor} className="item-details-sub-img"/>
                    </div>
                    <div className="item-icons-main-div">
                        <span className="item-img-txt">Industry Leader</span>
                        <VerifiedUserIcon className="icon-style"/>
                        <span className="item-img-txt">Trustseal Verified</span>
                        <OndemandVideoIcon className="icon-style2" style={{marginLeft:'14px', }}/>
                        <span className="item-img-txt">Preview Video</span>
                    </div>
                </Grid> 
                <Grid item lg={7} xs={12} md={7}>
                    <p className="item-header">John Deere 275 TU 5D SP Plus Tractor</p>
                    <p className="item-text">Brand: Mahindra</p>
                    <p className="item-text">Number od Cylinders: 3 Cylinders</p>
                    <p className="item-text">Lifting Capacity:1500 Kg</p>
                    <p className="item-text">Model Name/Number:275 TU DISP Plus</p>
                    <p className="item-text">Number of Gears:8F + 2R</p>
                    <p className="item-text">Transmission Type:Partial Constant Mesh</p>
                    <div style={{marginTop:'4%', marginBottom:'5%'}}>
                        <Button className="item-btn" variant="contained"><PhoneIcon/>Contact Supplier</Button>
                        <Button className="item-btn" style={{marginLeft:'15px'}} variant="contained">Request Quote</Button>
                    </div>
                </Grid>
            </Grid>            
            <div className={classes.root}>
            <AppBar position="static" color="default" className="product-tab">
                <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
                >
                <Tab label="Product Details" {...a11yProps(0)} />
                <Tab label="Company Profile" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction} style={{ marginTop:'2%'}}>
                    <ProductDetails/>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction} style={{marginTop:'2%'}}>
                    <CompanyProfile/>
                </TabPanel>                
            </div>
        </div>
    )
}