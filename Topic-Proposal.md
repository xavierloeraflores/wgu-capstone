# Computer Science Capstone Topic Proposal

---
## Propriety Information
(Y/N)?
No. There will be no use of proprietary information in this document or machine learning project.

---
## Analysis

### Project Topic and Description
Topic: Racism in Social Media

Description: With the rise in competitors to social media platforms such as Twitter, some platforms may feel it is important to maintain a safe and inclusive environment for all their users. This project will focus on creating a machine learning model that can detect racism in social media posts. The model will be trained on a dataset of social media posts from Twitter that have been labeled as on whether or not they contain any offensive racist material. The model will then be used to create a web application that will demo the machine learning model's capabilities by allowing users to post tweet-like posts to a central timeline that flags posts depending on their content. This will allow social media platforms to automatically detect and remove/hide offensive posts, reducing the amount of hate speech on their platforms. The timeline will by default hide posts that are flagged as offensive, but users will be able to toggle the visibility of these posts.



### Project Purpose and Goals
The purpose of the project is to create a machine learning model that can detect racism in offensive social media posts. This would allow social media platforms to automatically detect and remove/hide offensive posts, reducing the amount of hate speech on their platforms. The goal is to create a model that can accurately detect racism in the text of social media posts. 

### Descriptive Method

### Predictive or Prescriptive Method
The project will utilize a classification model to predict whether a social media post contains racism or offensive material. It should be be able to predict with a high degree of accuracy whether a short text post contains racism or not. The model should receive a string input of the social media post's text and out a binary classification of whether the post contains offensive racism or not.

---
## Design and Development

### Computer Science Application Type
(Mobile/Web/Standalone)
Web Application

### Programming/Development Language(s)

- Python
- Sci-kit Learn
- Pandas
- FastAPI
- Next.js
- TypeScript
- Tailwind CSS

### Operating System(s)/Platform(s)

- Vercel for front-end hosting
- Railway for back-end hosting

### Database Management System

- Postgres on Vercel DB

### Estimated Development Time

| Sprint | Time |
| ------ | ----------- |
| Planning and Design | 10 hours|
| Development | 40 hours |
| Documentation | 10 hours |
| Total | 60 hours |

### Projected Completion Date
04/19/2024
---
## Implementation and Evaluation
### Approach for Executing The Project
The project will be executed in the following steps:
1. Data Collection: Utilize a dataset of social media posts from Twitter that have been labeled as on whether or not they contain any offensive racist material.
2. Data Preprocessing: Clean the data and prepare it for training.
3. Model Training: Using Pandas and Scikit-learn, train a machine learning model to detect racism in social media posts.,
4. Model Evaluation: Evaluate the model's performance using a test dataset.
5. Model Deployment: Create and deploy a backend FastAPI application that will serve as an API to the machine learning model.
5. Web Application Development: Create a frontend Next.js application that will demo the machine learning model's capabilities. 
6. Documentation: Document the project and its development process.