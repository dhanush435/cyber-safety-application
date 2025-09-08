const Threat = require('../models/Threat');

// Get all threats
const getAllThreats = async (req, res) => {
  try {
    const { category, severity, search } = req.query;
    let query = {};

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Filter by severity
    if (severity) {
      query.severity = severity;
    }

    // Search by name or description
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const threats = await Threat.find(query).sort({ createdAt: -1 });
    res.json(threats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get threat by ID
const getThreatById = async (req, res) => {
  try {
    const threat = await Threat.findById(req.params.id);
    if (!threat) {
      return res.status(404).json({ message: 'Threat not found' });
    }
    res.json(threat);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new threat
const createThreat = async (req, res) => {
  try {
    const threat = new Threat(req.body);
    await threat.save();
    res.status(201).json(threat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update threat
const updateThreat = async (req, res) => {
  try {
    const threat = await Threat.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!threat) {
      return res.status(404).json({ message: 'Threat not found' });
    }
    res.json(threat);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete threat
const deleteThreat = async (req, res) => {
  try {
    const threat = await Threat.findByIdAndDelete(req.params.id);
    if (!threat) {
      return res.status(404).json({ message: 'Threat not found' });
    }
    res.json({ message: 'Threat deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get threat categories
const getThreatCategories = async (req, res) => {
  try {
    const categories = await Threat.distinct('category');
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get threat statistics
const getThreatStatistics = async (req, res) => {
  try {
    const stats = await Threat.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
          avgSeverity: { $avg: { $switch: {
            branches: [
              { case: { $eq: ['$severity', 'Low'] }, then: 1 },
              { case: { $eq: ['$severity', 'Medium'] }, then: 2 },
              { case: { $eq: ['$severity', 'High'] }, then: 3 },
              { case: { $eq: ['$severity', 'Critical'] }, then: 4 }
            ],
            default: 0
          }}}
        }
      }
    ]);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllThreats,
  getThreatById,
  createThreat,
  updateThreat,
  deleteThreat,
  getThreatCategories,
  getThreatStatistics
};
