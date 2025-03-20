# **Internship Report**

### Name - *Tanishq Homkar*
### Project  - *Build Real-Time Twitter Analytics Dashboard - Power BI*

## Introduction

This report outlines my experience and accomplishments during my internship, where I focused on building interactive dashboards using Tableau. The project centered on analyzing job portal data and creating dynamic visualizations that not only provided insights but also included advanced features such as time-based filters and custom data transformations.

## Background

The internship was part of the " Build Real-Time Job Analytics Portal - Tableau" project. The primary objective was to create a series of dashboards that visualized various aspects of job portal data—from company comparisons to candidate preferences and country-specific analyses. Throughout the internship, I enhanced my skills in data visualization, filtering, and dynamic dashboard design using Tableau.

## Learning Objectives

Gain proficiency in Tableau for data analysis and interactive visualization.
Develop expertise in applying advanced data filtering techniques and calculated fields.
Implement time-based visibility constraints to create dynamic user experiences.
Enhance dashboard design skills while ensuring a seamless integration of multiple visualizations.

## Activities and Tasks

I successfully completed the following key tasks during the internship:
- Task 1: Job Portal vs Company
Developed a dashboard visualizing the relationship between job portals and companies. This involved data aggregation and applying filters to accurately reflect the distribution of job listings.
- Task 2: Preference vs Work Type
Created a visualization that compared candidate preferences with work types. The dashboard included complex filters such as:
Displaying only 'Intern' work type.
Filtering based on geographic and job title constraints.
Implementing a time-based filter to only show the dashboard between 3 PM and 5 PM IST.
- Task 3: Country Comparison
Designed a comparative dashboard analyzing job postings for India and Germany. The dashboard integrated multiple conditions:
Filtering based on qualifications, work type, and experience levels.
Color-coding the data (orange for India, green for Germany).
Including time-based visibility constraints to restrict display to a specified timeframe.

## Skills and Competencies

- Data Visualization: Advanced techniques for creating interactive dashboards in Tableau.
- Calculated Fields and Filtering: Expertise in using Tableau functions (e.g., `NOW()`, `DATEPART()`, `REGEXP_EXTRACT()`) to derive dynamic insights.
- Time-Based Constraints: Implementing conditional logic for dynamic display settings in dashboards.
- Responsive Dashboard Design: Integrating Tableau visualizations into web pages with HTML, CSS, and JavaScript.
- Problem Solving: Adapting solutions when facing issues such as dynamic filtering on Tableau Public.

## Challenges and Solutions

- Responsive Design Issues:
Challenge: The embedded dashboards sometimes displayed filters covering the screen on smaller viewports.
Solution: I added the device=desktop parameter in the embed code and enforced a minimum width via CSS to maintain the desktop layout.
- Data Parsing:
Challenge: Extracting numeric values from string-based ranges (for experience and salary) led to null values initially.
Solution: Adjusted the calculated fields using functions like `REGEXP_EXTRACT()`, and `INT()` to correctly parse and filter the data.

## Outcomes and Impact

This internship has deepened my understanding of data visualization and dynamic dashboard design using Tableau. I gained valuable hands-on experience with real-world job portal data, enhanced my technical skills in applying complex filters, and successfully integrated dashboards into a responsive web environment. These competencies have prepared me for future challenges in data analytics and business intelligence.

## Conclusion

The internship was a significant learning experience that allowed me to bridge theoretical knowledge with practical application. Through solving real-world challenges such as dynamic filtering and responsive design, I have honed my technical skills and problem-solving abilities. This structured approach to data analysis and visualization has set a strong foundation for my career in data analytics.
