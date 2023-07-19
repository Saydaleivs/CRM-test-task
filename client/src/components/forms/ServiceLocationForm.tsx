import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { JobDataState } from '../../Interfaces';

export default function ServiceLocationForm({
  jobData,
  handleChange,
}: JobDataState) {
  return (
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
        <Typography variant='h6'>Service location</Typography>
        <TextField
          value={jobData.address}
          onChange={(e: React.SyntheticEvent) =>
            handleChange({
              id: (e.target as HTMLInputElement).id,
              value: (e.target as HTMLInputElement).value,
            })
          }
          id='address'
          label='Address'
          fullWidth
          variant='standard'
        />
        <TextField
          value={jobData.city}
          onChange={(e: React.SyntheticEvent) =>
            handleChange({
              id: (e.target as HTMLInputElement).id,
              value: (e.target as HTMLInputElement).value,
            })
          }
          id='city'
          label='City'
          fullWidth
          variant='standard'
        />
        <TextField
          value={jobData.state}
          onChange={(e: React.SyntheticEvent) =>
            handleChange({
              id: (e.target as HTMLInputElement).id,
              value: (e.target as HTMLInputElement).value,
            })
          }
          id='state'
          label='State'
          fullWidth
          variant='standard'
        />
        <div className='flex'>
          <TextField
            value={jobData.zipCode}
            onChange={(e: React.SyntheticEvent) => {
              handleChange({
                id: (e.target as HTMLInputElement).id,
                value: (e.target as HTMLInputElement).value,
              });
            }}
            id='zipCode'
            label='Zip code'
            variant='standard'
          />
          <Select
            placeholder='Area'
            value={jobData.area === '' ? undefined : jobData.area}
            onChange={(e: any) => {
              handleChange({
                id: 'area',
                value: (e.target as HTMLLIElement).innerText,
              });
            }}
            indicator={<KeyboardArrowDown />}
            sx={{
              width: 240,
              marginTop: 1,
              [`& .${JSON.stringify(selectClasses.indicator)}`]: {
                transition: '0.2s',
                [`&.${JSON.stringify(selectClasses.expanded)}`]: {
                  transform: 'rotate(-180deg)',
                },
              },
            }}
          >
            <Option value='Area 1'>Area 1</Option>
            <Option value='Area 2'>Area 2</Option>
            <Option value='Area 3'>Area 3</Option>
          </Select>
        </div>
      </div>
    </Box>
  );
}
