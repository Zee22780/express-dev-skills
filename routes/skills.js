import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"

const router = Router()

/* GET users listing. */
// localhost:3000/skills
router.get('/', skillsCtrl.index)
// GET localhose:3000/skills/:id
router.get("/:id", skillsCtrl.show)

export {
  router
}
