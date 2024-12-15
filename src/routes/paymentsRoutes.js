const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/paymentsController");

/**
 * @api {post} /api/payments Create a new payment record
 * @apiName CreatePayment
 * @apiGroup Payment
 * 
 * @apiBody {String} childId The ID of the child making the payment.
 * @apiBody {Number} amount The amount of the payment.
 * @apiBody {Date} date The date of the payment (ISODate format).
 * @apiBody {String="cash","credit card","bank transfer"} paymentMethod The method of payment.
 * 
 * @apiSuccess {Object} payment The created payment record.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 201 Created
 *  {
 *    "id": "1",
 *    "childId": "12345",
 *    "amount": 100.00,
 *    "date": "2024-01-01T00:00:00.000Z",
 *    "paymentMethod": "credit card",
 *    "createdAt": "2024-12-14T10:00:00.000Z",
 *    "updatedAt": "2024-12-14T10:00:00.000Z"
 *  }
 * 
 * @apiError (400) ValidationError Some fields are missing or invalid.
 */
router.post("/", paymentsController.createPayment);

/**
 * @api {get} /api/payments Get all payment records
 * @apiName GetAllPayments
 * @apiGroup Payment
 * 
 * @apiSuccess {Object[]} payments List of all payment records.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "1",
 *      "childId": "12345",
 *      "amount": 100.00,
 *      "date": "2024-01-01T00:00:00.000Z",
 *      "paymentMethod": "credit card",
 *      "createdAt": "2024-12-14T10:00:00.000Z",
 *      "updatedAt": "2024-12-14T10:00:00.000Z"
 *    }
 *  ]
 * 
 * @apiError (500) InternalServerError There was a problem fetching the payment records.
 */
router.get("/", paymentsController.getAllPayments);

/**
 * @api {get} /api/payments/child/:childId Get payments for a specific child
 * @apiName GetPaymentsByChild
 * @apiGroup Payment
 * @apiParam {String} childId The ID of the child whose payments are to be retrieved.
 * 
 * @apiSuccess {Object[]} payments List of payments made by the specified child.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "1",
 *      "childId": "12345",
 *      "amount": 100.00,
 *      "date": "2024-01-01T00:00:00.000Z",
 *      "paymentMethod": "credit card",
 *      "createdAt": "2024-12-14T10:00:00.000Z",
 *      "updatedAt": "2024-12-14T10:00:00.000Z"
 *    }
 *  ]
 * 
 * @apiError (404) NotFound No payments found for the specified child.
 */
router.get("/child/:childId", paymentsController.getPaymentsByChild);

/**
 * @api {get} /api/payments/date/:date Get payments for a specific date
 * @apiName GetPaymentsByDate
 * @apiGroup Payment
 * @apiParam {String} date The date of the payments to retrieve (ISODate format).
 * 
 * @apiSuccess {Object[]} payments List of payments made on the specified date.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "1",
 *      "childId": "12345",
 *      "amount": 100.00,
 *      "date": "2024-01-01T00:00:00.000Z",
 *      "paymentMethod": "credit card",
 *      "createdAt": "2024-12-14T10:00:00.000Z",
 *      "updatedAt": "2024-12-14T10:00:00.000Z"
 *    }
 *  ]
 * 
 * @apiError (404) NotFound No payments found for the specified date.
 */
router.get("/date/:date", paymentsController.getPaymentsByDate);

/**
 * @api {put} /api/payments/:id Update a payment record
 * @apiName UpdatePayment
 * @apiGroup Payment
 * @apiParam {String} id The ID of the payment record to update.
 * 
 * @apiBody {String} childId The ID of the child making the payment.
 * @apiBody {Number} amount The updated amount of the payment.
 * @apiBody {Date} date The updated date of the payment (ISODate format).
 * @apiBody {String="cash","credit card","bank transfer"} paymentMethod The updated method of payment.
 * 
 * @apiSuccess {Object} payment The updated payment record.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "childId": "12345",
 *    "amount": 150.00,
 *    "date": "2024-01-15T00:00:00.000Z",
 *    "paymentMethod": "bank transfer",
 *    "createdAt": "2024-12-14T10:00:00.000Z",
 *    "updatedAt": "2024-12-14T10:30:00.000Z"
 *  }
 * 
 * @apiError (404) NotFound Payment record not found.
 */
router.put("/:id", paymentsController.updatePayment);

/**
 * @api {delete} /api/payments/:id Delete a payment record
 * @apiName DeletePayment
 * @apiGroup Payment
 * @apiParam {String} id The ID of the payment record to delete.
 * 
 * @apiSuccess {String} message Success message.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "message": "Payment deleted successfully"
 *  }
 * 
 * @apiError (404) NotFound Payment record not found.
 */
router.delete("/:id", paymentsController.deletePayment);

module.exports = router;
