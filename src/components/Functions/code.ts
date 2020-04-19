export const CODE_OBG = {
  anagram: {
    title: "Anagram",
    question:
      "Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся. finder and Friend",
    code: [
      {
        title: "React",
        code: `
        const anagram = (string1: string, string2: string) => {
          const str1: Array<string> = string1
            .replace(/[^\w]/g, "")
            .toLowerCase()
            .split("");
            
          const str2: Array<string> = string2
            .replace(/[^\w]/g, "")
            .toLowerCase()
            .split("");
        
          if (str1.length !== str2.length) {
            setResult("Нет, это не анаграма");
            return;
          }
        
          const first = str1.filter((i) => str2.includes(i)).length === str1.length;
          const second = str2.filter((i) => str1.includes(i)).length === str2.length;
        
          first && second
            ? setResult("Да, это анаграма")
            : setResult("Нет, это не анаграма");
        };      
    `,
      },
      {
        title: "Vanilla",
        code: `
        function anagram(str1 = "finder", str2 = "Friend") {
          str1 = str1
            .replace(/[^\w]/g, "")
            .toLowerCase()
            .split("");
        
          str2 = str2
            .replace(/[^\w]/g, "")
            .toLowerCase()
            .split("");
        
          if (str1.length !== str2.length) {
            return false;
          }
        
          const first = str1.filter(i => str2.includes(i)).length === str1.length;
          const second = str2.filter(i => str1.includes(i)).length === str2.length;
        
          return first && second;
        }
  `,
      },
    ],
  },
};
