import engineRaw from "../engines.json";

export const engines: Engine[] = engineRaw.map((e) => ({
  label: e.label,
  url: e.url,
  icon: e.icon,
}));
