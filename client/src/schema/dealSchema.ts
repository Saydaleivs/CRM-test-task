import { DealSchema } from '../Interfaces';

export const dealSchema: DealSchema = {
  firstName: { name: 'First name', field_type: 'varchar' },
  lastName: { name: 'Last name', field_type: 'varchar' },
  phone: { name: 'Phone', field_type: 'phone' },
  email: { name: 'Email', field_type: 'varchar' },
  address: { name: 'Address', field_type: 'varchar' },
  city: { name: 'City', field_type: 'varchar' },
  state: { name: 'State', field_type: 'varchar' },
  area: { name: 'Area', field_type: 'varchar' },
  zipCode: { name: 'Zip code', field_type: 'varchar' },
  jobType: { name: 'Job type', field_type: 'varchar' },
  jobSource: { name: 'Job source', field_type: 'varchar' },
  jobDescription: { name: 'Job description', field_type: 'varchar' },
  jobDate: { name: 'Job date', field_type: 'date' },
  jobStartTime: { name: 'Job start time', field_type: 'time' },
  jobEndTime: { name: 'Job end time', field_type: 'time' },
  technician: { name: 'Technician', field_type: 'varchar' },
};
