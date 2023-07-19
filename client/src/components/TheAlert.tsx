import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function TheAlert({
  message,
  alertType,
}: {
  message: string;
  alertType: 'success' | 'error';
}) {
  return (
    <Stack sx={{ width: '40%', margin: '0 22px 0 auto' }} spacing={2}>
      <Alert severity={alertType}>{message}</Alert>
    </Stack>
  );
}
