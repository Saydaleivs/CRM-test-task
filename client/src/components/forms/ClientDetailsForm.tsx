import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import { JobDataState } from '../../Interfaces';

export default function ClientDetailsForm({
  jobData,
  handleChange,
}: JobDataState) {
  return (
    <>
      <Box
        component='form'
        sx={{
          '& > :not(style)': {
            m: 1,
            width: 330,
            height: 220,
            backgroundColor: '#fff',
            boxShadow: '2px 2px 6px 0px rgba(34, 60, 80, 0.2)',
            padding: '30px',
            borderRadius: 1,
          },
        }}
        noValidate
        autoComplete='off'
      >
        <div className='container'>
          <Typography variant='h6'>Client details</Typography>
          <TextField
            id='title'
            value={jobData.title}
            onChange={(e: React.SyntheticEvent) =>
              handleChange({
                id: (e.target as HTMLInputElement).id,
                value: (e.target as HTMLInputElement).value,
              })
            }
            label='Title'
            required
            fullWidth
            variant='standard'
          />
          <div className='flex'>
            <TextField
              id='firstName'
              value={jobData.firstName}
              onChange={(e: React.SyntheticEvent) =>
                handleChange({
                  id: (e.target as HTMLInputElement).id,
                  value: (e.target as HTMLInputElement).value,
                })
              }
              label='First name'
              variant='standard'
            />
            <TextField
              id='lastName'
              value={jobData.lastName}
              onChange={(e: React.SyntheticEvent) =>
                handleChange({
                  id: (e.target as HTMLInputElement).id,
                  value: (e.target as HTMLInputElement).value,
                })
              }
              label='Last name'
              variant='standard'
            />
          </div>
          <TextField
            id='phone'
            value={jobData.phone}
            onChange={(e: React.SyntheticEvent) =>
              handleChange({
                id: (e.target as HTMLInputElement).id,
                value: (e.target as HTMLInputElement).value,
              })
            }
            label='Phone'
            fullWidth
            variant='standard'
          />
          <TextField
            id='email'
            value={jobData.email}
            onChange={(e: React.SyntheticEvent) =>
              handleChange({
                id: (e.target as HTMLInputElement).id,
                value: (e.target as HTMLInputElement).value,
              })
            }
            label='Email'
            fullWidth
            variant='standard'
          />
        </div>
      </Box>
    </>
  );
}
