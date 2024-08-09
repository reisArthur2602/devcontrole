import { CustomerRequest } from '@/dtos/customer';
import { ApiCore } from '@/lib/axios-config';

const create = async (params: CustomerRequest) => {
  return (await ApiCore.post('/api/customer/', params)).data;
};

export const CustomerService = {
  create,
};
