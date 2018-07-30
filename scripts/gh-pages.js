const ghpages = require('gh-pages');

ghpages.publish('build', err => {
  if (err) {
    console.error(err);
    process.exit(1);
    return;
  }

  process.exit();
});
