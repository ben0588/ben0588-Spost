import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="error" onClick={handleClickOpen}>
        刪除
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"要刪除此課程嗎?"}
        </DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button variant="outlined" color="success" onClick={handleClose}>取消</Button>
          <Button variant="outlined" color="error" onClick={handleClose} autoFocus>
            確定
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
