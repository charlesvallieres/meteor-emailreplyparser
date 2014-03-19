Package.describe({
  summary: "Meteor smart package for emailreplyparser."
})

Npm.depends({
  "emailreplyparser": "0.0.3"
});

Package.on_use(function (api, where) {
  api.add_files('emailreplyparser-server.js', 'server');
  api.export(['emailreplyparser'], 'server');
});
