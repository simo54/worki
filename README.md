# Worki

## ========= Readme under construction =========

Please note that the project is under review due the code freeze on 04th November as this was a 3 week "challenge/project".

Eventual comments about the code, README.md, bug fixing and style fixing are going to be done in the next days/weeks.

Also be aware that to NOT submit any personal data (yours or others) on the website.

Frontend: https://github.com/simo54/worki
Backend: https://github.com/simo54/workiServer

## ========= Readme under construction =========

## Intro

This is a final project of my coding academy's bootcamp. I decided to build up a job board website where users can apply to jobs and where the employer can post and read users application through their private area.

Known issue: 
- Login Authentication 401 on existing user/employer
	- In deployed version is it possible to signup and create either a user account or an employer account. The frontend has been designed with a React HOC component where, according a positive response status (200), will allow the user or the employer to have access in their private area. If different result status, the frontend will redirect to the signup page. 
  The problem could rely on the creation of the cookies (JWT and UUID session token) on Google Chrome (on localhost the cookies are created regularly).

## Tech Stack (Frontend)
- React.js
- React Bootstrap
- React Routers
- Sequelize
- PostgreSQL
- Axios

## How to install it (coming soon)
 
