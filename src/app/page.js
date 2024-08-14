"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Box from "@mui/material/Box";
import {
  Stack,
  Tabs,
  Paper,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  IconButton,
  SkipPreviousIcon,
  PlayArrowIcon,
  FormControlLabel,
  Switch,
  FormGroup,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material/";
import Tab from "@mui/material/Tab";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const theme = useTheme();
  const [navBarVlaue, setNavBarValue] = useState("bouquets");
  const [value, setValue] = useState(0);
  const [flowerType, setFlowerType] = useState(["Rosas", "Girasoles", "Lilis"]);
  const [bouquets, bouquetsSet] = useState([
    {
      title: "Ramo de 1,000 rosas ",
      image: "arrangements/arrangements_1.jpeg",
      description: "Ramo con rosas de 1,2 o 3 colores, con liston decorador",
      price: "$2,000.00",
    },
    {
      title: "Ramo de 1,000 rosas ",
      image: "arrangements/arrangements_2.jpeg",
      description: "Ramo con rosas de 1,2 o 3 colores, con liston decorador",
      price: "$2,000.00",
    },
    {
      title: "Ramo de 1,000 rosas ",
      image: "arrangements/arrangements_3.jpeg",
      description: "Ramo con rosas de 1,2 o 3 colores, con liston decorador",
      price: "$2,000.00",
    },
    {
      title: "Ramo de 1,000 rosas ",
      image: "arrangements/arrangements_4.jpeg",
      description: "Ramo con rosas de 1,2 o 3 colores, con liston decorador",
      price: "$2,000.00",
    },
  ]);
  const handleChange = (event, newValue) => {
    setNavBarValue(newValue);
  };
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main className={styles.main}>
      <Stack>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Card sx={{ margin: { xs: 1, sm: 4 } }}>
              <CardMedia
                sx={{
                  height: { xs: 250, sm: 400 },
                  margin: { xs: 1, sm: 1 },
                }}
                image="arrangements/arrangements_4.jpeg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  fasf
                </Typography>
                <Typography variant="2" color="text.secondary">
                  fasfasf
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={handleOpen}>
                  Pedir por arreglo
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Modal>
        <Grid container>
          <Grid
            container
            xs={12}
            sm={8}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              sx={{
                maxWidth: { xs: 190, md: 200 },
              }}
              alt="Logo senflora."
              src="senfloraMain.png"
            />
          </Grid>
          <Grid
            container
            xs={12}
            sm={4}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              sx={{
                maxWidth: { xs: 250, sm: 300 },
                marginTop: { xs: 2, sm: 0 },
              }}
              alt="Senflora eslogan."
              src="textMain.png"
            />
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            container
            sx={{
              marginTop: 3,
            }}
            xs={12}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={navBarVlaue}
                onChange={handleChange}
                aria-label="Nav bar"
              >
                <Tab label="Ramos" value="bouquets" />
                <Tab label="Arreglos" value="arrangements" />
                <Tab label="Eventos" value="events" />
              </Tabs>
            </Box>
          </Grid>
        </Grid>
        {navBarVlaue == "bouquets" && (
          <Stack>
            <Grid
              sx={{
                marginLeft: { xs: 2, sm: 4 },
                marginRight: { xs: 2, sm: 4 },
                marginTop: { xs: 2, sm: 4 },
              }}
            >
              <Box sx={{ width: "100%", backgroundColor: "white" }}>
                <Container>
                  <FormGroup
                    sx={{
                      position: "flex",
                      flexDirection: "row",
                      justifyContent: "left",
                      alignItems: "left",
                    }}
                  >
                    {flowerType.map((flower, index) => (
                      <FormControlLabel
                        key={index}
                        control={<Switch defaultChecked />}
                        label={flower}
                      />
                    ))}
                  </FormGroup>
                </Container>
              </Box>
            </Grid>
            <Box sx={{ flexGrow: 1, p: 2 }}>
              <Grid container>
                {bouquets.map((bouquet, index) => (
                  <Grid key={index} {...colWidth} minHeight={160}>
                    <Card sx={{ margin: { xs: 1, sm: 4 } }}>
                      <CardMedia
                        sx={{
                          height: { xs: 250, sm: 400 },
                          margin: { xs: 1, sm: 1 },
                        }}
                        image={bouquet.image}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {bouquet.title}
                        </Typography>
                        <Typography variant="2" color="text.secondary">
                          {bouquet.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" onClick={handleOpen}>
                          Mas informacion
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        )}
        {/* {navBarVlaue == "bouquets" && (
          <Grid container>
            {bouquets.map((bouquet, index) => (
              <Card sx={{ display: "flex", margin: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150, margin: { xs: 1, sm: 1 } }}
                  image={bouquet.image}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h5">
                      Live From Space
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Mac Miller
                    </Typography>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  >
                    <IconButton aria-label="previous"></IconButton>
                    <IconButton aria-label="play/pause"></IconButton>
                    <IconButton aria-label="next"></IconButton>
                  </Box>
                </Box>
              </Card>
            ))}
          </Grid>
        )} */}
        {/* {navBarVlaue == "bouquets" && (
          <Grid direction="row" spacing={2}>
            {bouquets.map((bouquet, index) => (
              <Grid item key={index} xs={6}>
                <Card
                  sx={{
                    maxWidth: 100,
                  }}
                >
                  <CardMedia
                    sx={{
                      height: { xs: 150, sm: 400 },
                    }}
                    image={bouquet.image}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )} */}

        <Item>{navBarVlaue}</Item>
      </Stack>
    </main>
  );
}
