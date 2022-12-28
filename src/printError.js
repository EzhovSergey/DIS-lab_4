import ErrorsHeandler from './errors/treeErrors.js'

export const printError = (e) => {
  const elems = e.stack.split(')')[0].split(':');

  const fileName = `${elems[0].split(' ')[5]}.js`
  const coords = [elems[elems.length - 2], elems[elems.length - 1]]

  const message = ErrorsHeandler.tree[fileName][e.name].message
  const hash = ErrorsHeandler.tree[fileName][e.name].hash

  console.log(`Исключение возникло в файле ${fileName}, ${coords.join(':')}. ${message}. Хэш стека - ${hash}.`);
}
