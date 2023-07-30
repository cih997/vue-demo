import ajax from "@/api/ajax";
import { ApiCustomer } from "@/const";

export default class Stripe {
  id: number;
  name: string;
  email: string;

  constructor(id?: number, name?: string, email?: string) {
    this.id = id ?? 0
    this.name = name ?? ''
    this.email = email ?? ''
  }

  public getCustomers(success: (data: CustomersListResponse) => void, failure: (err: any) => void): void {
    ajax.get<CustomersListResponse>(ApiCustomer)
      .then(res => {
        if (success) success(res.data)
      })
      .catch(err => {
        if (failure) failure(err)
      })
  }
}

interface CustomersListResponse {
  content: Array<Stripe>;
}