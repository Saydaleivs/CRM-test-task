import Pipedrive from 'pipedrive';
import * as dotenv from 'dotenv';
dotenv.config();

const apiClient = new Pipedrive.ApiClient();
const api_key = apiClient.authentications['api_key'];
api_key.apiKey = process.env.API_KEY;

const apiInstance = new Pipedrive.DealFieldsApi(apiClient);
const opts = {
  start: 0,
  limit: 56,
};

export function getFieldsAndAddDeal(title, dealSchemaAndData) {
  return apiInstance.getDealFields(opts).then(
    (response) => {
      if (response.data.length === 0) return 'No data';
      const dealBody = filterRequiredDeals(response.data, dealSchemaAndData);

      const apiInstanceAdd = new Pipedrive.DealsApi(apiClient);
      return apiInstanceAdd
        .addDeal(
          Pipedrive.NewDeal.constructFromObject({
            title,
            ...dealBody,
          })
        )
        .then((res) => {
          return res;
        });
    },
    (error) => {
      console.error(error);
    }
  );
}

function filterRequiredDeals(allDeals, requiredDeals) {
  let obj = {};
  allDeals.map((deal) => {
    requiredDeals.map((rd) => {
      if (deal.name === rd.name && deal.field_type === rd.field_type) {
        obj = { ...obj, [deal.key]: rd.value };
      }
    });
  });

  return obj;
}
