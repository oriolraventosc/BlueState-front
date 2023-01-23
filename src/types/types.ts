export interface User {
  username: string;
  password?: string;
  accesstoken?: string;
}

export interface JwtPayloadCustom {
  id: string;
  username: string;
  accesstoken: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export interface Contact {
  name: string;
  email: string;
  telephone: number;
  sector: string;
  website: string;
  service: string;
  logo: string | File;
  backUpLogo?: string;
  contacted: string;
  id: string;
}
export interface ContactStructure {
  name: string;
  email: string;
  telephone: number;
  sector: string;
  website: string;
  service: string;
  logo?: File;
  backUpLogo?: File;
  contacted?: string;
  id?: string;
}

export interface UpdateStructure {
  name: string;
  email: string;
  telephone: number;
  sector: string;
  website: string;
  service: string;
  logo?: File;
  backUpLogo?: File;
  contacted?: string;
  id?: string;
}
