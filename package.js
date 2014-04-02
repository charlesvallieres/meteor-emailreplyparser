Package.describe({
  summary: "Meteor smart package for emailreplyparser."
})

Npm.depends({
  "emailreplyparser": "https://github.com/classcraft/emailreplyparser/tarball/209585e65197071e54e9f4201c660bc2cd3941c4"
});

Package.on_use(function (api, where) {
  api.add_files('emailreplyparser-server.js', 'server');
  api.export(['emailreplyparser'], 'server');
});
