export interface ICity {
    name: string;
    wind: {
      speed: number;
    };
    main: {
      temp: number;
    };
    coord: {
      lat: number;
      lon: number;
    };
  }
