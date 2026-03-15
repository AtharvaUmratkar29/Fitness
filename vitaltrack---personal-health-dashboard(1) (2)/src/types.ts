export interface Habit {
  id: string;
  name: string;
  icon: string;
  current: number;
  goal: number;
  unit: string;
  color: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  schedule: string;
  time: string;
  taken: boolean;
  icon: string;
}

export interface HealthMetric {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}
