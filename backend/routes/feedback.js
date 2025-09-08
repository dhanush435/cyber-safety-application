const express = require('express');
const router = express.Router();
const {
  getAllFeedback,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
  getFeedbackStatistics
} = require('../controllers/feedbackController');

// GET /api/feedback - Get all feedback with optional filtering
router.get('/', getAllFeedback);

// GET /api/feedback/statistics - Get feedback statistics
router.get('/statistics', getFeedbackStatistics);

// GET /api/feedback/:id - Get feedback by ID
router.get('/:id', getFeedbackById);

// POST /api/feedback - Create new feedback
router.post('/', createFeedback);

// PUT /api/feedback/:id - Update feedback
router.put('/:id', updateFeedback);

// DELETE /api/feedback/:id - Delete feedback
router.delete('/:id', deleteFeedback);

module.exports = router;
