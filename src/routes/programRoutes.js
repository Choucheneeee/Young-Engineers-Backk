const express = require("express");
const router = express.Router();
const programController = require("../controllers/programController");

/**
 * @api {post} /api/programs Create a new program
 * @apiName CreateProgram
 * @apiGroup Program
 * 
 * @apiBody {String} name The name of the program.
 * @apiBody {String} duration The duration of the program (e.g., "36 weeks").
 * @apiBody {Object[]} stages List of stages in the program.
 * @apiBody {String} stages.name The name of the stage.
 * @apiBody {String} stages.description The description of the stage.
 * 
 * @apiSuccess {Object} program The created program object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 201 Created
 *  {
 *    "id": "1",
 *    "name": "Bricks Challenge",
 *    "duration": "36 weeks",
 *    "stages": [
 *      {
 *        "name": "Stage 1",
 *        "description": "Introduction to robotics.",
 *        "completedBy": []
 *      }
 *    ],
 *    "createdAt": "2024-12-14T10:00:00.000Z",
 *    "updatedAt": "2024-12-14T10:00:00.000Z"
 *  }
 * 
 * @apiError (400) ValidationError Some fields are missing or invalid.
 */
router.post("/", programController.createProgram);

/**
 * @api {get} /api/programs Get all programs
 * @apiName GetAllPrograms
 * @apiGroup Program
 * 
 * @apiSuccess {Object[]} programs List of all programs.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "1",
 *      "name": "Bricks Challenge",
 *      "duration": "36 weeks",
 *      "stages": [
 *        {
 *          "name": "Stage 1",
 *          "description": "Introduction to robotics.",
 *          "completedBy": []
 *        }
 *      ],
 *      "createdAt": "2024-12-14T10:00:00.000Z",
 *      "updatedAt": "2024-12-14T10:00:00.000Z"
 *    }
 *  ]
 * 
 * @apiError (500) InternalServerError There was a problem fetching the programs.
 */
router.get("/", programController.getAllPrograms);

/**
 * @api {get} /api/programs/:id Get a program by ID
 * @apiName GetProgramById
 * @apiGroup Program
 * @apiParam {String} id The unique ID of the program.
 * 
 * @apiSuccess {Object} program The requested program.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "name": "Bricks Challenge",
 *    "duration": "36 weeks",
 *    "stages": [
 *      {
 *        "name": "Stage 1",
 *        "description": "Introduction to robotics.",
 *        "completedBy": []
 *      }
 *    ],
 *    "createdAt": "2024-12-14T10:00:00.000Z",
 *    "updatedAt": "2024-12-14T10:00:00.000Z"
 *  }
 * 
 * @apiError (404) NotFound Program not found.
 */
router.get("/:id", programController.getProgramById);

/**
 * @api {put} /api/programs/:id Update a program by ID
 * @apiName UpdateProgram
 * @apiGroup Program
 * @apiParam {String} id The unique ID of the program.
 * @apiBody {String} name The updated name of the program.
 * @apiBody {String} duration The updated duration of the program.
 * @apiBody {Object[]} stages The updated stages of the program.
 * @apiBody {String} stages.name The updated name of the stage.
 * @apiBody {String} stages.description The updated description of the stage.
 * 
 * @apiSuccess {Object} program The updated program object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "name": "Updated Bricks Challenge",
 *    "duration": "40 weeks",
 *    "stages": [
 *      {
 *        "name": "Updated Stage 1",
 *        "description": "Updated introduction to robotics.",
 *        "completedBy": []
 *      }
 *    ],
 *    "createdAt": "2024-12-14T10:00:00.000Z",
 *    "updatedAt": "2024-12-14T10:30:00.000Z"
 *  }
 * 
 * @apiError (404) NotFound Program not found.
 */
router.put("/:id", programController.updateProgram);

/**
 * @api {delete} /api/programs/:id Delete a program by ID
 * @apiName DeleteProgram
 * @apiGroup Program
 * @apiParam {String} id The unique ID of the program to delete.
 * 
 * @apiSuccess {String} message Success message.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "message": "Program deleted successfully"
 *  }
 * 
 * @apiError (404) NotFound Program not found.
 */
router.delete("/:id", programController.deleteProgram);

module.exports = router;
