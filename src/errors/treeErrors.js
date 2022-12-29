import md5 from 'md5';

const errors = [
  [
    "testErrors.js",
    "EvalError",
    "EvalError at testErrors (file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/testErrors.js:5:11) at file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/index.js:3:1 at ModuleJob.run (node:internal/modules/esm/module_job:198:25) at async Promise.all (index 0) at async ESMLoader.import (node:internal/modules/esm/loader:385:24) at async loadESM (node:internal/process/esm_loader:88:5) at async handleMainPromise (node:internal/modules/run_main:61:12)",
    "Возникла ошибка в глобальной функции eval()"
  ],
  [
    "testErrors.js",
    "RangeError",
    "RangeError at testErrors (file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/testErrors.js:10:11) at file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/index.js:3:1 at ModuleJob.run (node:internal/modules/esm/module_job:198:25) at async Promise.all (index 0)2%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/testErrors.js:20:11) at file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/index.js:3:1 at ModuleJob.run (node:internal/modules/esm/module_job:198:25) at async Promise.all (index 0)    at async ESMLoader.import (node:internal/modules/esm/loader:385:24) at async loadESM (node:internal/process/esm_loader:88:5)    at async handleMainPromise (node:internal/modules/run_main:61:12)",
    "Выход числовой переменной или параметра за пределы допустимого диапазона"
  ],
  [
    "testErrors.js",
    "ReferenceError",
    "ReferenceError at testErrors (file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/testErrors.js:15:11) at file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/index.js:3:1 at ModuleJob.run (node:internal/modules/esm/module_job:198:25) at async Promise.all (index 0) at async ESMLoader.import (node:internal/modules/esm/loader:385:24) at async loadESM (node:internal/process/esm_loader:88:5) at async handleMainPromise (node:internal/modules/run_main:61:12)",
    "Разыменовывание недопустимой ссылки"
  ],
  [
    "testErrors.js",
    "SyntaxError",
    "SyntaxError at testErrors (file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/testErrors.js:20:11) at file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/index.js:3:1 at ModuleJob.run (node:internal/modules/esm/module_job:198:25) at async Promise.all (index 0) at async ESMLoader.import (node:internal/modules/esm/loader:385:24) at async loadESM (node:internal/process/esm_loader:88:5) at async handleMainPromise (node:internal/modules/run_main:61:12)",
    "Cинтаксическая ошибка при разборе исходного кода в функции eval()"
  ],
  [
    "testErrors.js",
    "TypeError",
    "TypeError at testErrors (file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/testErrors.js:25:11) at file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/index.js:3:1 at ModuleJob.run (node:internal/modules/esm/module_job:198:25) at async Promise.all (index 0) at async ESMLoader.import (node:internal/modules/esm/loader:385:24) at async loadESM (node:internal/process/esm_loader:88:5) at async handleMainPromise (node:internal/modules/run_main:61:12)",
    "Недопустимый тип для переменной или параметра"
  ],
  [
    "testErrors.js",
    "URIError",
    "URIError at testErrors (file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/testErrors.js:25:11) at file:///C:/Users/serga_806triz/OneDrive/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/%D0%B7%D0%B0%D1%87%D0%B5%D1%82%D1%8B/%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B/DIS-lab_4/src/index.js:3:1 at ModuleJob.run (node:internal/modules/esm/module_job:198:25) at async Promise.all (index 0) at async ESMLoader.import (node:internal/modules/esm/loader:385:24) at async loadESM (node:internal/process/esm_loader:88:5) at async handleMainPromise (node:internal/modules/run_main:61:12)",
    "Передача недопустимых параметров в функции encodeURI() или decodeURI()"
  ]
]

let tree = {};

errors.forEach(error => {
  const [fileName, ErrorName, stack, message] = error;
  const hash = md5(stack);

  tree[fileName] = {
    ...tree[fileName],
    [ErrorName]: {
      hash,
      message
    }
  }
});

export default { tree }
