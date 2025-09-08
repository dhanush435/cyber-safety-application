const mongoose = require('mongoose');

const threatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Phishing', 'Ransomware', 'Identity Theft', 'Malware', 'Social Engineering', 'Data Breach', 'DDoS', 'Man-in-the-Middle', 'SQL Injection', 'Cross-Site Scripting']
  },
  severity: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High', 'Critical']
  },
  prevention: [{
    title: String,
    description: String
  }],
  recovery: [{
    title: String,
    description: String
  }],
  examples: [String],
  statistics: {
    affectedUsers: Number,
    financialLoss: String,
    frequency: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

threatSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Threat', threatSchema);
