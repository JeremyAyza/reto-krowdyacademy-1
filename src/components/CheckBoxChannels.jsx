import { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormLabel } from '@mui/material';

export default function CheckBoxChannel() {
	const [channels, setChannels] = useState({
		email: true,
		text: false,
		whatsapp: false,
	});

	const handleChange = (event) => {
		setChannels({ ...channels, [event.target.name]: event.target.checked });
		console.log(channels);

	};

	return (
		<FormGroup>
			<FormLabel id="demo-radio-buttons-group-label">Canales</FormLabel>

			<FormControlLabel
				control={<Checkbox checked={channels.email} onChange={handleChange} name="email" />}
				label="Correo electrónico"
			/>
			<FormControlLabel
				control={<Checkbox checked={channels.text} onChange={handleChange} name="text" />}
				label="Mensaje de texto"
			/>
			<FormControlLabel
				control={<Checkbox checked={channels.whatsapp} onChange={handleChange} name="whatsapp" />}
				label="Whatsapp"
			/>
		</FormGroup>
	);
}
