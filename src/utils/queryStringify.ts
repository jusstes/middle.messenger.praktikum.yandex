function queryStringify(data: Record<string, any>) {
  if (typeof data !== 'object') {
    throw new Error('Props data is not object');
  }

  let result = '?';

  Object.keys(data).forEach((key, i, arr) => {
    result += `${key}=${data[key]}`;
    if (arr.length > 1 && i !== arr.length - 1) {
      result += `&`;
    }
  });

  return result;
}

export default queryStringify;
