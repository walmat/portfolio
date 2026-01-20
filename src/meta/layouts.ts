import { Layout } from "react-grid-layout";

export interface RowHeights {
  [key: string]: number;
}

interface Paddings {
  [key: string]: [number, number];
}

interface Layouts {
  [key: string]: Layout[];
}

export const lg: Layouts = {
  All: [
    { i: "biography", x: 0, y: 0, w: 2, h: 1 },
    { i: "github", x: 2, y: 0, w: 1, h: 1 },
    { i: "nebula", x: 3, y: 0, w: 1, h: 2 },
    { i: "spotify", x: 0, y: 1, w: 1, h: 1 },
    { i: "twitter", x: 1, y: 1, w: 1, h: 1 },
    { i: "tigerbob", x: 2, y: 1, w: 1, h: 2 },
    { i: "blog", x: 0, y: 2, w: 2, h: 1 },
    { i: "theme", x: 3, y: 2, w: 1, h: 1 },
    { i: "recur", x: 0, y: 3, w: 2, h: 1 },
    { i: "contact", x: 2, y: 3, w: 2, h: 1 },
  ],
  About: [
    { i: "biography", x: 0, y: 0, w: 2, h: 1 },
    { i: "github", x: 2, y: 0, w: 1, h: 1 },
    { i: "spotify", x: 0, y: 1, w: 1, h: 1 },
    { i: "twitter", x: 3, y: 0, w: 1, h: 1 },
    { i: "theme", x: 1, y: 1, w: 1, h: 1 },
    { i: "nebula", x: 3, y: 1, w: 1, h: 2 },
    { i: "tigerbob", x: 2, y: 1, w: 1, h: 2 },
    { i: "blog", x: 0, y: 2, w: 2, h: 1 },
    { i: "recur", x: 0, y: 3, w: 2, h: 1 },
    { i: "contact", x: 2, y: 3, w: 2, h: 1 },
  ],
  Projects: [
    { i: "recur", x: 0, y: 0, w: 2, h: 1 },
    { i: "nebula", x: 3, y: 0, w: 1, h: 2 },
    { i: "tigerbob", x: 2, y: 0, w: 1, h: 2 },
    { i: "biography", x: 0, y: 1, w: 2, h: 1 },
    { i: "github", x: 2, y: 1, w: 1, h: 1 },
    { i: "spotify", x: 0, y: 1, w: 1, h: 1 },
    { i: "twitter", x: 1, y: 1, w: 1, h: 1 },
    { i: "blog", x: 0, y: 2, w: 2, h: 1 },
    { i: "theme", x: 3, y: 2, w: 1, h: 1 },
    { i: "contact", x: 2, y: 3, w: 2, h: 1 },
  ],
  Media: [
    { i: "blog", x: 0, y: 0, w: 2, h: 1 },
    { i: "contact", x: 2, y: 0, w: 2, h: 1 },
    { i: "biography", x: 0, y: 2, w: 2, h: 1 },
    { i: "github", x: 1, y: 1, w: 1, h: 1 },
    { i: "nebula", x: 3, y: 0, w: 1, h: 2 },
    { i: "spotify", x: 0, y: 1, w: 1, h: 1 },
    { i: "twitter", x: 2, y: 4, w: 1, h: 1 },
    { i: "tigerbob", x: 2, y: 1, w: 1, h: 2 },
    { i: "theme", x: 3, y: 2, w: 1, h: 1 },
    { i: "recur", x: 0, y: 3, w: 2, h: 1 },
  ],
};

export const md: Layouts = {
  All: [
    { i: "biography", x: 0, y: 0, w: 2, h: 2 },
    { i: "github", x: 2, y: 0, w: 1, h: 1 },
    { i: "nebula", x: 3, y: 0, w: 1, h: 2 },
    { i: "spotify", x: 0, y: 2, w: 2, h: 1 },
    { i: "tigerbob", x: 2, y: 1, w: 1, h: 2 },
    { i: "theme", x: 3, y: 2, w: 1, h: 1 },
    { i: "blog", x: 0, y: 3, w: 2, h: 2 },
    { i: "recur", x: 2, y: 3, w: 2, h: 1 },
    { i: "twitter", x: 1, y: 5, w: 1, h: 1 },
    { i: "contact", x: 2, y: 4, w: 2, h: 2 },
  ],
  About: [
    { i: "biography", x: 0, y: 0, w: 2, h: 2 },
    { i: "github", x: 2, y: 0, w: 1, h: 1 },
    { i: "nebula", x: 3, y: 3, w: 1, h: 2 },
    { i: "spotify", x: 2, y: 2, w: 2, h: 1 },
    { i: "tigerbob", x: 2, y: 3, w: 1, h: 2 },
    { i: "theme", x: 3, y: 2, w: 1, h: 1 },
    { i: "blog", x: 0, y: 3, w: 2, h: 2 },
    { i: "recur", x: 2, y: 3, w: 2, h: 1 },
    { i: "twitter", x: 3, y: 0, w: 1, h: 1 },
    { i: "contact", x: 2, y: 4, w: 2, h: 2 },
  ],
  Projects: [
    { i: "biography", x: 0, y: 2, w: 2, h: 2 },
    { i: "github", x: 2, y: 1, w: 1, h: 1 },
    { i: "nebula", x: 0, y: 0, w: 1, h: 2 },
    { i: "spotify", x: 0, y: 2, w: 2, h: 1 },
    { i: "tigerbob", x: 3, y: 0, w: 1, h: 2 },
    { i: "theme", x: 1, y: 1, w: 1, h: 1 },
    { i: "blog", x: 3, y: 3, w: 2, h: 2 },
    { i: "recur", x: 1, y: 0, w: 2, h: 1 },
    { i: "twitter", x: 1, y: 5, w: 1, h: 1 },
    { i: "contact", x: 2, y: 4, w: 2, h: 2 },
  ],
  Media: [
    { i: "biography", x: 0, y: 2, w: 2, h: 2 },
    { i: "github", x: 2, y: 2, w: 1, h: 1 },
    { i: "nebula", x: 3, y: 2, w: 1, h: 2 },
    { i: "spotify", x: 0, y: 2, w: 2, h: 1 },
    { i: "tigerbob", x: 2, y: 1, w: 1, h: 2 },
    { i: "theme", x: 3, y: 2, w: 1, h: 1 },
    { i: "blog", x: 0, y: 0, w: 2, h: 2 },
    { i: "recur", x: 2, y: 3, w: 2, h: 1 },
    { i: "twitter", x: 1, y: 5, w: 1, h: 1 },
    { i: "contact", x: 2, y: 0, w: 2, h: 2 },
  ],
};

