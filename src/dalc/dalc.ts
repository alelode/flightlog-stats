import { Pilot, Flight } from "../types/types";

export async function getPilots(): Promise<Pilot[]> {
  const response = await fetch("http://localhost:3001/pilots");
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Server did not respond");
  }
}

export async function getFlights(): Promise<Flight[]> {
  const response = await fetch("http://localhost:3001/pilots");
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Server did not respond");
  }
}
