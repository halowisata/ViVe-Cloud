# Halowisata / ViVe API

## Bangkit Capstone Project 2023

Tourism recommendation system RESTful-API based on user mood.

## Getting Started

To start running this project locally,

```bash
git clone -b development https://github.com/vive-team/ViVe-Cloud.git vive-api
```

Open vive-api directory and install all required dependencies

```bash
npm install
```

Copy the example env file and adjust the env file

```bash
cp .env.example .env
```

Create the database to MySQL with name

```bash
vive_app
```

Start the migration for development

```bash
npm run migrate:dev
```

Start the server

```bash
npm run start:dev
```
