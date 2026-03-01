import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function FormPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Contact Form
      </Typography>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Stack spacing={2}>
            <TextField label="Name" fullWidth />
            <TextField label="Email" type="email" fullWidth />
            <TextField label="Phone" type="tel" fullWidth />
            <TextField label="Company" fullWidth />
            <TextField label="Message" multiline rows={4} fullWidth />
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Button variant="outlined">Cancel</Button>
              <Button variant="contained">Submit</Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
