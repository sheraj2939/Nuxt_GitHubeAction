module.exports = {
  apps: [
    {
      name: 'HouzeoFrontEndProd',
      script: './.output/server/index.mjs',
      exec_mode: 'fork',
      instances: 1,
      env: {
        NODE_ENV: 'production',
        NITRO_PORT: 3000,
        HOST: '0.0.0.0'
      },
      error_file: '/data/logs/pm2/houzeo-frontend-prod-error.log',
      out_file: '/data/logs/pm2/houzeo-frontend-prod-output.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss ZZ',
      kill_timeout: 5000,
      restart_delay: 2000,
      autorestart: true
    }
  ]
};

