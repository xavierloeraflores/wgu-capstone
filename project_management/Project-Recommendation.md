# Project Recommendation

## Problem Summary

The Social Club L.L.C's social media platform is currently facing numerous issues that are hindering growth, hurting user experiences, and costing the company vast amounts of resources. Large amounts of user-generated content are being uploaded daily at an exponential rate which consequentially means more content that goes against the platform's moderation policies is also being uploaded as well. The company's moderation efforts are unable to keep pace with the increase in the amount of moderation request tickets to be processed by the moderation team. As a result, the platform is facing a backlog of moderation ticket requests, and a decrease in the quality of moderation for posts on the platform. While the company can attempt to scale the moderation team to meet the demand, this would be costly and inefficient. The company needs a more scalable and efficient solution to address the issue of inappropriate content on the platform.

## Application Benefits

The machine learning content moderation system will benefit the Social Club L.L.C. in several ways. Firstly, it will help reduce the workload of the moderation team by automatically identifying inappropriate content, allowing the moderation team to focus on reviewing appealed content rather than addressing every report ticket. Secondly, it will help improve the quality of moderation on the platform by providing consistent and accurate moderation decisions in an instant without needing a user to report the content. Finally, it will help improve the user experience on the website by allowing users to have vital content filtering information before they post. Once implemented, there should be a reduction in the amount of publicly visible inappropriate content on the platform and a lower amount of strain on the moderation team.

## Application Description

The application will be a full-stack web application that allows users to make posts to the timeline feed. Every post will be automatically moderated for offensive content the moment the user makes the post. All users will be able to see the public feed and see if posts were marked for offensive content. Users will also be allowed to explore all previous posts to see how these posts were flagged by the machine learning model. Additionally, users will be able to preview whether their posts are offensive without making their content public. At first, most users will not be able to read the contents of offensive posts but can opt-in to gain the ability to view offensive content at their discretion.

## Data Description

The machine learning model will be trained on data that will be gathered from data stored on the company's platform. The data will consist of content posted by users that has been categorized for offensive content. Each data point will consist only of content in the social media post, the identifier of the post, and a label indicating whether the content is safe or offensive. For the purposes of the project demo, data will be sourced from 2 datasets from Kaggle containing over 50 thousand posts combined that have been categorized based on content. All of the posts are text only and none of the posts contain any personal information or metadata that could be used to identify individuals who posted the content.

## Objectives & Hypothesis

The main objective of the model will be to categorize new posts for moderation, allowing a large portion of moderation to be automated. Once implemented there should be a reduction in the amount of publicly visible inappropriate content on the platform resulting in an improved user experience. The model will be implemented using logistic regression and unsupervised training on labeled data. Hypothetically, the model will be able to accurately categorize new posts based on the patterns in the data that it has learned during training. The model will be evaluated based on its accuracy in categorizing new posts and its ability to increase the efficiency of the moderation team.

## Methodology

### Project Management Methodology

Since the goal is to implement a solution that includes a model trained with supervised data, the development of the model will adhere to a waterfall style of project management. This is because the project has a clear goal and requirements that can be defined at the beginning of the project and do not require frequent changes. Once the project has been deployed and released, we can revisit potentially switching to an agile approach if we plan to continue improving the model with new features and updates. The waterfall approach will allow the development team to focus on the implementation of the model and ensure that it meets the requirements of the project.

### Standard Methodology

Cross-Industry Standard Process for Data Mining, also known as (CRISP-DM), will be used as the standard methodology for the project since it is a widely used and accepted methodology for machine learning projects and provides a structured approach for proceeding with the project.

CRISP-DM is a 6-phase process that includes the following phases:

- Business Understanding: The Social Club L.L.C. needs a machine learning solution to help reduce the workload of the moderation team and to improve the quality of the moderation for users on the platform. This would not only save time and resources for the company but would also drive growth and user engagement on the platform.

- Data Understanding: The data used to train the model will need to be user-generated content to allow the model to learn patterns in the data and make predictions on new data for offensive content detection.

- Data Preparation: The data will need to be cleaned, categorized, and preprocessed before it can be used for modeling. Data will be categorized based on the content within the posts to be used for training the model. The data will also be cleaned to remove common stop words, symbols, and other irrelevant data that may not be useful for the model.

- Modeling: Using logistic regression and supervised learning, the model will be trained to accurately categorize the posts based on the offensiveness of the content. This will allow the model to predict new posts and categorize whether they are offensive or not.

- Evaluation: The solution will be evaluated to ensure that it meets the requirements and objectives of the project. This will involve testing the model with new data to ensure that it is accurately categorizing the content and saving the human moderation team time.

