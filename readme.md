# SmartBook Pro
### Multi-Business Service Booking, Queue Management & Business Intelligence Platform

## 1. Project Overview

SmartBook Pro is a web-based multi-business booking and appointment management platform designed to connect customers with service providers.

The platform allows customers to discover businesses, explore services, check availability, and book appointments online. Business owners can manage bookings, customers, services, staff, schedules, and business performance through their individual admin dashboards.

The system also aims to reduce unnecessary waiting times through appointment scheduling and basic queue management. Automated email notifications keep customers and business owners informed about booking activities.

## 2. Problem Statement

Many service-based businesses still manage appointments through phone calls, WhatsApp messages, or manual registers.

This creates several problems:

- Double bookings and scheduling conflicts.
- Long customer waiting times.
- Difficulty managing daily appointments.
- Lost customer records.
- Manual appointment confirmation.
- Limited information about business performance.
- Difficulty understanding local market competition.

SmartBook Pro aims to solve these problems through a centralized digital booking and management platform.

## 3. Project Objectives

The main objectives are:

1. Develop a multi-business online booking platform.
2. Allow customers to book services online.
3. Provide a separate dashboard for every registered business.
4. Prevent appointment scheduling conflicts.
5. Automate booking confirmation and email notifications.
6. Improve appointment and queue management.
7. Maintain customer and booking records.
8. Provide business analytics and reports.
9. Introduce competitor insights using publicly available information.
10. Develop a secure and scalable web application.

## 4. Target Users

### Customers
Customers can discover businesses, explore services, book appointments, manage bookings, and receive notifications.

### Business Administrators
Business owners can manage their business profiles, services, staff, schedules, customers, bookings, and reports.

### Platform Super Administrator
The Super Admin can manage registered businesses, platform users, categories, and overall platform activity.

## 5. Main Features

### 5.1 Customer Features

- Customer registration and login.
- Business discovery and search.
- Business profile viewing.
- Service details and pricing.
- Staff selection where applicable.
- Real-time appointment availability.
- Online appointment booking.
- Automatic booking confirmation.
- Unique booking reference.
- Booking history.
- Appointment cancellation.
- Appointment rescheduling.
- Email notifications.
- Customer profile management.
- Business reviews and ratings.
- Favourite businesses.

### 5.2 Business Admin Dashboard

Each registered business receives an independent dashboard.

Features include:

- Business profile management.
- Daily and upcoming bookings.
- Booking calendar.
- Booking status management.
- Customer information management.
- Service creation and editing.
- Service pricing management.
- Staff management.
- Staff availability and schedules.
- Business opening hours.
- Break and holiday management.
- Manual and walk-in bookings.
- Booking cancellation and rescheduling.
- Revenue tracking.
- Booking reports.
- Customer reviews management.
- Data export.

### 5.3 Booking Management System

The booking system allows customers to select a service, staff member, date, and available time.

The backend checks availability before confirming the appointment.

Main functionality:

- Availability checking.
- Service duration calculation.
- Staff availability checking.
- Appointment conflict prevention.
- Automatic booking reference generation.
- Booking confirmation.
- Booking cancellation.
- Booking rescheduling.
- Booking status tracking.

### 5.4 Queue Management

The platform aims to reduce unnecessary customer waiting.

Features include:

- Appointment-based scheduling.
- Customer check-in.
- Queue position.
- Estimated waiting time.
- Service progress tracking.
- Delay notifications.
- Walk-in customer management.
- Waiting list management.
- No-show tracking.

Waiting times are estimates and may change depending on actual service progress.

### 5.5 Email Automation

The system uses automated email notifications to communicate booking updates.

Planned email notifications:

- Account verification.
- Welcome email.
- Booking confirmation.
- New booking notification for business owners.
- Appointment reminders.
- Booking cancellation.
- Booking rescheduling.
- Payment confirmation.
- Service completion.
- Review request.

Email delivery logs and retry handling will help manage failed notifications.

### 5.6 Competitor Insights

The platform aims to provide useful market information to registered businesses.

Planned features:

- Discovery of similar businesses.
- Nearby business comparisons.
- Public service price comparisons.
- Service category comparisons.
- Public ratings and reviews.
- Popular service categories.
- General market trends.

