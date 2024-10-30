type Classes = string | undefined | { [key: string]: boolean };

export const cn = (...classes: Classes[]) => {
  const classNames = classes
    .map((c) => {
      if (typeof c === "object") {
        return Object.entries(c)
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(" ");
      }
      return c;
    })
    .filter(Boolean)
    .join(" ");
  return classNames;
};
