const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

/**
 * @api {post} /api/attendance Create attendance for a session
 * @apiName CreateAttendance
 * @apiGroup Attendance
 * @apiBody {String} childId The ID of the child attending the session.
 * @apiBody {String} groupId The ID of the group for which attendance is being recorded.
 * @apiBody {Date} sessionDate The date of the session.
 * 
 * @apiSuccess {Object} attendance The created attendance record.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 201 Created
 *  {
 *    "id": "1",
 *    "childId": "12345",
 *    "groupId": "1",
 *    "sessionDate": "2024-12-14"
 *  }
 * 
 * @apiError (400) ValidationError Some fields are missing or invalid.
 */
router.post("/", attendanceController.createAttendance);

/**
 * @api {get} /api/attendance Get all attendance records
 * @apiName GetAllAttendance
 * @apiGroup Attendance
 * 
 * @apiSuccess {Object[]} attendance List of all attendance records.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "1",
 *      "childId": "12345",
 *      "groupId": "1",
 *      "sessionDate": "2024-12-14"
 *    },
 *    {
 *      "id": "2",
 *      "childId": "67890",
 *      "groupId": "2",
 *      "sessionDate": "2024-12-14"
 *    }
 *  ]
 * 
 * @apiError (500) InternalServerError There was a problem fetching attendance records.
 */
router.get("/", attendanceController.getAllAttendance);

/**
 * @api {get} /api/attendance/child/:childId Get attendance for a specific child
 * @apiName GetAttendanceByChild
 * @apiGroup Attendance
 * @apiParam {String} childId The ID of the child whose attendance is to be retrieved.
 * 
 * @apiSuccess {Object[]} attendance List of attendance records for the specific child.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "1",
 *      "childId": "12345",
 *      "groupId": "1",
 *      "sessionDate": "2024-12-14"
 *    }
 *  ]
 * 
 * @apiError (404) NotFound No attendance records found for this child.
 */
router.get("/child/:childId", attendanceController.getAttendanceByChild);

/**
 * @api {get} /api/attendance/group/:groupId Get attendance for a specific group
 * @apiName GetAttendanceByGroup
 * @apiGroup Attendance
 * @apiParam {String} groupId The ID of the group whose attendance is to be retrieved.
 * 
 * @apiSuccess {Object[]} attendance List of attendance records for the specific group.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "1",
 *      "childId": "12345",
 *      "groupId": "1",
 *      "sessionDate": "2024-12-14"
 *    }
 *  ]
 * 
 * @apiError (404) NotFound No attendance records found for this group.
 */
router.get("/group/:groupId", attendanceController.getAttendanceByGroup);

/**
 * @api {put} /api/attendance/:id Update attendance for a session
 * @apiName UpdateAttendance
 * @apiGroup Attendance
 * @apiParam {String} id The ID of the attendance record to update.
 * @apiBody {String} childId The ID of the child attending the session.
 * @apiBody {String} groupId The ID of the group for which attendance is being recorded.
 * @apiBody {Date} sessionDate The date of the session.
 * 
 * @apiSuccess {Object} attendance The updated attendance record.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "childId": "12345",
 *    "groupId": "1",
 *    "sessionDate": "2024-12-15"
 *  }
 * 
 * @apiError (404) NotFound Attendance record not found with the specified ID.
 */
router.put("/:id", attendanceController.updateAttendance);

/**
 * @api {delete} /api/attendance/:id Delete attendance by ID
 * @apiName DeleteAttendance
 * @apiGroup Attendance
 * @apiParam {String} id The ID of the attendance record to delete.
 * 
 * @apiSuccess {String} message Success message.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "message": "Attendance deleted successfully"
 *  }
 * 
 * @apiError (404) NotFound Attendance record not found with the specified ID.
 */
router.delete("/:id", attendanceController.deleteAttendance);

module.exports = router;
