import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { JobDataState } from '../../Interfaces';
import dayjs from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers';

export default function ScheduleForm({ jobData, handleChange }: JobDataState) {
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
        <Typography variant='h6'>Scheduled</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              value={dayjs(jobData.jobDate)}
              onChange={(newValue) => {
                handleChange({
                  id: 'jobDate',
                  value: JSON.stringify(newValue).substring(1, 11),
                });
              }}
              format='MM-DD-YYYY'
              label='Job date'
            />
          </DemoContainer>

          <DemoContainer components={['TimePicker', 'TimePicker']}>
            <div className='flex'>
              <TimePicker
                value={dayjs(jobData.jobStartTime)}
                onChange={(newValue) => {
                  handleChange({
                    id: 'jobStartTime',
                    value: JSON.stringify(newValue).substring(1, 17),
                  });
                }}
                label='Start time'
              />
              <TimePicker
                value={dayjs(jobData.jobEndTime)}
                onChange={(newValue) => {
                  handleChange({
                    id: 'jobEndTime',
                    value: JSON.stringify(newValue).substring(1, 17),
                  });
                }}
                label='End time'
              />
            </div>
          </DemoContainer>
        </LocalizationProvider>

        <Select
          placeholder='Technician'
          value={jobData.technician === '' ? undefined : jobData.technician}
          indicator={<KeyboardArrowDown />}
          onChange={(e: any) =>
            handleChange({
              id: 'technician',
              value: (e.target as HTMLInputElement).innerText,
            })
          }
          sx={{
            marginTop: 1,
            [`& .${JSON.stringify(selectClasses.indicator)}`]: {
              transition: '0.2s',
              [`&.${JSON.stringify(selectClasses.expanded)}`]: {
                transform: 'rotate(-180deg)',
              },
            },
          }}
        >
          <Option value='Technician 1'>Technician 1</Option>
          <Option value='Technician 2'>Technician 2</Option>
          <Option value='Technician 3'>Technician 3</Option>
        </Select>
      </div>
    </Box>
  );
}