Competitor insights will use publicly available or properly authorized information. Private competitor bookings, customer records, and confidential business revenue will never be exposed.

### 5.7 Business Analytics

Business administrators will be able to understand their business performance through reports and charts.

Analytics include:

- Total bookings.
- Daily, weekly, and monthly bookings.
- Completed appointments.
- Cancelled appointments.
- No-show appointments.
- Popular services.
- Recorded revenue.
- Returning customers.
- New customers.
- Peak booking hours.
- Peak booking days.
- Staff performance.
- Customer ratings.
- Booking trends.

### 5.8 Payment and Invoice Management

Planned payment-related functionality:

- Payment status tracking.
- Cash and online payment records.
- Payment history.
- Invoice generation.
- Booking payment details.
- Revenue reports.

Online payment gateway integration may be added depending on project requirements.

### 5.9 Super Admin Dashboard

The platform Super Admin will manage the overall application.

Features include:

- View registered businesses.
- Approve or suspend businesses.
- Manage platform users.
- Manage business categories.
- View platform statistics.
- Monitor platform activity.
- Manage reports.
- Manage subscription plans if introduced.

## 6. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5 |
| Styling | CSS3 |
| UI Framework | Bootstrap 5 |
| Frontend Programming | JavaScript |
| Backend | Node.js |
| Backend Framework | Express.js |
| Database | MongoDB |
| Authentication | JSON Web Token (JWT) |
| Password Security | bcrypt |
| Email Automation | Nodemailer |
| Email Service | SMTP Provider |
| Scheduled Tasks | Node-Cron |
| Charts | Chart.js |
| API Testing | Postman |
| Version Control | Git |
| Code Hosting | GitHub |

## 7. System Architecture

SmartBook Pro follows a client-server architecture.

### Frontend Layer

The frontend provides interfaces for customers, business administrators, and the platform Super Admin.

Responsibilities:

- Display business profiles.
- Show services and availability.
- Handle customer interactions.
- Submit booking requests.
- Display dashboards and reports.

### Backend Layer

The backend handles application logic and business rules.

Responsibilities:

- Authentication and authorization.
- Business management.
- Booking management.
- Availability calculations.
- Conflict prevention.
- Email notifications.
- Analytics processing.
- API request validation.

### Database Layer

MongoDB stores application data.

Responsibilities:

- User records.
- Business information.
- Services and staff.
- Appointment records.
- Customer information.
- Payment records.
- Reviews and notifications.

### Automation Layer

The automation layer handles scheduled and event-based tasks.

Responsibilities:

- Booking confirmation emails.
- Appointment reminders.
- Cancellation notifications.
- Scheduled background jobs.
- Email delivery logs.

## 8. Database Design

The following collections are planned for MongoDB.

| Collection | Purpose |
|---|---|
| users | Customer and administrator accounts |
| businesses | Registered business information |
| categories | Business categories |
| services | Services offered by businesses |
| staff | Business staff information |
| staffSchedules | Staff working schedules |
| bookings | Customer appointments |
| slotLocks | Temporary appointment slot reservations |
| bookingEvents | Booking activity history |
| payments | Payment records |
| reviews | Customer reviews and ratings |
| notifications | User notifications |
| emailLogs | Email delivery records |
| emailJobs | Scheduled email tasks |
| coupons | Discount codes |
| invoices | Customer invoices |
| activityLogs | System activity records |

### Database Relationships

- A user can create multiple bookings.
- A business can offer multiple services.
- A business can manage multiple staff members.
- A service belongs to a business.
- A booking belongs to a customer and a business.
- A booking can reference a service and staff member.
- A payment belongs to a booking.
- A review belongs to a customer and business.

Every business-owned record must be associated with the correct business ID to maintain data separation.

## 9. API Architecture

The backend will provide RESTful APIs.

Base URL:

`/api/v1`

### Authentication APIs

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /auth/register | Register account |
| POST | /auth/login | Login |
| POST | /auth/logout | Logout |
| POST | /auth/forgot-password | Request password reset |
| POST | /auth/reset-password | Reset password |
| GET | /auth/profile | Get logged-in user |

