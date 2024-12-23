import cors from 'cors'

const hostsWhiteList = [
  'http://localhost:5173',
  'https://app.clostech.tech',
  'https://app-clostech-ia-test-2rda30zpe.vercel.app',
  'https://app-clostech-ia-test.vercel.app',
]

export const corsMiddleware = ({ acceptedOrigins = hostsWhiteList } = {}) => {
  return (req, res, next) => {
    cors({
      origin: (origin, callback) => {
        if (origin == null) {
          callback(null, true)
          return
        }

        if (
          acceptedOrigins.some((allowedOrigin) =>
            origin.startsWith(allowedOrigin),
          )
        ) {
          callback(null, true)
          return
        }
        callback(new Error('Not allowed by CORS'))
      },
      allowedHeaders:
        'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, refresh_token',
      methods: 'GET, POST, PATCH, DELETE',
      exposedHeaders: 'Authorization, refresh_token',
      preflightContinue: false,
      optionsSuccessStatus: 204,
      credentials: true,
    })(req, res, next)
  }
}
