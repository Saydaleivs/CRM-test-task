import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Textarea } from '@mui/joy';
import { JobDataState } from '../../Interfaces';

export default function JobDetailsForm({
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
        <Typography variant='h6'>Job details</Typography>
        <div className='flex'>
          <Select
            placeholder='Job type'
            value={jobData.jobType === '' ? undefined : jobData.jobType}
            onChange={(e: any) => {
              handleChange({
                id: 'jobType',
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
            <Option value='Job type 1'>Job type 1</Option>
            <Option value='Job type 2'>Job type 2</Option>
            <Option value='Job type 3'>Job type 3</Option>
          </Select>
          <Select
            placeholder='Job source'
            value={jobData.jobSource === '' ? undefined : jobData.jobSource}
            onChange={(e: any) => {
              handleChange({
                id: 'jobSource',
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
            <Option value='Job source 1'>Job source 1</Option>
            <Option value='Job source 2'>Job source 2</Option>
            <Option value='Job source 3'>Job source 3</Option>
          </Select>
        </div>
        <Textarea
          value={jobData.jobDescription}
          onChange={(e: React.SyntheticEvent) => {
            handleChange({
              id: 'jobDescription',
              value: (e.target as HTMLInputElement).value,
            });
          }}
          placeholder='Job description'
          minRows={4}
          sx={{
            '&::before': {
              display: 'none',
            },
            '&:focus-within': {
              outline: '2px solid var(--Textarea-focusedHighlight)',
              outlineOffset: '2px',
            },
          }}
        />
      </div>
    </Box>
  );
}
