import { Summit } from './summit';

export interface User {
    id: number;
    username: string;
    dateOfBirth?: string;
    age?: number;
    about?: string;
    city?: string;
    country?: string;
    profilePhotoUrl?: string;
    summits?: Summit[];
    pageUrl?: string;
}
