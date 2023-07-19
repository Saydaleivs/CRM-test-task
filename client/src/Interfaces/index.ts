export interface JobData {
  title: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  area: string;
  zipCode: string;
  jobType: string;
  jobSource: string;
  jobDescription: string;
  jobDate: string;
  jobStartTime: string;
  jobEndTime: string;
  technician: string;
}

interface SingleDeal {
  name: string;
  field_type: string;
  value?: string;
}

export interface DealSchema {
  firstName: SingleDeal;
  lastName: SingleDeal;
  phone: SingleDeal;
  email: SingleDeal;
  address: SingleDeal;
  city: SingleDeal;
  state: SingleDeal;
  area: SingleDeal;
  zipCode: SingleDeal;
  jobType: SingleDeal;
  jobSource: SingleDeal;
  jobDescription: SingleDeal;
  jobDate: SingleDeal;
  jobStartTime: SingleDeal;
  jobEndTime: SingleDeal;
  technician: SingleDeal;
}

export interface HandleChange {
  id: string;
  value: string | unknown;
}

export interface JobDataState {
  jobData: JobData;
  handleChange: ({ id, value }: HandleChange) => void;
}
