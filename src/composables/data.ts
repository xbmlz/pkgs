import engineRaw from "../engines.json";

export const engines: Engine[] = engineRaw.map((e) => ({
  label: e.label,
  url: e.url,
  icon: e.icon,
}));

export const icons: string[] = engineRaw.map((e) => e.icon);