### Business APIs

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /businesses | Get businesses |
| GET | /businesses/:id | Get business details |
| POST | /businesses | Create business |
| PUT | /businesses/:id | Update business |
| DELETE | /businesses/:id | Delete business |

### Service APIs

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /businesses/:id/services | Get business services |
| POST | /services | Create service |
| PUT | /services/:id | Update service |
| DELETE | /services/:id | Delete service |

### Staff APIs

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /businesses/:id/staff | Get staff |
| POST | /staff | Add staff |
| PUT | /staff/:id | Update staff |
| DELETE | /staff/:id | Remove staff |

### Booking APIs

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /availability | Check availability |
| POST | /bookings | Create booking |
| GET | /bookings | Get bookings |
| GET | /bookings/:id | Get booking details |
| PUT | /bookings/:id | Update booking |
| PATCH | /bookings/:id/cancel | Cancel booking |

### Payment APIs

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /payments | Record payment |
| GET | /payments | Get payment records |
| GET | /payments/:id | Get payment details |

### Review APIs

| Method | Endpoint | Purpose |
|---|---|---|
| POST | /reviews | Submit review |
| GET | /businesses/:id/reviews | Get business reviews |

### Analytics APIs

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /analytics/overview | Dashboard overview |
| GET | /analytics/bookings | Booking reports |
| GET | /analytics/revenue | Revenue reports |
| GET | /analytics/services | Popular services |

These endpoints describe the planned API structure. They will be implemented and adjusted during development.

## 10. Security Requirements

Security is an important part of SmartBook Pro.

Planned security measures:

- Password hashing using bcrypt.
- JWT-based authentication.
- Role-based access control.
- Business-level data isolation.
- Input validation.
- Secure API endpoints.
- Environment variables for sensitive credentials.
- API rate limiting.
- Secure password reset.
- Protection against unauthorized access.
- Booking conflict prevention.
- Activity logging.
- Database backup strategy.

Business administrators must only be able to access information belonging to their own businesses.

## 11. Important Technical Challenges

The project will involve several practical programming challenges.

### Appointment Availability Algorithm

Calculate available appointment times based on:

- Service duration.
- Business opening hours.
- Staff schedules.
- Existing bookings.
- Break times.
- Holidays.
- Booking intervals.

### Double Booking Prevention

The system must prevent two customers from reserving overlapping appointments for the same staff member.

A simple availability check is not sufficient because two requests can arrive simultaneously. The implementation will use database-level protection and atomic reservation logic.

### Multi-Tenant Data Management

Each business must have independent data access.

A business administrator must never be able to access another business's private records.

### Email Automation

The application must send notifications after important booking events and handle failed email deliveries.

### Timezone Management

Booking timestamps will be stored consistently, preferably in UTC, and displayed using the relevant business timezone.

## 12. Learning Outcomes

This project is designed to improve practical software development skills.

### Frontend Development

- HTML structure.
- CSS styling.
- Bootstrap components.
- Responsive design.
- JavaScript programming.
- Form validation.
- API integration.
- Dynamic content rendering.

### Backend Development

- Node.js fundamentals.
- Express.js.
- REST API development.
- Authentication.
- Authorization.
- Middleware.
- Error handling.
- Backend validation.

### Database Development

- MongoDB.
- Database schema design.
- CRUD operations.
- Relationships and references.
- Query optimization.
- Indexing.
- Data validation.

### Advanced Programming Concepts

- Appointment availability algorithms.
- Date and time calculations.
- Concurrency handling.
- Double-booking prevention.
- Multi-tenant architecture.
- Background jobs.
- Email automation.
- Role-based security.

### Software Engineering Skills

- Software Requirements Specification (SRS).
- System architecture.
- Database design.
- API documentation.
- Testing and debugging.
- Git and GitHub.
- Deployment.
- Technical documentation.

## 13. Development Methodology

The project will be developed in structured phases.

1. Requirement gathering.
2. System analysis.
3. UI/UX design.
4. Database design.
5. Frontend development.
6. Backend development.
7. API integration.
8. Booking algorithm development.
9. Email automation.
10. Testing and debugging.
11. Deployment.
12. Final documentation.

