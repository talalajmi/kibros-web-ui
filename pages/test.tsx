import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Tabs,
  Tab,
  Typography,
  Box,
} from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SecurityIcon from "@material-ui/icons/Security";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
});

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function TabsCard() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Tabs value={value} onChange={handleChange} aria-label="tabs">
          <Tab label="Account" icon={<AccountBoxIcon />} {...a11yProps(0)} />
          <Tab label="Security" icon={<SecurityIcon />} {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Account tab content goes here
        </TabPanel>
        <TabPanel value={value} index={1}>
          Security tab content goes here
        </TabPanel>
      </CardContent>
    </Card>
  );
}
