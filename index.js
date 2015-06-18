/* jshint node: true */
'use strict';

var path = require('path');
var fs   = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var unwatchedTree = require('./lib/unwatched-tree')


module.exports = {
  name: 'ember-simple-auth-mattermark',
  config: function() {
    return {
      "simple-auth": {
        authorizer: 'simple-auth-authorizer:mattermark',
        crossOriginWhitelist: ['https://api.mattermark.com']
      }
    };
  },
  treeFor: function (name) {
    var treePath =  path.join('node_modules', 'ember-cli-simple-auth-mattermark', name + '-addon');
    if (fs.existsSync(treePath)) {
      return unwatchedTree(treePath);
    }
  },
  included: function (app) {
  }
};
