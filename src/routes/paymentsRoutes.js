const express = require("express");
const router = express.Router();
const paymentsController = require("../controllers/paymentsController");

/**
 * @api {post} /api/payments Create a new payment record
 * @apiName CreatePayment
 * @apiGroup Payment
 * @apiBody {String} childId The ID of the child making the payment.
 * @apiBody {Number} amount The amount of the payment.
 * @apiBody {String} paymentDate The date of the payment (in YYYY-MM-DD format).
 * @apiBody {String} paymentMethod The method of payment (e.g., credit card, cash, etc.).
 * @apiBody {String} description A description for the payment (optional).
 * 
 * @apiSuccess {Object} payment The created payment record.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 201 Created
 *  {
 *    "id": "1",
 *    "childId": "12345",
 *    "amount": 100.00,
 *    "paymentDate": "2024-01-01",
 *    "paymentMethod": "credit card",
 *    "description": "Payment for program enrollment"
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
 *      "paymentDate": "2024-01-01",
 *      "paymentMethod": "credit card",
 *      "description": "Payment for program enrollment"
 *    },
 *    {
 *      "id": "2",
 *      "childId": "67890",
 *      "amount": 150.00,
 *      "paymentDate": "2024-02-01",
 *      "paymentMethod": "cash",
 *      "description": "Payment for tuition"
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
 * @apiParam {String} childId The ID of the child.
 * 
 * @apiSuccess {Object[]} payments List of payments made by the specified child.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "1",
 *      "childId": "12345",
 *      "amount": 100.00,
 *      "paymentDate": "2024-01-01",
 *      "paymentMethod": "credit card",
 *      "description": "Payment for program enrollment"
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
 * @apiParam {String} date The date of the payment (in YYYY-MM-DD format).
 * 
 * @apiSuccess {Object[]} payments List of payments made on the specified date.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  [
 *    {
 *      "id": "1",
 *      "childId": "12345",
 *      "amount": 100.00,
 *      "paymentDate": "2024-01-01",
 *      "paymentMethod": "credit card",
 *      "description": "Payment for program enrollment"
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
 * @apiParam {String} id The unique ID of the payment record.
 * @apiBody {String} childId The ID of the child making the payment.
 * @apiBody {Number} amount The updated amount of the payment.
 * @apiBody {String} paymentDate The updated date of the payment (in YYYY-MM-DD format).
 * @apiBody {String} paymentMethod The updated method of payment.
 * @apiBody {String} description The updated description for the payment (optional).
 * 
 * @apiSuccess {Object} payment The updated payment record.
 * @apiSuccessExample {json} Success Response:
 *  HTTP/1.1 200 OK
 *  {
 *    "id": "1",
 *    "childId": "12345",
 *    "amount": 150.00,
 *    "paymentDate": "2024-01-15",
 *    "paymentMethod": "credit card",
 *    "description": "Updated payment for program"
 *  }
 * 
 * @apiError (404) NotFound Payment record not found.
 */
router.put("/:id", paymentsController.updatePayment);

/**
 * @api {delete} /api/payments/:id Delete a payment record by ID
 * @apiName DeletePayment
 * @apiGroup Payment
 * @apiParam {String} id The unique ID of the payment record to delete.
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
