const express = require("express");
const router = express.Router();
const programController = require("../controllers/programController");

/**
 * @api {post} /api/programs Create a new program
 * @apiName CreateProgram
 * @apiGroup Program
 * @apiBody {String} name The name of the program.
 * @apiBody {String} description A description of the program.
 * @apiBody {String} start_date The start date of the program (in YYYY-MM-DD format).
 * @apiBody {String} end_date The end date of the program (in YYYY-MM-DD format).
 * 
 * @apiSuccess {Object} program The created program object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 201 Created
 *  {
 *    "id": "1",
 *    "name": "Program 1",
 *    "description": "This is a sample program.",
 *    "start_date": "2024-01-01",
 *    "end_date": "2024-12-31"
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
 *      "name": "Program 1",
 *      "description": "This is a sample program.",
 *      "start_date": "2024-01-01",
 *      "end_date": "2024-12-31"
 *    },
 *    {
 *      "id": "2",
 *      "name": "Program 2",
 *      "description": "Another program example.",
 *      "start_date": "2024-02-01",
 *      "end_date": "2024-11-30"
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
 * @apiSuccess {Object} program The program object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "name": "Program 1",
 *    "description": "This is a sample program.",
 *    "start_date": "2024-01-01",
 *    "end_date": "2024-12-31"
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
 * @apiBody {String} description The updated description of the program.
 * @apiBody {String} start_date The updated start date (in YYYY-MM-DD format).
 * @apiBody {String} end_date The updated end date (in YYYY-MM-DD format).
 * 
 * @apiSuccess {Object} program The updated program object.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "name": "Updated Program Name",
 *    "description": "Updated description.",
 *    "start_date": "2024-01-01",
 *    "end_date": "2024-12-31"
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
