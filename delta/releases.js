'use strict';

var github = require('../_common/github.js');
var owner = 'dandavison';
var repo = 'delta';

module.exports = function () {
  return github(null, owner, repo).then(function (all) {
    return all;
  });
};

if (module === require.main) {
  module.exports().then(function (all) {
    all = require('../_webi/normalize.js')(all);
    // just select the first 15 for demonstration
    all.releases = all.releases.slice(0, 15);
    console.info(JSON.stringify(all, null, 2));
  });
}