- Deployment: The machine learning solution will be deployed as a backend service that will be utilized within a full-stack application where users can post content under the moderation of the model.

## Budget

The following section represents the proposed estimated budget for the project including a cost breakdown for development and maintenance. Labor costs are separated into the categories of engineering labor, project management labor, and maintenance labor. A consolidated hardware and resources cost is also included as well as the ongoing estimated cost for cloud usage. A full breakdown of the labor cost is provided in this budget proposal.

Development Cost Overview Breakdown:
| Resource | Cost |
| ------------------------------- | -------------------- |
| Engineering Labor | $100K-150K |
| Project Management Labor | $20K-30K |
| Hardware & Resources Cost | $30K |
| Upfront Cost Total | ~$150K-200K |

Ongoing Cost Breakdown:
| Resource | Cost |
| ------------------------------- | -------------------- |
| Cloud Server Usage | ~$35K-45K Monthly |
| Maintenance Engineering Labor | $10K-15K Monthly |
| On-Going Total | ~$45K-60k Monthly |

The following labor cost full breakdown estimates are based on the salaries of the individual respective roles. The real cost is calculated based on a 3-month development timeline.

Labor Cost Breakdown:
| Type | Role | Salary | Real Cost |
| ----------------- | ------------------------- | ------------- | ---------------------- |
| Engineering Labor | Machine Learning Engineer | $100K - $150K | $25k - $37.5K |
| Engineering Labor | Machine Learning Engineer | $100K - $150K | $25k - $37.5K |
| Engineering Labor | Fullstack Engineer | $100K - $150K | $25k - $37.5K |
| Engineering Labor | Backend Engineer | $100K - $150K | $25k - $37.5K |
| Management Labor | Project Manager | $80K - $120K | $20k - $30K |
| Maintenance Labor | Senior IT Analyst | $84K - $126K | $7K - $10.5K Monthly |
| Maintenance Labor | IT Analyst | $50K - $75K | $1.5k - $2.25K Monthly |
| Maintenance Labor | IT Analyst | $50K - $75K | $1.5k - $2.25K Monthly |

## Timeline

A rough estimate of the project timeline is as follows:

Sprint Timeline Overview:
|Sprint| Dates | Task |
|------|-------|------|
| 1 | 04/01/2024 - 04/08/2024 | Project Planning |
| 2 | 04/08/2024 - 04/22/2024 | Data Collection |
| 3 | 04/22/2024 - 05/06/2024 | Data Preparation |
| 4 | 05/06/2024 - 05/27/2024 | Model Training |
| 5 | 05/27/2024 - 06/10/2024 | Integration & Testing |
| 6 | 06/10/2024 - 06/17/2024 | Evaluation |
| 7 | 06/17/2024 - 07/01/2024 | Model Deployment |

- Sprint 1 Project Planning: Define the project requirements such as scope, goals, budget, timeline, and team
- Sprint 2 Data Collection: Identify collect, and store the data needed for the project
- Sprint 3 Data Preparation: Clean, format, and validate the data to prepare for model training
- Sprint 4 Model Training: Set up, train, debug, optimize, and validate the machine learning model
- Sprint 5 Integration & Testing: Integrate the model with the platform and develop a testing/maintenance plan
- Sprint 6 Evaluation: Monitor and collect feedback from a small subset of users with access to the model for evaluation
- Sprint 7 Model Deployment: Release the feature to all users, and begin monitoring, surveying, and documenting the system

## Data Precautions

The data used for training the model will be carefully selected to adhere to company policies and legal regulations. Beyond ensuring that data will be collected ethically in accordance with the company's privacy policy, the data will also be anonymized to protect the privacy of the users. During the cleaning process, content in posts will be altered to remove any mentions of other users as well as any personal information that could be used to identify individuals. It is also important to note that we only used publicly available data and did not use any private data in the training of the model. The machine learning model will not use any metadata or personal information to make predictions on the content of the posts. Predictions are made purely based on the content of the posts and the patterns in the data that the model has learned during training.

## Expertise

The team is comprised of experienced and versatile engineers with strong backgrounds in their respective disciplines. The team comprises of 2 machine learning engineers, 1 full-stack engineer, 1 dedicated backend engineer, and a project manager all with high-level degrees in computer science or data science and at least 3 years of experience delivering end-to-end machine learning solutions at large scale. The team has worked on similar projects in the past and has the expertise to deliver a high-quality machine-learning solution that meets the requirements of the project. Every member of the team including myself is dedicated to the success of the project and will work diligently to ensure that the project is delivered on time and within budget.
