import {Router} from "express";

const router = Router();

/* Import all controllers */
import * as controller from '../../controllers/appController.js';
import {registerMail} from '../../controllers/mailer.js'
import Auth, {localVariables} from '../../middleware/auth.js';
import ROLES_LIST from "../../config/roles_list.js";
import verifyRoles from "../../middleware/verifyRoles.js";

/* POST Methods */
router.route('/register').post(controller.register);
router.route('/registerMail').post(registerMail);
router.route('/authenticate').post(controller.verifyUser, (req, res) => res.end());
router.route('/login').post(controller.verifyUser, controller.login);

/* GET Methods */
router.route('/user/:username').get(controller.getUser);
router.route('/generateOTP').get(controller.verifyUser, localVariables, controller.generateOTP);
router.route('/verifyOTP').get(controller.verifyUser, controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);


/* PUT Methods */
router.route('/updateUser').put(Auth, verifyRoles(ROLES_LIST.Admin), controller.updateUser);
router.route('/resetPassword').put(controller.verifyUser, controller.resetPassword);

export default router;