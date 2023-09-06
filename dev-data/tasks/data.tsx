import {
  RxArrowDown,
  RxArrowRight,
  RxArrowUp,
  RxCheckCircled,
  RxCircle,
  RxCrossCircled,
  RxQuestionMarkCircled,
  RxStopwatch,
} from "react-icons/rx";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: RxQuestionMarkCircled,
  },
  {
    value: "todo",
    label: "Todo",
    icon: RxCircle,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: RxStopwatch,
  },
  {
    value: "done",
    label: "Done",
    icon: RxCheckCircled,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: RxCrossCircled,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: RxArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: RxArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: RxArrowUp,
  },
];
