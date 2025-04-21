module.exports = {
  apps: [
    {
      name: 'NuxtApp',
      script: './.output/server/index.mjs',
      exec_mode: 'fork',  // Run in fork mode (single process)
      watch: false,       // Disable watching for changes in production
      instances: 1,       // Single instance (can be increased if needed)
      env: {
        PORT: 3000,       // Port on which the app will run
        HOST: '0.0.0.0',  // Allow access on all interfaces (public IP)
      },
    }
  ]
}

