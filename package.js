Package.describe({
  summary: "Meteor smart package for emailreplyparser."
})

Npm.depends({
  "emailreplyparser": "https://github.com/charlesvallieres/emailreplyparser/tarball/4000a55d7d24bfbc10630d0742c0f0462fbd63a7"
});

Package.on_use(function (api, where) {
  api.add_files('emailreplyparser-server.js', 'server');
  api.export(['emailreplyparser'], 'server');
});
