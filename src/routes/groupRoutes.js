const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");

/**
 * @api {post} /api/groups Create a new group
 * @apiName CreateGroup
 * @apiGroup Group
 * 
 * @apiBody {String} name The name of the group.
 * @apiBody {String} schedule The schedule of the group (e.g., "Monday 10:00 AM - 12:00 PM").
 * @apiBody {String} programId The ID of the associated program.
 * 
 * @apiSuccess {Object} group The created group object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 201 Created
 *  {
 *    "id": "1",
 *    "name": "Group A",
 *    "schedule": "Monday 10:00 AM - 12:00 PM",
 *    "programId": "64ab6c8e65a7b611e3c2f6e1",
 *    "createdAt": "2024-12-14T10:00:00.000Z",
 *    "updatedAt": "2024-12-14T10:00:00.000Z"
 *  }
 * 
 * @apiError (400) ValidationError Some fields are missing or invalid.
 */
router.post("/", groupController.createGroup);

/**
 * @api {get} /api/groups Get all groups
 * @apiName GetAllGroups
 * @apiGroup Group
 * 
 * @apiSuccess {Object[]} groups List of all groups.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "1",
 *      "name": "Group A",
 *      "schedule": "Monday 10:00 AM - 12:00 PM",
 *      "programId": "64ab6c8e65a7b611e3c2f6e1",
 *      "createdAt": "2024-12-14T10:00:00.000Z",
 *      "updatedAt": "2024-12-14T10:00:00.000Z"
 *    },
 *    {
 *      "id": "2",
 *      "name": "Group B",
 *      "schedule": "Wednesday 2:00 PM - 4:00 PM",
 *      "programId": "64ac8b5d83e9a112e8f1c2f9",
 *      "createdAt": "2024-12-14T11:00:00.000Z",
 *      "updatedAt": "2024-12-14T11:00:00.000Z"
 *    }
 *  ]
 * 
 * @apiError (500) InternalServerError There was a problem fetching the groups.
 */
router.get("/", groupController.getAllGroups);

/**
 * @api {get} /api/groups/:id Get a group by ID
 * @apiName GetGroupById
 * @apiGroup Group
 * @apiParam {String} id The ID of the group to retrieve.
 * 
 * @apiSuccess {Object} group The requested group object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "name": "Group A",
 *    "schedule": "Monday 10:00 AM - 12:00 PM",
 *    "programId": "64ab6c8e65a7b611e3c2f6e1",
 *    "createdAt": "2024-12-14T10:00:00.000Z",
 *    "updatedAt": "2024-12-14T10:00:00.000Z"
 *  }
 * 
 * @apiError (404) NotFound Group not found with the specified ID.
 */
router.get("/:id", groupController.getGroupById);

/**
 * @api {put} /api/groups/:id Update a group by ID
 * @apiName UpdateGroup
 * @apiGroup Group
 * @apiParam {String} id The ID of the group to update.
 * @apiBody {String} name The updated name of the group.
 * @apiBody {String} schedule The updated schedule of the group.
 * @apiBody {String} programId The updated ID of the associated program.
 * 
 * @apiSuccess {Object} group The updated group object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "name": "Updated Group A",
 *    "schedule": "Monday 11:00 AM - 1:00 PM",
 *    "programId": "64ab6c8e65a7b611e3c2f6e1",
 *    "createdAt": "2024-12-14T10:00:00.000Z",
 *    "updatedAt": "2024-12-14T10:30:00.000Z"
 *  }
 * 
 * @apiError (404) NotFound Group not found with the specified ID.
 */
router.put("/:id", groupController.updateGroup);

/**
 * @api {delete} /api/groups/:id Delete a group by ID
 * @apiName DeleteGroup
 * @apiGroup Group
 * @apiParam {String} id The ID of the group to delete.
 * 
 * @apiSuccess {String} message Success message.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "message": "Group deleted successfully"
 *  }
 * 
 * @apiError (404) NotFound Group not found with the specified ID.
 */
router.delete("/:id", groupController.deleteGroup);

module.exports = router;
