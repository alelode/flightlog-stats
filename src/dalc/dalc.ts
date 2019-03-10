import { Pilot } from "../../types/types";

export async function getPilots(offset: number): Promise<Pilot[]> {
    let url = 'http://localhost:9000/pilots?offset=' + offset + '&limit=100';
    let response = await fetch(url);
    if (response.ok) {
        const responseBody: Promise<Pilot[]> = response.json();
        return responseBody;
    } else {
        throw new Error(
            `Url=${url} returned non-ok status: ${response.status}. Status text:${
            response.statusText
            }, caller=getPilots`
        );
    }
}