const https = require('https');

async function retrieveArticle(url) {
  // TODO: retrieve the html string from given url and return as promise
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let result = '';
      res.on('data', (data) => {
        result += data;
      });
      res.on('end', () => {
        resolve(result);
      });
    }).on('error', (e) => {
      reject(e);
    });
  });
}

module.exports = {
  retrieveArticle,
};
