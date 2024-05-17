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
- Functionality for users to preview potential offensiveness of their posts.
- Opt-in feature for users to view flagged content.

#### Documentation
- A comprehensive user guide detailing how to use the application and its features.
- Technical documentation for the development and maintenance of the machine learning model and application.


### Benefits Justification
The machine learning content moderation system will significantly benefit The Social Club L.L.C. by:

- Efficiency: Automating the moderation process reduces the workload on moderation team, allowing them to focus on reviewing appeals.
- User Experience: Ensuring consistent, fast, and accurate moderation decisions improves the overall quality of content on the platform by hiding content as its uploaded quickly filtering out inappropriate content and providing users with pre-posting feedback on potential content issues.
- Scalability: Offering a scalable solution that can handle the growing amount of content without proportional increases in moderation costs or need to mass hire new team members.
- Cost-Effectiveness: By reducing the need for extensive human moderation, the company will be saving on operational costs.
By implementing this solution, The Social Club L.L.C. can address its content moderation challenges effectively, improving both platform integrity and user satisfaction.

## Data Summary

• Provide the source of the raw data, how the data will be collected, or how it will be simulated.
• Describe how data will be processed and managed throughout the application development life
cycle: design, development, maintenance, or others.
• Justify why the data meets the needs of the project. If relevant, describe how data anomalies, e.g.,
outliers, incomplete data, etc., will be handled.
• Address any ethical or legal concerns regarding the data. If there are no concerns, explain why.

## Implementation

• Describe an industry-standard methodology to be used.
• An outline of the project’s implementation plan. This outline can focus on the project’s
development as a whole; or it may focus on only the implementation of the machine learning
solution.

## Timeline

The project timeline forecast the development process for each milestone step along with the deliverables for each of the milestones. The project timeline is as follows:

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

The project timeline is broken down into 7 milestones with each lasting 1-3 weeks. Each milestone sprint is broken down into the following tasks and deliverables:

Sprint 1: Project Planning ( 1 Week )

- Define the project scope and goals
- Clearly define the project budget
- Identify and confirm the project team
- Establish the project timeline and assign tasks

Sprint 2: Data Collection ( 2 Weeks )

- Identify validate the training data sources
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

## Duration

(hours or days) Projected start date Anticipated end date

## Evaluation Plan

• Describe the verification method(s) to be used at each stage of development.
• Describe the validation method to be used upon completion of the project.

## Resources and Costs

The following section represents the proposed estimated budget for the project including a cost breakdown for development and maintenance. Labor costs are separated into the categories of engineering labor, project management labor, and maintenance labor. A consolidated hardware and resources cost is also included as well as the ongoing estimated cost for cloud usage. A full breakdown of the labor cost is provided in this budget proposal.

Development Cost Overview Breakdown:
| Resource                        | Cost                 |
| ------------------------------- | -------------------- |
| Engineering Labor               | $100K-150K           |
| Project Management Labor        | $20K-30K             |
| Database Storage                | $5,000               |
| Data Processing Compute Usage   | $5,000               |
| ML Model Training Compute Usage | $20,000              |
| Upfront Cost Total              | ~$150K-200K          |

Ongoing Cost Breakdown:
| Resource                        | Cost                 |
| ------------------------------- | -------------------- |
| Cloud Server Usage              | ~$35K-45K Monthly    |
| Maintenance Engineering Labor   | $10K-15K Monthly     |
| On-Going Total                  | ~$45K-60k Monthly    |


The following labor cost full breakdown estimates are based on the salaries of the individual respective roles. The real cost is calculated based on a 3-month development timeline.

Labor Cost Breakdown: 
| Type              | Role                      | Salary        | Real Cost              |
| ----------------- | ------------------------- | ------------- | ---------------------- |
| Engineering Labor | Machine Learning Engineer | $100K - $150K | $25k - $37.5K          |
| Engineering Labor | Machine Learning Engineer | $100K - $150K | $25k - $37.5K          |
| Engineering Labor | Fullstack Engineer        | $100K - $150K | $25k - $37.5K          |
| Engineering Labor | Backend Engineer          | $100K - $150K | $25k - $37.5K          |
| Management Labor  | Project Manager           | $80K - $120K  | $20k - $30K            |
| Maintenance Labor | Senior IT Analyst         | $84K - $126K  | $7K - $10.5K Monthly   |
| Maintenance Labor | IT Analyst                | $50K - $75K   | $1.5k - $2.25K Monthly |
| Maintenance Labor | IT Analyst                | $50K - $75K   | $1.5k - $2.25K Monthly |
