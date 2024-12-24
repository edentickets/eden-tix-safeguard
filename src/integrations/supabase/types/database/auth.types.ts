import { Database } from "../database.types";

export interface AuthTypes {
  profiles: Database['public']['Tables']['profiles'];
}

export type ProfileRow = Database['public']['Tables']['profiles']['Row'];
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert'];
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update'];