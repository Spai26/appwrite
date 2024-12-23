import dotenv from 'dotenv'
dotenv.config()

const {
  APP_ENV,
  APP_HOST,
  APP_PORT,
  APP_NAME,
  WRITE_PROJECT_ID,
  WRITE_ENDPOINT,
  WRITE_DATABASE,
  WRITE_KEY,
} = process.env

export const APP = {
  enviroment: APP_ENV,
  port: APP_PORT ? Number(APP_PORT) : 8000,
  host: APP_HOST,
  name: APP_NAME,
}

export const WRITE = {
  project: WRITE_PROJECT_ID || 'default_project_id',
  key: WRITE_KEY || 'default_api_key',
  endpoint: WRITE_ENDPOINT || 'http://localhost/v1',
  database: WRITE_DATABASE || 'default_database_id',
}
