const express = require("express");
const usersControllers = require("../../controllers/users.controller");

const router = express.Router();

router
  .route('/random')
  /**
 * @api {get} /user/random a random user
 * @apiDescription Get a random user
 * @apiPermission anyone
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiSuccess [{Object}] all the users.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
  .get(usersControllers.getRandomUser);

router
  .route("/all")
  /**
   * @api {get} /user/all All users
   * @apiDescription Get all the users
   * @apiPermission anyone
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess [{Object}] all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(usersControllers.getAllUsers);

router
  .route("/save")
  /**
   * @api {get} /user/save save a user
   * @apiDescription save a user
   * @apiPermission anyone
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiSuccess [{Object}] save a user in a array of object.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(usersControllers.saveAUser);

//   /**
//    * @api {post} /tools save a tool
//    * @apiDescription Get all the tools
//    * @apiPermission admin
//    *
//    * @apiHeader {String} Authorization   User's access token
//    *
//    * @apiParam  {Number{1-}}         [page=1]     List page
//    * @apiParam  {Number{1-100}}      [limit=10]  Users per page
//    *
//    * @apiSuccess {Object[]} all the tools.
//    *
//    * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
//    * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
//    */
//   .post(usersControllers.saveATool);

router
  .route("/update/:id")
  /**
 * @api {get} /user/update/id update a user
 * @apiDescription update a user
 * @apiPermission anyone
 *
 * @apiHeader {String} Authorization   User's access token
 *
 * @apiSuccess [{Object}] save a user in a array of object.
 *
 * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
 * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
 */
  .patch(usersControllers.updateUser)
// .delete(toolsControllers.deleteUser);

module.exports = router;
