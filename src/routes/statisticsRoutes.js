const express = require("express");
const router = express.Router();
const statisticsController = require("../controllers/statisticsController");

/**
 * @api {get} /api/statistics Get overall statistics
 * @apiName GetStatistics
 * @apiGroup Statistics
 * 
 * @apiSuccess {Number} programsCount The total number of programs.
 * @apiSuccess {Number} groupsCount The total number of groups.
 * @apiSuccess {Number} childrenCount The total number of children.
 * 
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "programsCount": 10,
 *    "groupsCount": 5,
 *    "childrenCount": 50
 *  }
 * 
 * @apiError (500) InternalServerError There was an error retrieving the statistics.
 */
router.get("/", statisticsController.getStatistics);

module.exports = router;
