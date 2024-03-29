import { Timestamp } from 'firebase-admin/lib/firestore';

export interface PublicationPhotoModel {
  uid: string;
  url: string;
  name: string;
  creationDate: Timestamp,
  updatedDate?: Timestamp,
}