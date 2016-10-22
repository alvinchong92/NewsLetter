const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  posts: {
    all: sql('./sql/posts/all.sql'),
    create: sql('./sql/posts/create.sql'),
    delete: sql('./sql/posts/delete.sql'),
    find: sql('./sql/posts/find.sql'),
  },
};

module.exports = sqlProvider;
