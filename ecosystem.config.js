module.exports = {
  apps: [
    {
      name: "KOSE-YAZISI", // proje ismi
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
    },
  ],
};
