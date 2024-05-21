# Project Proposal Plan

## Project Summary

### Problem Description

The Social Club L.L.C. is experiencing significant challenges with moderating user-generated content on its social media platform. The exponential increase in content has led to an overwhelming number of moderation requests, resulting in a backlog and a decline in moderation quality. Scaling the moderation team is not a feasible solution due to high costs and inefficiency. Thus, the company requires a more scalable and efficient method to manage inappropriate content and improve user experience.

### Client Summary and Needs

The Social Club L.L.C. is a social media company that needs an automated content moderation solution to handle the vast amounts of user-generated content. The primary goals include:

- Reducing the workload on the moderation team.
- Improving the quality and consistency of content moderation.
- Enhancing user experience by minimizing exposure to inappropriate content.
- Providing users with content filtering options before posting.

### Deliverables

#### Data Handling and Processing

- Collection and preprocessing of user-generated content data for model training.
- Ensuring data privacy by anonymizing and cleaning the data.

#### Machine Learning Model

- A logistic regression model trained on labeled data to identify and categorize offensive content.
- The model will be integrated into the backend of the web application to provide real-time moderation.

#### Full-Stack Web Application

- A platform for users to post content to a timeline feed.
- Automatic moderation of posts for offensive content upon submission.
- Public feed displaying content with moderation indicators.
- Functionality for users to preview the potential offensiveness of their posts.
- Opt-in feature for users to view flagged content.

#### Documentation

- A comprehensive user guide detailing how to use the application and its features.
- Technical documentation for the development and maintenance of the machine learning model and application.

### Benefits Justification

The machine learning content moderation system will significantly benefit The Social Club L.L.C. by:

- Efficiency: Automating the moderation process reduces the workload on the moderation team, allowing them to focus on reviewing appeals.
- User Experience: Ensuring consistent, fast, and accurate moderation decisions improves the overall quality of content on the platform by hiding content as it's uploaded quickly filtering out inappropriate content, and providing users with pre-posting feedback on potential content issues.
- Scalability: Offering a scalable solution that can handle the growing amount of content without proportional increases in moderation costs or the need to mass hire new team members.
- Cost-Effectiveness: By reducing the need for extensive human moderation, the company will be saving on operational costs.
  By implementing this solution, The Social Club L.L.C. can address its content moderation challenges effectively, improving both platform integrity and user satisfaction.

## Data Summary

### Data Source and Collection

The machine learning model will be trained on data that will be gathered from data stored on the company's platform. The data will consist of content posted by users that has been categorized for offensive content. For this demo project, we will source our data from two publicly available datasets on Kaggle, which together contain over 50,000 posts combined. These datasets have already been categorized based on content on whether the content is safe or offensive. The data points will consist of the text of the posts, the ID of each post, and a boolean label containing its classification. Importantly, the data will have no personal information or metadata that could identify individuals.

### Data Processing and Management

Design Phase: During the design phase, we will define the structure and requirements of our dataset, ensuring it aligns with our model's needs. The following data schema represents how we will store the data:

- text (string): The text content of the social media post
- id (number): A unique identifier
- is_nsfw (boolean): A flag indicating if it is offensive (true) or safe (false)

Development Phase: In the development phase, data preprocessing will be critical. This includes:

- Data Cleaning: Removing mentions of other users and any personal information to ensure anonymity.
- Data Normalization: Standardizing the format of the text (e.g., lowercasing, removing special characters) to maintain consistency.
- Data Splitting: Dividing the dataset into training, validation, and test sets to evaluate the model's performance accurately.

Maintenance Phase: During maintenance, we will continuously monitor the data and model performance. This involves:

- Updating the Dataset: Saving new data posted to the platform to prepare in case we need to retain the model.
- Handling Anomalies: Identifying and managing data anomalies such as outliers or incomplete data.
- Re-training the Model: The model can be retrained with the updated dataset to ensure it adapts to evolving patterns in offensive content.

### Justification of Data Suitability

The chosen datasets from Kaggle are well-suited for our project due to their large dataset size and categorized data. The data also features no personal information and metadata which ensures that our model's predictions are based solely on the content of the posts and not on other contextual factors.In order to handle data anomalies, we will need to clean and preprocess the data which contains a large amounts of words and symbols that are irrelevant. Outliers and incomplete data will be managed through preprocessing steps, ensuring the integrity and quality of the dataset.

### Ethical and Legal Considerations

Our data handling and processing protocols are designed to adhere strictly to ethical guidelines, legal regulations, and company policy.

- Privacy: Data will be anonymized by removing personal information and user mentions.
- Ethical Sourcing: Only publicly available data will used while abiding by our privacy policy.
- Transparency: Clear documentation of data sources and collection practices will be made public.

There are no significant ethical or legal concerns with our data as we will ensure that all data is anonymized and ethically sourced. By focusing solely on publicly available data and removing any potentially identifying information, we comply with privacy laws and ethical standards. The users of the platform can read about the data collection process and opt out of data collection for training purposes. In summary, the data we will source from Kaggle for the demo and the data we will source from our users will ensure that we meet the project's needs effectively while upholding the highest ethical and legal standards.

## Implementation

### Project Management Methodology

