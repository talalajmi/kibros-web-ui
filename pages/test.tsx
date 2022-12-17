import React, { useState } from "react";
import {
  Modal,
  IconButton,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Grid } from "@mui/material";
import { X } from "../components/icons";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MyModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Button onClick={handleModalOpen}>Open Modal</Button>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        className={classes.modal}
      >
        <Grid container direction="column" rowSpacing={2}>
          <Grid item>
            <X className="fill-white" size={10} />
          </Grid>
          <Typography variant="h5">Create Catgeory</Typography>
          <Grid>
            <Button variant="contained" color="secondary" type="submit">
              Submit
            </Button>
            <Button type="reset" onClick={handleModalClose}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default MyModal;
