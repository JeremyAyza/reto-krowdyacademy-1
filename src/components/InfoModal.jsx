import React from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RadioGroupMessage from './RadioGroupMessage';
import { Stack } from '@mui/material';
import CheckBoxChannel from './CheckBoxChannels';
import FormMessage from './FormMessage';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	color:'black',
	boxShadow: 24,
	p: 4,
};



export default function Info() {
	const [open, setOpen] = React.useState(true);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button onClick={handleOpen}>Open modal</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{/*<Typography id="modal-modal-title" variant="h6" component="h2">
						Text in a modal
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>*/}
					<hr />
					<RadioGroupMessage/>
					<hr />
					<CheckBoxChannel />
					<hr />
					<FormMessage type='email'/>
					<hr />


					<div>
						<Stack direction="row" spacing={2}>
							<Button variant="outlined" >
								Atrás
							</Button>
							<Button variant="contained" >
								Siguiente
							</Button>
						</Stack>
					</div>
					
				</Box>
			</Modal>
		</div>
	);
}
