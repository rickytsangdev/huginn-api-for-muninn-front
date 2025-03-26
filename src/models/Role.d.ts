import { Document, Model } from "mongoose";

declare module "../models/Role" {
  export interface IRole extends Document {
    role: string;
  }

  const Role: Model<IRole>;
  export default Role;
}
