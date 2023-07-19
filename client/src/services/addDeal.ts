import axios from 'axios';

export default async function addDeal(
  title: string,
  dealBody: {
    value: string;
    name: string;
    field_type: string;
  }[]
) {
  return await axios({
    method: 'POST',
    url: 'https://crm-test-server-tbho.vercel.app',
    data: { title, dealBody },
  }).then((res) => res);
}
