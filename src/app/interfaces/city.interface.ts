export interface ICity {
    name: string;
    main: {
      temp: number;
    };
    wind: {
      speed: number;
    };
    coord: {
      lat: number;
      lon: number;
    };
  }
