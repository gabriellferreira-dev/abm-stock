import { Fade, Modal, Typography, Box, Backdrop } from '@mui/material';
import StockForm from './StockForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  maxHeight: 300,
  height: '100%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  fontSize: '1.6rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  padding: '5px',
};

function ModalRegister({ handleModal, open }) {
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id='transition-modal-title' variant='h4' component='h2'>
            Register new stock
          </Typography>
          <StockForm handleModal={handleModal} />
        </Box>
      </Fade>
    </Modal>
  );
}

export default ModalRegister;
