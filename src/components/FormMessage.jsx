import { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

export default function FormMessage({type}) {
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// handle form submission
	};

	

	return (
		<form onSubmit={handleSubmit}>
			<p>Mensajes</p>
			<Grid container spacing={2}>
				{type==="email" &&
					<Grid item xs={12}>
						<TextField
							required
							id="subject"
							name="subject"
							label="Asunto"
							fullWidth
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
						/>
					</Grid>
				}
				<Grid item xs={12}>
					<TextField
						required
						id="message"
						name="message"
						label="Mensaje"
						fullWidth
						multiline
						rows={4}
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button type="submit" variant="contained" color="primary">
						Enviar
					</Button>
				</Grid>
			</Grid>
		</form>
	);
}
