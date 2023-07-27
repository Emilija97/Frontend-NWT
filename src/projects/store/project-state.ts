export interface Project {
  id: string;
  name: string;
  teamId: string;
  cardIds: string[];
  description: string;
  projectOwnerId: string;
  budget: Float32Array;
  status: number;
  spentMoney: Float32Array
}

export enum Status {
  DEVELOPING = 0,
  TESTING = 1,
  MAINTAINING = 2
}

export const statusMap: Map<number, string> = new Map([
  [0, "Developing"],
  [1, "Testing"],
  [2, "Maintaining"],
]);