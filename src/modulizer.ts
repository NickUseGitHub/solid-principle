const moduleAlias = require('module-alias');

moduleAlias.addAliases({
  '@classes': `${__dirname}/classes`,
});

moduleAlias();
