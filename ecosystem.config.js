module.exports = {
  apps: [
    {
      name: 'gas-oracle',
      script: './build/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
      // Restart if process uses more than 500MB
      // Auto restart on crash with exponential backoff
      exp_backoff_restart_delay: 100,
      // Restart if app is not responding
      listen_timeout: 10000,
      kill_timeout: 5000,
    },
  ],
};
