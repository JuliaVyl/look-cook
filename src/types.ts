export interface FoodCategory {
  id: number;
  category: string;
}

export interface ProfileCategory {
  id: number;
  category: string;
}

export interface Recipe {
  title: string;
  serves: number;
  time: number;
  level: string;
  text: string;
}
