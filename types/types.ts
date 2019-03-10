export interface Flight {
    id: number;
    pilotid: number;
    date: string;
    country: string;
    takeoff: string;
    glider: string;
    duration: string;
    distance: string;
    maxaltitude: number;
    description: string;
    opendistance: string;
    trackloglink: string;
}

export interface TakeOff extends SortableData {
    region: string;
    toptobottom: number;
    asl: number;
    description: string;
}

export interface Club extends SortableData {

}

export interface Pilot extends SortableData {
    country: number;
    club: string;
    license: string;
    wings: string;
}

export interface SortableData {
    id: number;
    name: string;
}