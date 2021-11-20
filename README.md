# Liveable 2.0 README <!-- omit in toc -->

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

[**Liveable 2.0**](https://liveable-nz.netlify.app/) is an application where users can read articles on housing issues in New Zealand that have been sourced from various outlets. Frontend made with React and backend built with Strapi, a headless CMS.

<br>

## MVP

### Goals

- Users, posts, locations, and categories tables with associations
- Deployment with Surge and Heroku
- Full CRUD for posts
- Have a RESTful JSON API

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Frontend framwork |
|   React Router   | Client side routing |
| Axios | API interaction |
|     Strapi      | Backend, headless CMS |

<br>

### Client (Front End)

#### Wireframes

- Landing page

<img src="https://i.imgur.com/MBxOai7.png">

- About page

<img src="https://i.imgur.com/jbhpHVr.png">

- Contact page

<img src="https://i.imgur.com/rhBgfiX.png">

- Articles page

<img src="https://i.imgur.com/NujB1Th.png">

## Code Issues & Resolutions

In general, hooking up Strapi to Heroku and not having the content delete because of dynos was a challenge. Changing the database to postgresql fixed that issue.
