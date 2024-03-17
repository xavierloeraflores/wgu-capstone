# Computer Science Capstone Topic Proposal

---
#### Human Subjects Disclosure
(Y/N)?
No. There will be no use of human subjects in this document or machine learning project.

#### Propriety Information Disclosure
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

### Predictive/Prescriptive Method
The project will utilize a classification model to predict whether a social media post contains racism or offensive material. It should be be able to predict with a high degree of accuracy whether a short text post contains racism or not. The model should receive a string input of the social media post's text and return out a binary classification that will be shown to users via a frontend web application. From the model's predictions, the web application will be able to toggle hide posts that are flagged as offensive. The user will by default not read offensive posts but will be able to toggle the visibility of these posts.

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

- TypeScript
- Next.js
- Tailwind CSS

### Operating System(s)/Platform(s)

Operating Systems:
Any operating system that features a modern web browser will be able to access the web application.
The machine learning model will be trained and deployed on a Linux-based operating system.

Platforms: 
- Vercel for front-end hosting
- Railway for back-end hosting
Vercel was choses as the hosting platform for the front-end for its integration with Next.js and its free hosting tier for small projects which will be sufficient for the scope of this project. Railway was chosen as the hosting platform for the back-end for its intuitive deployment/monitoring process as well as its compatibility with different frameworks.

### Database Management System

- Postgres on Vercel DB
Postgres on Vercel DB was chosen for its cheap cost and ease of use. With a SQL interface, it will be a simple task to store and retrieve social media posts.

### Estimated Development Time

| Sprint | Time |
| ------ | ----------- |
| Planning and Design | 20 hours|
| Development | 50 hours |
| Documentation | 10 hours |
| Total | 80 hours |

### Projected Completion Date
04/19/2024
---
## Implementation and Evaluation
### Approach for Executing The Project
The project will be executed in the following steps:
1. Data Collection: Utilize a dataset of social media posts from Twitter that have been labeled as on whether they contain any offensive racist material.
2. Data Preprocessing: Clean the data and prepare it for training.
3. Model Training: Using Pandas and Scikit-learn, train a machine learning model to detect racism in social media posts.,
4. Model Evaluation: Evaluate the model's performance using a test dataset.
5. Model Deployment: Create and deploy a backend FastAPI application that will serve as an API to the machine learning model.
5. Web Application Development: Create a frontend Next.js application that will demo the machine learning model's capabilities. 
6. Documentation: Document the project and its development process.