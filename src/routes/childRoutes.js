const express = require("express");
const router = express.Router();
const childController = require("../controllers/childController");

/**
 * @api {post} /api/children Create a new child
 * @apiName CreateChild
 * @apiGroup Child
 * @apiBody {String} firstName The first name of the child.
 * @apiBody {String} lastName The last name of the child.
 * @apiBody {Date} birthDate The birth date of the child.
 * @apiBody {String} parentId The ID of the child's parent.
 * 
 * @apiSuccess {Object} child The created child object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 201 Created
 *  {
 *    "id": "1",
 *    "firstName": "John",
 *    "lastName": "Doe",
 *    "birthDate": "2015-05-15",
 *    "parentId": "12345"
 *  }
 * 
 * @apiError (400) ValidationError Some fields are missing or invalid.
 */
router.post("/", childController.createChild);

/**
 * @api {get} /api/children Get all children
 * @apiName GetChildren
 * @apiGroup Child
 * 
 * @apiSuccess {Object[]} children List of all children.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "1",
 *      "firstName": "John",
 *      "lastName": "Doe",
 *      "birthDate": "2015-05-15",
 *      "parentId": "12345"
 *    },
 *    {
 *      "id": "2",
 *      "firstName": "Jane",
 *      "lastName": "Doe",
 *      "birthDate": "2016-07-20",
 *      "parentId": "12346"
 *    }
 *  ]
 * 
 * @apiError (500) InternalServerError There was a problem fetching the children.
 */
router.get("/", childController.getChildren);

/**
 * @api {get} /api/children/:id Get a specific child by ID
 * @apiName GetChildById
 * @apiGroup Child
 * @apiParam {String} id The ID of the child to retrieve.
 * 
 * @apiSuccess {Object} child The requested child object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "firstName": "John",
 *    "lastName": "Doe",
 *    "birthDate": "2015-05-15",
 *    "parentId": "12345"
 *  }
 * 
 * @apiError (404) NotFound Child not found with the specified ID.
 */
router.get("/:id", childController.getChildById);

/**
 * @api {put} /api/children/:id Update a child by ID
 * @apiName UpdateChild
 * @apiGroup Child
 * @apiParam {String} id The ID of the child to update.
 * @apiBody {String} firstName The updated first name of the child.
 * @apiBody {String} lastName The updated last name of the child.
 * @apiBody {Date} birthDate The updated birth date of the child.
 * @apiBody {String} parentId The updated ID of the child's parent.
 * 
 * @apiSuccess {Object} child The updated child object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "firstName": "John",
 *    "lastName": "Doe",
 *    "birthDate": "2015-05-15",
 *    "parentId": "12345"
 *  }
 * 
 * @apiError (404) NotFound Child not found with the specified ID.
 */
router.put("/:id", childController.updateChild);

/**
 * @api {delete} /api/children/:id Delete a child by ID
 * @apiName DeleteChild
 * @apiGroup Child
 * @apiParam {String} id The ID of the child to delete.
 * 
 * @apiSuccess {String} message Success message.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "message": "Child deleted successfully"
 *  }
 * 
 * @apiError (404) NotFound Child not found with the specified ID.
 */
router.delete("/:id", childController.deleteChild);

module.exports = router;
