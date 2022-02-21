/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.post('/users/create', 'UsersController.store')
  Route.post('/users/auth', 'UsersController.auth')

  Route.group(() => {
    Route.get('/providers/all', 'ProvidersController.index')
    Route.post('/providers/create', 'ProvidersController.store')
    Route.patch('/providers/update', 'ProvidersController.update')
    Route.get('/providers/show/:id', 'ProvidersController.show')
    Route.delete('/providers/delete/:id', 'ProvidersController.destroy')
  }).middleware('auth')
}).prefix('api/v1')