Since the goal is to implement a solution that includes a model trained with supervised data, we will adhere to a waterfall project management approach especially given the project’s clear goals and well-defined requirements. This approach allows us to systematically progress through each development phase, ensuring all specifications are met before moving forward. Once the model is deployed, we may revisit and transition to an agile methodology to accommodate iterative improvements and feature enhancements if the company sees success in the implementation of the service. This initial waterfall approach will ensure the development team can focus on meeting the precise project requirements before iterating on future enhancements.

### Standard Methodology

Cross-Industry Standard Process for Data Mining, also known as (CRISP-DM), will be used as the standard methodology for the project since it is wifely used for machine learning projects and provides a structured approach for proceeding with the project.

CRIPS-DM is a 6-phase process that includes the following phases:

- Business Understanding: The Social Club L.L.C. needs a automatic machine learning service to help reduce the workload of the moderation team and to improve the quality of the moderation for users on the platform. This would not only save time and resources for the company but would also drive growth and user engagement on the platform.

- Data Understanding: The data used to train the model will need to be user-generated content to allow the model to learn patterns in the data and make predictions on new data for offensive content detection. Using user-generated content in a Natural Language Processing model will allow the model to learn the context and patterns of offensive content.

- Data Preparation: The data will need to be cleaned, categorized, and preprocessed before it can be used for training to ensure the model isn't training on incomplete or irrelevant data. Data will be categorized based on the content within the posts to be used for training the model. The data will also be cleaned to remove common stop words, symbols, and other anomalies that may not be useful for the model.

- Modeling: Using natural language processing and supervised learning techniques and logistic regression, the model will be trained to accurately categorize the posts based on the offensiveness of the content. This will allow the model to predict future user-generated posts and categorize whether they are offensive or not allowing the content to be automatically moderated.

- Evaluation: The solution will be evaluated to ensure that it meets the requirements and objectives of the project. This will involve testing the model with a testing data and new user-generated data to ensure that it is accurately categorizing the content and saving the human moderation team time.

- Deployment: The machine learning solution will be deployed as a backend service that will be utilized within a full-stack application where users can post content that will be categorized by the model. Users will also be able to see how the model moderates their content.

## Timeline

The project timeline forecasts the development process for each milestone step along with the deliverables for each of the milestones. Overall, the project is expected to be completed in about 3 months or about 90 days. The project timeline is as follows:

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

The project timeline is broken down into 7 milestones each lasting 1-3 weeks. Each milestone sprint is broken down into the following tasks and deliverables:

Sprint 1: Project Planning ( 1 Week )

- Define the project scope and goals
- Clearly define the project budget
- Identify and confirm the project team
- Establish the project timeline and assign tasks

Sprint 2: Data Collection ( 2 Weeks )

- Identify and validate the training data sources
- Plan the data collection method
- Write code scripts to collect the data
- Store the data in a database for preparation

Sprint 3: Data Preparation and Processing ( 2 Weeks )

- Format the data using the appropriate standardized data structures
- Clean the data to remove any irrelevant information, duplicates, or errors
- Anonymize the data and mitigate data anomalies
- Validate the data and prepare it for training

Sprint 4: Model Training ( 3 Weeks )

- Set up the machine learning environment
- Identify and clarify vectorization technique and machine learning algorithm
- Split and vectorize the data
- Develop and train the machine learning model
- Debug and optimize the model
- Validate the vectorizer and model and save them for integration

Sprint 5: Integration & Testing ( 2 Weeks )

- Integrate the vectorizer and model with the platform
- Write tests for the model and the backend service
- Test the model and the service
- Implement end-to-end testing
- Create a maintenance plan for the IT team

Sprint 6: Evaluation ( 1 Week )

- Prepare the model for deployment and create feature flags
- A/B test the model with a small subset of users
- Monitor the system and collect feedback
- Evaluate the solution and document the results

Sprint 7: Model Deployment ( 2 Weeks )

- Deploy the model to the entire platform
- Monitor the system and collect feedback
- Document the system and write post-implementation reports

## Evaluation Plan

At each stage of the project, we will evaluate the progress of the machine learning model and the full-stack application to verify that the project is on track and meeting the requirements of the Social Club L.L.C. Alongside requirement validation and extensive testing throughout development the following metrics are going to be tracked:
    - Model Accuracy: The model's accuracy will be evaluated using a testing dataset to ensure that it is accurately categorizing the content.
    - Model Efficiency: The model's efficiency will be evaluated by measuring the time it takes to process a large number of requests.

Since the project's main goals are to improve customer satisfaction and reduce the workload of the moderation team, the verification methods will focus on the model's accuracy and efficiency. The best model to solve the problem the Social Club L.L.C.'s problem will be the one that can process requests as fast as possible while being as accurate as possible. The models will be benchmarked to measure the model's accuracy on a testing dataset and the model's speed on a large number of requests. Post implementation, verification methods will include: A/B testing on users, user feedback, and monitoring the system for any issues. 

## Resources and Costs

The following section represents the proposed estimated budget for the project including a cost breakdown for development and maintenance. Labor costs are separated into the categories of engineering labor, project management labor, and maintenance labor. A consolidated hardware and resources cost is also included as well as the ongoing estimated cost for cloud usage. A full breakdown of the labor cost is provided in this budget proposal.

Development Cost Overview Breakdown:
| Resource | Cost |
| ------------------------------- | -------------------- |
| Engineering Labor | $100K-150K |
| Project Management Labor | $20K-30K |
| Database Storage | $5,000 |
| Data Processing Compute Usage | $5,000 |
| ML Model Training Compute Usage | $20,000 |
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
