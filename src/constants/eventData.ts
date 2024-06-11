export interface Event {
  id: number;
  title: string;
  description: string;
  start: Date | string;
  end: Date | string;
}

export const EVENTS_DATA: Event[] = [
  {
    id: 1,
    title: "Event 1",
    start: new Date(),
    description: "This is a description of event 1",
    end: new Date(new Date().setDate(new Date().getDate() + 2)),
  },
  {
    id: 2,
    title: "Event 2",
    description: "This is a description of event 2",
    start: new Date(new Date().setDate(new Date().getDate() + 1)),
    end: new Date(new Date().setDate(new Date().getDate() + 2)),
  },
  {
    id: 3,
    title: "Event 3",
    description: "This is a description of event 3",
    start: new Date(),
    end: new Date(),
  },
];
