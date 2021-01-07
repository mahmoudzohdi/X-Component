// eslint-disable-next-line import/prefer-default-export
export const readFileContent = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        return resolve(xhr.responseText);
      }
      return null;
    };
    xhr.open('GET', url);
    xhr.send();
  });
};
