const router = require('express').Router();
const { requireAuth, requireRole } = require('../middleware/auth');
const { createReport, listReports, publishReportAsThreat, rejectReport } = require('../controllers/reportController');

// User: create a report
router.post('/', requireAuth, createReport);

// Admin: list all reports
router.get('/', requireAuth, requireRole('admin'), listReports);

// Admin: publish report as threat
router.post('/:id/publish', requireAuth, requireRole('admin'), publishReportAsThreat);

// Admin: reject report
router.post('/:id/reject', requireAuth, requireRole('admin'), rejectReport);

module.exports = router;


