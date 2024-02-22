import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  requirePropFactory,
} from "@mui/material";

//imported cars icons
import AUDI from "../../assets/carimages/AUDI.jpeg";

import modelsData from "../../pages/services-data/modelsData.json";
import axios from "axios";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function DialogBox({ setUserSelectedData }) {
  const carCompanies = [
    "AUDI",
    "BENZ",
    "BMW",
    "CHEVROLET",
    "DAEWOO",
    "DASTUN",
    "FERARI",
    "FIAT",
    "FORCE-MOTORS",
    "FORD",
    "HONDA",
    "HYUNDAI",
    "ISUZU",
    "JAGUAR",
    "JEEP",
    "KIA",
    "LANA-ROVER",
    "MAHINDRA",
    "MG",
    "NISSAN",
    "RENAULT",
    "SKODDA",
    "SSANGYONG",
    "SUZUKI",
    "TATA",
    "TOYOTA",
    "VOLKSWAGEN",
    "VOLVO",
  ];
  const initialData = {
    car: {
      isOpen: true,
      name: "",
    },
    model: {
      isOpen: false,
      name: "",
    },
    fuel: {
      isOpen: false,
      name: "",
    },
  };
  const [CompanyImages, setCompanyImages] = React.useState([]);
  const [carModels, setCarModels] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedData, setSelectedData] = React.useState(initialData);
  const [searchedCarModel, setSearchedCarModel] = React.useState([]);
  const handleClickOpen = () => {
    setOpen(true);
    setSelectedData(initialData);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onClickFunction = (data) => {
    setSelectedData((oldData) => ({
      car: {
        ...oldData.car,
      },
      model: {
        ...oldData.model,
      },
      fuel: {
        ...oldData.fuel,
      },
      ...data,
    }));
  };
  const handleSelectedCarModals = async (data) => {
    const models = await axios.get(
      `https://carbay.onrender.com/api/services/get-images/${data.title}`
    );

    setCarModels(models.data.data);
    setSearchedCarModel(models.data.data);
    onClickFunction({
      car: {
        isOpen: false,
        name: data.title,
      },
      model: {
        isOpen: true,
        name: "",
      },
    });
  };
  const handleSearchedCarModel = (model) => {
    const searchedCarModel = model
      ? carModels.filter((data) => data.model.toLowerCase().includes(model))
      : carModels;
    setSearchedCarModel(searchedCarModel);
  };
  const fuelOptions = [
    {
      image: "https://www.automovill.com/assets/fuel/PETROL.svg",
      name: "PETROL",
    },
    {
      image: "	https://www.automovill.com/assets/fuel/DIESEL.svg",
      name: "DIESEL",
    },
    {
      image: "https://www.automovill.com/assets/fuel/CNG.svg",
      name: "EV",
    },
  ];

  const importImage = async () => {
    const arrayOfPaths = [];
    try {
      if (arrayOfPaths.length < 28) {
        for (const name of carCompanies) {
          const module = await import(`../../assets/carimages/${name}.jpeg`);
          arrayOfPaths.push({
            title: name,
            path: module.default,
          });
        }
        setCompanyImages(arrayOfPaths);
      }
    } catch (error) {
      console.error(`Error importing image :`, error);
    }
  };

  if (open && CompanyImages.length < 28) {
    importImage();
  }

  return (
    <React.Fragment>
      <Button
        style={{
          marginTop: "1rem",
        }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Select Car
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Select Car
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                {selectedData.car.isOpen &&
                  CompanyImages.map((data, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                      <img
                        onClick={() => {
                          handleSelectedCarModals(data);
                        }}
                        src={data.path}
                        alt={`Image ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Grid>
                  ))}
                {selectedData.model.isOpen && (
                  <>
                    <TextField
                      id="outlined-basic"
                      fullWidth
                      label="search for model"
                      variant="outlined"
                      onChange={(e) => {
                        handleSearchedCarModel(e.target.value.toLowerCase());
                      }}
                      margin="dense"
                    />
                    {searchedCarModel.map((data, index) => (
                      <Grid
                        item
                        xs={6}
                        sm={4}
                        md={3}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                        key={index}
                      >
                        <img
                          onClick={() => {
                            onClickFunction({
                              model: {
                                isOpen: false,
                                name: data.model,
                              },
                              fuel: {
                                isOpen: true,
                                name: "",
                              },
                            });
                          }}
                          src={data.img}
                          alt={`Image ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />

                        <Typography variant="h6">{data.model}</Typography>
                      </Grid>
                    ))}
                  </>
                )}
                {selectedData.fuel.isOpen &&
                  fuelOptions.map((fuel, index) => (
                    <Box key={index} className="text-center">
                      <img
                        onClick={() => {
                          handleClose();
                          setUserSelectedData({
                            car: selectedData.car.name,
                            model: selectedData.model.name,
                            fuel: fuel.name,
                          });
                        }}
                        src={fuel.image}
                        width="80px"
                        height="80px"
                        alt={fuel.name}
                      />
                    </Box>
                  ))}
              </Grid>
            </CardContent>
          </Card>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
