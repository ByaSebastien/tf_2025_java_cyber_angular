export interface Person {
  lastname: string;
  firstname: string;
  birthdate: Date;
  email: string;
  phone?: string;
  siblings: number;
  single: boolean;
  gender: PersonGender;
}

export enum PersonGender {
  MALE= "Male",
  FEMALE = "Female",
}

