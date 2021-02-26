import {Router} from "express"
import login from "./login.route"
const route =Router()

route.use("/login",login)

export default route;