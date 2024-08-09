export type CustomerResponse = {
  id: string;
  name: string;
  phone: string;
  email: string;
  adress: string | null;
  created_at: Date | null;
  updated_at: Date | null;
  userId: string | null;
};

export type CustomerRequest = {
  name: string;
  phone: string;
  email: string;
  userId: string | null;
};
