export interface IEventType {
  year: number;
  description: string;
}

export interface IAppContext {
  pointDegreesArray: Array<number>;
  rotateDegree: number;
  onPointClick(index: number): void;
  period: number;
  degreesArray: Array<number>;
}
