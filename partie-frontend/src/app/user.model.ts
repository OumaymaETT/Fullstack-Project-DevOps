export class User {
  id!: number;
  name!: string;
  firstName!: string;
  email!: string;
  userType?: { id: number; type: string };
  userTypeId?: number;
}
