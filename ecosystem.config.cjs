#pm2 new
module.exports = {
  apps: [
    {
      name: 'NuxtApp',
      script: './.output/server/index.mjs',
      exec_mode: 'fork',
      watch: false,
      instances: 1,
    }
  ]
}
