import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioGroupMessage() {
	return (
		<FormControl>
			<FormLabel id="demo-radio-buttons-group-label">Generos</FormLabel>
			<RadioGroup
				aria-labelledby="demo-radio-buttons-group-label"
				defaultValue="invitacion"
				name="radio-buttons-group"
			>
				<FormControlLabel value="invitacion" control={<Radio />} label="Invitación" />
				<FormControlLabel value="recordatorio" control={<Radio />} label="Recordatorio de Proceso" />
				<FormControlLabel value="personalizado" control={<Radio />} label="Personalizado" />
			</RadioGroup>
		</FormControl>
	);
}