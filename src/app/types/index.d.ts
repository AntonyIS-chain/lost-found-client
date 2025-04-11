export interface SignIn {
    email : string;
    password : string;
}

export interface LoginResponse {
  login: {
    results: {
      access_token: string;
      refresh_token: string;
    };
    message: string;
    statusCode: number;
    success: boolean;
  };
}

export interface Response {
    successCode : number;
    message: string;
    success: boolean;
}

export interface SessionUser {
    userID :string;
    role : string
}

export interface UserIdentityCard {
  id: string;
  id_number: string;
  full_name: string;
  location_found: string;
  date_reported: string; 
  status: 'pending' | 'found' | 'returned'; 
  created_at: string; 
  updated_at: string; 
}
