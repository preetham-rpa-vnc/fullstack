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

export default function CompanyProfile() {
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
        <Tab label="Company Overview" {...a11yProps(0)} />
        </Tabs>
    </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction} style={{border:'1px solid #707070', marginTop:'2%', marginBottom:'2%'}}>        
        <p className="product-details-txt2">John Deere 5D series tractors range from 36HP to 55 HP. The 5D series tractors are multi utility 
            in nature, efficient in both agricultural applications as well as heavy duty haulage. These 
            tractors offer higher comfort in terms of wider operator station, neutral safety switch ,
            and lower maintenance cost. John Deere 5D series includes PowerPro models and Value+++ models, 
            offering our customers a wide range of tractors to select from.</p>
        </TabPanel>
        
    </div>
  )
}