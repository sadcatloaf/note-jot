// import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
import { NotesController } from './controllers/NotesController.js';
const USE_ROUTER = false

class App {

  NotesController = new NotesController()

  // constructor() {
  //   if (USE_ROUTER) {
  //     this.router = router
  //     this.router.init(this)
  //   }
  // }

}

const app = new App()
// @ts-ignore
window.app = app
