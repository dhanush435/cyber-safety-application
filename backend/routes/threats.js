const express = require('express');
const router = express.Router();
const {
  getAllThreats,
  getThreatById,
  createThreat,
  updateThreat,
  deleteThreat,
  getThreatCategories,
  getThreatStatistics
} = require('../controllers/threatController');
const { requireAuth, requireRole } = require('../middleware/auth');

// GET /api/threats - Get all threats with optional filtering
router.get('/', getAllThreats);

// GET /api/threats/categories - Get all threat categories
router.get('/categories', getThreatCategories);

// GET /api/threats/statistics - Get threat statistics
router.get('/statistics', getThreatStatistics);

// GET /api/threats/:id - Get threat by ID
router.get('/:id', getThreatById);

// POST /api/threats - Create new threat (admin only)
router.post('/', requireAuth, requireRole('admin'), createThreat);

// PUT /api/threats/:id - Update threat (admin only)
router.put('/:id', requireAuth, requireRole('admin'), updateThreat);

// DELETE /api/threats/:id - Delete threat (admin only)
router.delete('/:id', requireAuth, requireRole('admin'), deleteThreat);

module.exports = router;
