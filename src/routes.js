import hotel from './api/hotels/index.js'

function routes(app) {
  app.use('/api/hotels', hotel)
}

export default routes
