export const cx = (...classes: (Boolean | string)[]) =>
  classes.filter(Boolean).join(" ");
