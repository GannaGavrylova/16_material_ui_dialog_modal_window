import { useState } from "react";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography align="left" variant="h6">
            My Material UI App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ padding: "30px" }}>
        <Typography variant="h5" gutterBottom>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button color="primary" variant="contained" onClick={handleClickOpen}>
          Открыть диалоговое окно
        </Button>
      </Container>

      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Использовать Material UI?
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText>
            Это простое React приложение с использованием Material UI. Вы можете
            настроить его по своему усмотрению.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Отмена
          </Button>
          <Button autoFocus onClick={handleClose}>
            Согласие
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
