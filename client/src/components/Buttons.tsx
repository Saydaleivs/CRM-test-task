import Button from '@mui/material/Button';

export default function Buttons({
  createJob,
  saveInfo,
  isLoading,
}: {
  createJob: () => void;
  saveInfo: () => void;
  isLoading: boolean;
}) {
  return (
    <div>
      <Button variant='contained' disabled={isLoading} onClick={createJob}>
        Create job
      </Button>
      <Button variant='contained' onClick={saveInfo}>
        Save info
      </Button>
    </div>
  );
}
