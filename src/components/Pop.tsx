import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Pop:React.FC<any> = ({open,close,data}) => {
  return (
    <Modal
    open={open}
    onClose={close}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
       Weather Details
      </Typography>
     
    <h2>Temperature:<span>{data.temperature}</span></h2>
    <div
        className="flag"
          style={{ backgroundImage: `url("${data.weather_icons ? data.weather_icons[0]:''}")` }}
        ></div>
                <h2>Wind Speed:<span>{data.wind_speed}</span></h2>

    </Box>
  </Modal>
  )
}

export default Pop