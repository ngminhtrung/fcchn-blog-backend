import log4js from 'log4js'
import fs from 'fs'

const env = process.env.NODE_ENV || 'development'
const dir = 'logs'

// Create logs directory if it doesn't exists
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

log4js.configure({
  appenders: {
    console: { type: 'console', layout: { type: 'colored' } },
    file: { type: 'dateFile', filename: `${dir}/server.log`, pattern: '.yyyy-MM-dd' }
  },
  categories: { default: { appenders: ['console', 'file'], level: 'info' } }
});

const logger = log4js.getLogger()

module.exports = logger
