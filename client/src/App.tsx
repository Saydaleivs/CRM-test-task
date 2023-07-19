import { useState } from 'react';
import Buttons from './components/Buttons';
import ClientDetailsForm from './components/forms/ClientDetailsForm';
import JobDetailsForm from './components/forms/JobDetailsForm';
import ScheduleForm from './components/forms/ScheduleForm';
import ServiceLocationForm from './components/forms/ServiceLocationForm';
import { HandleChange, JobData } from './Interfaces';
import TheAlert from './components/TheAlert';
import Loader from './components/Loader';
import addDeal from './services/addDeal';
import getBodyReady from './utils/getBodyReady';

function App() {
  const initialState = {
    title: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    area: '',
    zipCode: '',
    jobType: '',
    jobSource: '',
    jobDescription: '',
    jobDate: '',
    jobStartTime: '',
    jobEndTime: '',
    technician: '',
  };

  const savedData = JSON.parse(
    localStorage.getItem('savedJobInfo')!
  ) as JobData;

  const [jobData, setJobData] = useState<JobData>(savedData || initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isAlert, setIsAlert] = useState<{
    alertType: 'success' | 'error';
    message: string;
  }>();

  function handleChange({ id, value }: HandleChange) {
    setJobData({ ...jobData, [id]: value });
  }

  async function createJob() {
    if (jobData.title !== '') setIsLoading(true);

    const { title, body } = getBodyReady(jobData);

    const res = await addDeal(title, body);
    if (res.data.success) {
      localStorage.clear();
      setIsLoading(false);
      setJobData(initialState);
      setIsAlert({ alertType: 'success', message: 'Job created successfully' });
      setTimeout(() => setIsAlert(undefined), 3000);
    }
  }

  function saveInfo() {
    setIsAlert({ alertType: 'success', message: 'Job saved successfully' });
    setTimeout(() => setIsAlert(undefined), 3000);
    localStorage.setItem('savedJobInfo', JSON.stringify(jobData));
  }

  return (
    <>
      <div
        className='container flex centered'
        style={{ justifyContent: 'center' }}
      >
        <div className='form-wrapper'>
          <ClientDetailsForm jobData={jobData} handleChange={handleChange} />
          <JobDetailsForm jobData={jobData} handleChange={handleChange} />
          <ServiceLocationForm jobData={jobData} handleChange={handleChange} />
          <ScheduleForm jobData={jobData} handleChange={handleChange} />
        </div>

        <Buttons
          createJob={() => void createJob()}
          saveInfo={saveInfo}
          isLoading={isLoading}
        />
      </div>

      <Loader open={isLoading} />

      {isAlert && (
        <TheAlert alertType={isAlert.alertType} message={isAlert.message} />
      )}
    </>
  );
}

export default App;
