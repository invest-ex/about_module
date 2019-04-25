# about_module
Displays information about the company (description, CEO, market cap, 
employee count, etc), with additional financial information displayed 
when a user clicks "Show More." Also displays two smaller boxes above 
with the headers: "Your Equity" and a "Your Average Cost." These display
information on your returns and your portfolio, respectively.

# Getting service started
From within the root directory:
``
npm install
npm run react-dev
npm run db:setup
npm start
``

# Related projects
https://github.com/invest-ex/chart_module
https://github.com/invest-ex/buy_module
https://github.com/invest-ex/ratings_history_module

# API routes

| Type   | Endpoint                       | Operation                                                    |
|--------|--------------------------------|--------------------------------------------------------------|
| GET    | `/api/about/:symbol`           | Get information on company and its overall performance       |
| POST   | `/api/about/:symbol`           | Add company and its 'about' information                      |
| PUT    | `/api/about/:symbol`           | Update company information                                   |
| DELETE | `/api/about/:symbol`           | Delete company and its information                           |
|        |                                |                                                              |
| GET    | `/api/user/:userId`            | Get information on user's portfolio                          |
| POST   | `/api/user/:userId`            | Add user portfolio                                           |
| PUT    | `/api/user/:userId`            | Update user's portfolio                                      |
| DELETE | `/api/user/:userId`            | Delete user's portfolio                                      |