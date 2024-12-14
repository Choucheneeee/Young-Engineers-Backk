const express = require("express");
const router = express.Router();
const groupController = require("../controllers/groupController");

/**
 * @api {post} /api/groups Create a new group
 * @apiName CreateGroup
 * @apiGroup Group
 * @apiBody {String} groupName The name of the group.
 * @apiBody {String} description A brief description of the group.
 * @apiBody {String[]} members List of member IDs to be added to the group.
 * 
 * @apiSuccess {Object} group The created group object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 201 Created
 *  {
 *    "id": "1",
 *    "groupName": "Engineering Team",
 *    "description": "Group for the engineering team",
 *    "members": ["123", "456", "789"]
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
 *      "groupName": "Engineering Team",
 *      "description": "Group for the engineering team",
 *      "members": ["123", "456", "789"]
 *    },
 *    {
 *      "id": "2",
 *      "groupName": "Marketing Team",
 *      "description": "Group for the marketing team",
 *      "members": ["101", "102"]
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
 * @apiSuccess {Object} group The requested group.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "groupName": "Engineering Team",
 *    "description": "Group for the engineering team",
 *    "members": ["123", "456", "789"]
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
 * @apiBody {String} groupName The updated name of the group.
 * @apiBody {String} description The updated description of the group.
 * @apiBody {String[]} members List of updated member IDs.
 * 
 * @apiSuccess {Object} group The updated group object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "groupName": "Engineering Team",
 *    "description": "Updated description for engineering team",
 *    "members": ["123", "456"]
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