## 14. Five-Month Development Roadmap

| Month | Development Tasks |
|---|---|
| Month 1 | Requirements, SRS, UI/UX, database design, project setup |
| Month 2 | Frontend development, authentication, business profiles, services |
| Month 3 | Booking system, availability algorithm, staff schedules, conflict prevention |
| Month 4 | Admin dashboard, email automation, queue management, analytics basics |
| Month 5 | Testing, security improvements, deployment, documentation, final presentation |

Advanced features such as competitor insights, subscriptions, and payment gateway integration will be attempted after the core booking system is stable.

## 15. Testing Strategy

The application will be tested throughout development.

Planned testing:

- Registration and login testing.
- Authentication and authorization testing.
- Business profile testing.
- Service management testing.
- Booking creation testing.
- Availability testing.
- Double-booking testing.
- Cancellation and rescheduling testing.
- Email notification testing.
- Dashboard testing.
- Tenant data isolation testing.
- Responsive design testing.
- API testing using Postman.

## 16. Expected Outcomes

At the end of development, SmartBook Pro is expected to provide:

- A working multi-business booking platform.
- Separate business profiles.
- Customer registration and login.
- Online appointment booking.
- Business admin dashboards.
- Appointment availability checking.
- Double-booking prevention.
- Automated email notifications.
- Basic queue management.
- Business analytics.
- A platform Super Admin dashboard.

## 17. Future Scope

Possible future improvements include:

- Mobile application.
- AI-powered business recommendations.
- Advanced competitor intelligence.
- Online payment gateway integration.
- SMS and WhatsApp notifications.
- Subscription-based business plans.
- Multiple business branches.
- Advanced customer loyalty system.
- Advanced demand forecasting.
- Multilingual support.

## 18. Project Folder Structure

The following is the proposed folder structure:

```text
SmartBook-Pro/
│
├── client/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── businesses.html
│   ├── business-details.html
│   ├── booking.html
│   ├── customer-dashboard.html
│   │
│   ├── admin/
│   │   ├── dashboard.html
│   │   ├── bookings.html
│   │   ├── services.html
│   │   ├── staff.html
│   │   └── settings.html
│   │
│   ├── css/
│   ├── js/
│   └── assets/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── jobs/
│   ├── app.js
│   └── server.js
│
├── .gitignore
└── README.md
```

This structure may change as development progresses.

## 19. Installation and Setup

### Prerequisites

Install the following:

- Node.js
- npm
- MongoDB Atlas account or local MongoDB
- Visual Studio Code
- Git
- Postman

### Clone Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### Navigate to Project

```bash
cd SmartBook-Pro
```

### Install Backend Dependencies

```bash
cd server
npm install
```

### Configure Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret

SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_email_app_password

CLIENT_URL=http://localhost:3000
```

Never upload the `.env` file or expose private credentials on GitHub.

### Run Development Server

```bash
npm run dev
```

The exact commands will depend on the scripts configured in `server/package.json`.

## 20. Development Principles

The project will follow these principles:

- Write understandable and maintainable code.
- Use reusable components and functions.
- Keep frontend and backend responsibilities separate.
- Validate user input.
- Protect sensitive information.
- Maintain proper database relationships.
- Test APIs during development.
- Use Git for version control.
- Document important functionality.
- Prioritize core features before advanced features.

## 21. Academic Project Information

**Project Name:** SmartBook Pro

**Project Type:** Final Year Project

**Project Category:** Web-Based Software Application

**Primary Domain:** Web Development and Software Engineering

**Frontend:** HTML, CSS, Bootstrap 5, JavaScript

**Backend:** Node.js and Express.js

**Database:** MongoDB

## 22. Conclusion

SmartBook Pro is designed to provide a practical digital solution for service-based businesses by combining online appointment booking, business management, queue handling, automated notifications, and analytics.

The project will provide hands-on experience in frontend development, backend programming, database management, API development, authentication, algorithms, automation, testing, and deployment.

The main goal is not only to build a working application but also to develop strong practical software engineering skills through the complete development lifecycle.

---

**SmartBook Pro — Simplifying Appointments, Improving Business Operations.**