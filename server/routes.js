import hotel from './api/hotels/index.js'
import user from './api/users/index.js'
import auth from './auth/index.js'
import room from './api/rooms/index.js'

function routes(app) {
  app.use('/api/hotels', hotel)
  app.use('/api/users', user)
  app.use('/auth', auth)
  app.use('/api/rooms', room)
}

export default routes
