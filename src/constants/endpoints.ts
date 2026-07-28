const BASE_URL = "https://front-end-kata.brighthr.workers.dev/api";

export const ABSENCES_URL = `${BASE_URL}/absences`;
export const conflictUrl = (id: number): string => `${BASE_URL}/conflict/${id}`;
