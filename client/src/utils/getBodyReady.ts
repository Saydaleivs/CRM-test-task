import { JobData, DealSchema } from '../Interfaces';
import { dealSchema } from '../schema/dealSchema';

export default function getBodyReady(jobData: JobData): {
  title: string;
  body: {
    value: string;
    name: string;
    field_type: string;
  }[];
} {
  const arr = [];
  for (const key in jobData) {
    if (jobData[key as keyof JobData] !== '') {
      if (dealSchema[key as keyof DealSchema]) {
        const newObj = {
          ...dealSchema[key as keyof DealSchema],
          value: jobData[key as keyof JobData],
        };

        arr.push(newObj);
      }
    }
  }

  return { title: jobData.title, body: arr };
}
