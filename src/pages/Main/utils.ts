import { list } from "./model";

export function byField(field: string) {
  return (a: any, b: any) => (a[field] > b[field] ? 1 : -1);
}

export let listPatient: {
  id: number;
  name: string;
  age: number;
  sex: string;
}[] = [];

list.forEach((item, i) => {
  const reg = /([^\)]+)\((.*)\)/;
  const patient = item["Пацієнт"].match(reg);
  const a = patient![2].match(/\d+/g);
  const pat = patient![1];
  const age = a;

  listPatient.push({
    id: i,
    name: pat.trim(),
    age: +age![0],
    sex:
      item["Стать"] === "Чоловіча" || item["Стать"] === "male"
        ? "Муж"
        : "Жен",
  });
});
