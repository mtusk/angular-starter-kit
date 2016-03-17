module.exports = {
  "port": 8000,
  "files": ["./src/**/*.{html,htm,css,js}"],
  "server": {
    "baseDir": "./src",
    routes: {
      "/bower_components": "bower_components",
      "/node_modules": "node_modules"
    }
  }
};
