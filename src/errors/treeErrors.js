import md5 from 'md5';

import errors from './errors.json' assert {type: 'json'};

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