export const mobile: Layouts = {
  All: [
    { i: "biography", x: 0, y: 0, w: 2, h: 2 },
    { i: "github", x: 0, y: 2, w: 2, h: 1 },
    { i: "twitter", x: 0, y: 2, w: 1, h: 1 },
    { i: "nebula", x: 1, y: 3, w: 1, h: 2 },
    { i: "tigerbob", x: 0, y: 3, w: 1, h: 2 },
    { i: "theme", x: 1, y: 5, w: 1, h: 1 },
    { i: "spotify", x: 0, y: 6, w: 2, h: 2 },
    { i: "blog", x: 0, y: 8, w: 2, h: 2 },
    { i: "recur", x: 0, y: 10, w: 2, h: 1 },
    { i: "contact", x: 0, y: 11, w: 2, h: 2 },
  ],
  About: [
    { i: "biography", x: 0, y: 0, w: 2, h: 2 },
    { i: "github", x: 0, y: 2, w: 2, h: 1 },
    { i: "spotify", x: 0, y: 3, w: 2, h: 2 },
    { i: "twitter", x: 0, y: 5, w: 1, h: 1 },
    { i: "nebula", x: 1, y: 5, w: 1, h: 2 },
    { i: "tigerbob", x: 0, y: 6, w: 1, h: 2 },
    { i: "theme", x: 1, y: 6, w: 1, h: 1 },
    { i: "blog", x: 0, y: 8, w: 2, h: 2 },
    { i: "recur", x: 0, y: 10, w: 2, h: 1 },
    { i: "contact", x: 2, y: 11, w: 2, h: 2 },
  ],
  Projects: [
    { i: "nebula", x: 0, y: 0, w: 1, h: 2 },
    { i: "tigerbob", x: 1, y: 0, w: 1, h: 2 },
    { i: "recur", x: 0, y: 1, w: 2, h: 1 },

    { i: "biography", x: 0, y: 4, w: 2, h: 2 },
    { i: "github", x: 0, y: 5, w: 2, h: 1 },
    { i: "twitter", x: 0, y: 5, w: 1, h: 1 },
    { i: "theme", x: 1, y: 4, w: 1, h: 1 },
    { i: "spotify", x: 0, y: 6, w: 2, h: 2 },
    { i: "blog", x: 0, y: 8, w: 2, h: 2 },
    { i: "contact", x: 2, y: 3, w: 2, h: 2 },
  ],
  Media: [
    { i: "blog", x: 0, y: 0, w: 2, h: 2 },
    { i: "contact", x: 0, y: 2, w: 2, h: 2 },
    { i: "biography", x: 0, y: 4, w: 2, h: 2 },
    { i: "github", x: 0, y: 5, w: 2, h: 1 },
    { i: "spotify", x: 0, y: 3, w: 2, h: 2 },
    { i: "twitter", x: 0, y: 8, w: 1, h: 1 },
    { i: "nebula", x: 1, y: 5, w: 1, h: 2 },
    { i: "tigerbob", x: 0, y: 5, w: 1, h: 2 },
    { i: "theme", x: 1, y: 8, w: 1, h: 1 },
    { i: "recur", x: 0, y: 10, w: 2, h: 1 },
  ],
};

export const rowHeights: RowHeights = {
  lg: 280,
  md: 180,
  sm: 164,
  xs: 164,
  xxs: 164,
};

export const paddings: Paddings = {
  lg: [64, 0],
  md: [16, 16],
  sm: [16, 16],
  xs: [16, 16],
  xxs: [16, 16],
};
