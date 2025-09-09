import {MeetingType} from '../enums/metting-type';

export interface ContactForm {
  contact: {
    firstname: string;
    lastname: string;
    email: string;
    meetingType: MeetingType;
    description: string;
    availabilities: Date[];
    atHome: boolean;
  };
  address?: {
    street: string;
    city: string;
    zipCode: string;
  }
}
