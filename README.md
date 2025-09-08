# Cyber Safety Awareness Web Application

A comprehensive MERN stack application designed to educate users about cyber threats, provide preventive measures, and guide recovery methods. This platform helps individuals and organizations stay informed about the latest cybersecurity risks and learn how to protect themselves.

## 🚀 Features

- **Comprehensive Threat Database**: Detailed information about various cyber threats including phishing, ransomware, identity theft, and more
- **Search & Filter**: Advanced search and filtering capabilities to quickly find specific threats
- **Educational Content**: Prevention methods and recovery strategies for each type of cyber threat
- **User Feedback System**: Community-driven feedback and support system
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Real-time Statistics**: Up-to-date threat statistics and impact data

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework

## 📁 Project Structure

```
cyber-safety-app/
├── backend/
│   ├── models/           # MongoDB schemas
│   │   ├── Threat.js
│   │   └── Feedback.js
│   ├── controllers/      # Business logic
│   │   ├── threatController.js
│   │   └── feedbackController.js
│   ├── routes/          # API routes
│   │   ├── threats.js
│   │   └── feedback.js
│   ├── server.js        # Express app entry point
│   └── seedData.js      # Database seeding script
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── pages/       # Page components
│   │   │   ├── Home.js
│   │   │   ├── Threats.js
│   │   │   ├── ThreatDetail.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   ├── services/    # API services
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── public/
│       └── index.html
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cyber-safety-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**
   
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/cyber-safety-app
   PORT=5000
   NODE_ENV=development
   ```

5. **Seed the database**
   ```bash
   cd backend
   node seedData.js
   ```

6. **Start the backend server**
   ```bash
   npm start
   # or for development with auto-restart
   npm run dev
   ```

7. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 📚 API Endpoints

### Threats
- `GET /api/threats` - Get all threats (with optional filtering)
- `GET /api/threats/:id` - Get threat by ID
- `POST /api/threats` - Create new threat
- `PUT /api/threats/:id` - Update threat
- `DELETE /api/threats/:id` - Delete threat
- `GET /api/threats/categories` - Get all threat categories
- `GET /api/threats/statistics` - Get threat statistics

### Feedback
- `GET /api/feedback` - Get all feedback (with optional filtering)
- `GET /api/feedback/:id` - Get feedback by ID
- `POST /api/feedback` - Create new feedback
- `PUT /api/feedback/:id` - Update feedback
- `DELETE /api/feedback/:id` - Delete feedback
- `GET /api/feedback/statistics` - Get feedback statistics

### Health Check
- `GET /api/health` - API health status

## 🎯 Usage

1. **Browse Threats**: Visit the Threats page to explore the comprehensive database of cyber threats
2. **Search & Filter**: Use the search bar and filters to find specific threats by category, severity, or keywords
3. **Learn Prevention**: Each threat includes detailed prevention methods to help you stay protected
4. **Recovery Guidance**: If you've been affected, follow the recovery steps provided for each threat
5. **Get Support**: Use the Contact page to reach out for help or report new threats

## 🔧 Development

### Backend Development
- The backend uses Express.js with MongoDB
- Controllers handle business logic
- Models define data schemas
- Routes define API endpoints

### Frontend Development
- Built with React.js and functional components
- Uses React Router for navigation
- Tailwind CSS for styling
- Axios for API communication

### Database Seeding
The `seedData.js` script populates the database with sample threat data. Run it with:
```bash
node seedData.js
```

## 🚀 Deployment

### Backend Deployment
1. Set up a MongoDB database (MongoDB Atlas recommended)
2. Update the `MONGODB_URI` in your environment variables
3. Deploy to platforms like Heroku, Railway, or Render

### Frontend Deployment
1. Build the production version: `npm run build`
2. Deploy to platforms like Netlify, Vercel, or AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the existing issues in the repository
2. Create a new issue with detailed information
3. Contact us through the Contact page

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Admin dashboard for threat management
- [ ] Real-time threat alerts
- [ ] Mobile app development
- [ ] Advanced analytics and reporting
- [ ] Integration with threat intelligence feeds
- [ ] Multi-language support

---

**Stay Safe Online! 🛡️**
