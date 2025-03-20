# **Internship Report**

### Name - *Tanishq Homkar*
### Project  - *Build Real-Time Twitter Analytics Dashboard - Power BI*

## Introduction

This report outlines my experience and accomplishments during my internship, where I focused on building interactive dashboards using Tableau. The project centered on analyzing job portal data and creating dynamic visualizations that not only provided insights but also included advanced features such as time-based filters and custom data transformations.

## Background

The internship was part of the " Build Real-Time Job Analytics Portal - Tableau" project. The primary objective was to create a series of dashboards that visualized various aspects of job portal data—from company comparisons to candidate preferences and country-specific analyses. Early in the project, I also utilized Python for data cleaning and preprocessing, ensuring the raw data was transformed into a format suitable for advanced Tableau visualizations. This multi-tool approach enhanced the overall data quality and reliability of the dashboards.

## Learning Objectives

- Utilize Python for effective data cleaning and transformation, preparing data for visualization.
- Gain proficiency in Tableau for data analysis and interactive visualization.
- Develop expertise in applying advanced data filtering techniques and calculated fields.
- Implement time-based visibility constraints to create dynamic user experiences.
- Enhance dashboard design skills while ensuring a seamless integration of multiple visualizations.

## Activities and Tasks

I successfully completed the following key tasks during the internship:
- **Data Cleaning with Python:**
Developed Python scripts to clean and preprocess raw job portal data. This included handling missing values, normalizing data formats, and extracting key numerical insights from string-based ranges (such as experience and salary). This step was crucial in ensuring that the data fed into Tableau was accurate and analysis-ready.
- **Task 1: Job Portal vs Company:**
Developed a dashboard visualizing the relationship between job portals and companies. This involved data aggregation and applying filters to accurately reflect the distribution of job listings.
- **Task 2: Preference vs Work Type:**
Created a visualization that compared candidate preferences with work types. The dashboard included complex filters such as:
Displaying only 'Intern' work type.
Filtering based on geographic and job title constraints.
Implementing a time-based filter to only show the dashboard between 3 PM and 5 PM IST.
- **Task 3: Country Comparison:**
Designed a comparative dashboard analyzing job postings for India and Germany. The dashboard integrated multiple conditions:
Filtering based on qualifications, work type, and experience levels.
Color-coding the data (orange for India, green for Germany).
Including time-based visibility constraints to restrict display to a specified timeframe.

## Skills and Competencies

- **Data Cleaning and Transformation:** Using Python to preprocess data—handling missing values, standardizing formats, and extracting numerical insights.
- **Data Visualization:** Advanced techniques for creating interactive dashboards in Tableau.
- **Calculated Fields and Filtering:** Expertise in using Tableau functions (e.g., `NOW()`, `DATEPART()`, `REGEXP_EXTRACT()`) to derive dynamic insights.
- **Time-Based Constraints:** Implementing conditional logic for dynamic display settings in dashboards.
- **Responsive Dashboard Design:** Integrating Tableau visualizations into web pages with HTML, CSS, and JavaScript.
- **Problem Solving:** Adapting solutions when facing issues such as dynamic filtering on Tableau Public.

## Challenges and Solutions

- **Data Cleaning Workflow:**
Challenge: Raw data required extensive cleaning and transformation to be visualization-ready.
Solution: Developed robust Python scripts that standardized the data, ensuring that subsequent Tableau analyses were based on accurate and reliable inputs.
- **Responsive Design Issues:**
Challenge: The embedded dashboards sometimes displayed filters covering the screen on smaller viewports.
Solution: I added the device=desktop parameter in the embed code and enforced a minimum width via CSS to maintain the desktop layout.
- **Data Parsing:**
Challenge: Extracting numeric values from string-based ranges (for experience and salary) led to null values initially.
Solution: Adjusted the calculated fields using functions like `REGEXP_EXTRACT()`, and `INT()` to correctly parse and filter the data.

## Outcomes and Impact

This internship has deepened my understanding of data visualization and dynamic dashboard design using Tableau. I gained valuable hands-on experience with real-world job portal data and improved my technical skills by integrating data cleaning processes in Python. This multi-faceted approach allowed me to apply complex filters and embed responsive dashboards into a web environment, ultimately enhancing the overall quality of data analysis and visualization.

## Conclusion

The internship was a significant learning experience that allowed me to bridge theoretical knowledge with practical application. By combining Python for data cleaning with Tableau for visualization, I was able to tackle real-world data challenges effectively. This structured approach to data analysis and visualization has set a strong foundation for my future career in data analytics and business intelligence.
