import { Data } from "../chart";

function generateData(): Data[] {
  return [
    { x: 0, y: Math.floor(Math.random() * 20) + 1 },
    { x: 1, y: Math.floor(Math.random() * 20) + 1 },
    { x: 2, y: Math.floor(Math.random() * 20) + 1 },
    { x: 3, y: Math.floor(Math.random() * 20) + 1 },
    { x: 4, y: Math.floor(Math.random() * 20) + 1 },
    { x: 5, y: Math.floor(Math.random() * 20) + 1 }
  ];
}

export async function getDummyData(): Promise<Data[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(generateData());
    }, 1500);
  });
}

export function generateLabelData(data: Data[]) {
  return data.map((d, idx) => ({
    x: d.x,
    y: Math.max(data[idx].y)
  }));
}
