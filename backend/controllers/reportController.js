const Report = require('../models/Report');
const Threat = require('../models/Threat');

exports.createReport = async (req, res, next) => {
  try {
    const { title, description, category, severity } = req.body;
    if (!title || !description || !category) {
      return res.status(400).json({ message: 'title, description, category are required' });
    }
    const report = await Report.create({
      title,
      description,
      category,
      severity: severity || 'Medium',
      reportedBy: req.user.id
    });
    return res.status(201).json(report);
  } catch (err) {
    next(err);
  }
};

exports.listReports = async (req, res, next) => {
  try {
    const reports = await Report.find().populate('reportedBy', 'name email');
    return res.json(reports);
  } catch (err) {
    next(err);
  }
};

exports.publishReportAsThreat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const report = await Report.findById(id);
    if (!report) return res.status(404).json({ message: 'Report not found' });
    report.status = 'Approved';
    await report.save();

    // Normalize category to match Threat enum
    const allowedCategories = Threat.schema.path('category').enumValues;
    const normalizedCategory = allowedCategories.includes(report.category)
      ? report.category
      : 'Social Engineering';

    // Ensure unique threat name; append suffix if a duplicate exists
    let threatName = report.title;
    const existingThreat = await Threat.findOne({ name: threatName });
    if (existingThreat) {
      threatName = `${report.title} (${new Date().toISOString().slice(0,10)})`;
    }

    // Create a Threat based on the report
    const threat = await Threat.create({
      name: threatName,
      description: report.description,
      category: normalizedCategory,
      severity: report.severity,
      prevention: [],
      recovery: [],
      examples: []
    });
    // Remove the report after successful publication
    await Report.findByIdAndDelete(id);
    return res.json({ message: 'Published', threat, removedReportId: id });
  } catch (err) {
    // Surface validation errors clearly
    if (err?.name === 'ValidationError') {
      return res.status(400).json({ message: err.message });
    }
    if (err?.code === 11000) {
      return res.status(400).json({ message: 'Threat name must be unique' });
    }
    next(err);
  }
};

exports.rejectReport = async (req, res, next) => {
  try {
    const { id } = req.params;
    const report = await Report.findById(id);
    if (!report) return res.status(404).json({ message: 'Report not found' });
    report.status = 'Rejected';
    await report.save();
    // Remove the report after rejection
    await Report.findByIdAndDelete(id);
    return res.json({ message: 'Rejected', removedReportId: id });
  } catch (err) {
    next(err);
  }
};


