const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
//const { auth } = require("../middleware/auth");


/**
 * @api {post} /api/users/register Register a new user

 * @apiName RegisterUser
 * @apiGroup User
 * @apiBody {String} username The username of the user.
 * @apiBody {String} email The email of the user.
 * @apiBody {String} password The password of the user.
 * @apiSuccess {Object} user The created user object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 201 Created
 *  {
 *    "id": "12345",
 *    "username": "JohnDoe",
 *    "email": "johndoe@example.com"
 *  }
 * @apiError (400) ValidationError Some fields are missing or invalid.
 */
router.post("/register", UserController.registerUser);

/**
 * @api {post} /api/users/login Login a user
 * @apiName LoginUser
 * @apiGroup User
 * @apiBody {String} email The email of the user.
 * @apiBody {String} password The password of the user.
 * @apiSuccess {String} token The JWT token for the user.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "token": "abc123xyz456"
 *  }
 * @apiError (401) Unauthorized Invalid email or password.
 */
router.post("/login", UserController.loginUser);

/**
 * @api {get} /api/users/ Get all users
 * 
 * @apiName GetAllUsers
 * @apiGroup User
 * @apiHeader {String} Authorization Admin's JWT token.
 * @apiSuccess {Object[]} users List of all users.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    { "id": "12345", "username": "JohnDoe", "email": "johndoe@example.com" },
 *    { "id": "67890", "username": "JaneDoe", "email": "janedoe@example.com" }
 *  ]
 * @apiError (403) Forbidden Only admins can access this resource.
 */
router.get("/", UserController.getAllUsers);

/**
 * @api {delete} /api/users/:id Delete a user
 * @apiName DeleteUser
 * @apiGroup User
 * @apiParam {String} id The ID of the user to delete.
 * @apiHeader {String} Authorization Admin's JWT token.
 * @apiSuccess {String} message Success message.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "message": "User deleted successfully"
 *  }
 * @apiError (403) Forbidden Only admins can access this resource.
 * @apiError (404) NotFound User not found.
 */
router.delete("/:id", UserController.deleteUser);

module.exports = router;
