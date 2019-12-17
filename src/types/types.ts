export interface Flight {
  id: number;
  pilotid: number;
  date: string;
  country: string;
  takeoff: string;
  glider: string;
  duration: string;
  distance: number;
  maxaltitude: number;
  description: string;
  opendistance: number;
  trackloglink: string;
  test: number;
}

export interface TakeOff {
  id: number;
  name: string;
  region: string;
  toptobottom: number;
  asl: number;
  description: string;
}

export interface Club {
  name: string;
  id: number;
}

export interface Pilot {
  id: number;
  name: string;
  country: number;
  club: string;
  license: string;
  wings: string;
}
