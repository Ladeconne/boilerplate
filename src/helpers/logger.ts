import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
import dayjs from 'dayjs';

const { combine, printf } = format;

const customLog = printf(({ level, message }) => {
  const logTime = dayjs().format('hh:mm');
  return `Level:[${level}]  LogTime: [${logTime}] Message:-[${message}]`;
});

const options = {
  info: {
    level: 'info',
    dirname: 'logs/combineds',
    json: true,
    handleExceptions: true,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    filename: `combined.log`,
    options: {
      mode: 0o646,
      flags: 'a',
    },
  },
  prod: {
    level: 'prod',
    dirname: 'logs/prod',
    json: true,
    handleExceptions: true,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    filename: `prod.log`,
    options: {
      mode: 0o646,
      flags: 'a',
    },
  },
  error: {
    level: 'error',
    dirname: 'logs/errors',
    json: true,
    handleExceptions: true,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    filename: `error.log`,
    options: {
      mode: 0o646,
      flags: 'a',
    },
  },
  synchro: {
    level: 'synchro',
    dirname: 'logs/synchro',
    json: true,
    handleExceptions: true,
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    filename: `synchro.log`,
    options: {
      mode: 0o646,
      flags: 'a',
    },
  },
  console: {
    level: 'debug',
    json: false,
    handleExceptions: true,
    colorize: true,
  },
};

const customLevels = {
  prod: 1,
  synchro: 2,
  error: 3,
  info: 4,
  debug: 5,
};

export const logger = createLogger({
  levels: customLevels,
  format: combine(customLog),
  transports: [
    new transports.DailyRotateFile(options.info),
    new transports.DailyRotateFile(options.error),
    new transports.DailyRotateFile(options.synchro),
    new transports.Console(options.console),
  ],
  exitOnError: false,
});

export const logError = (message: string) => {
  logger.log('error', message);
};
export const logInfo = (message: string) => {
  logger.log('info', message);
};
