DROP DATABASE IF EXISTS qa;

CREATE DATABASE qa;
\c qa

DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;

CREATE TABLE questions (
id int GENERATED ALWAYS AS IDENTITY,
tripId int,
username varchar, 
profilePic varchar,
date Date,
location varchar,
numContributions int,
numHelpfulVotes int,
question varchar,
PRIMARY KEY(id)
);

CREATE TABLE answers (
id int GENERATED ALWAYS AS IDENTITY,
ansUsername varchar,
ansProfilePic varchar,
ansDate Date,
ansAnswer varchar,
likes int,
questionId int,
CONSTRAINT fk_questions
      FOREIGN KEY(questionId) 
	  REFERENCES questions(id),
PRIMARY KEY(id)
)

-- CREATE TABLE answers (
-- id int GENERATED ALWAYS AS IDENTITY,
-- ansUsername varchar,
-- ansProfilePic varchar,
-- ansDate Date,
-- ansAnswer varchar,
-- likes int,
-- PRIMARY KEY(id)
-- );

-- CREATE TABLE questions (
-- id int GENERATED ALWAYS AS IDENTITY,
-- productID serial,
-- username varchar, 
-- profilePic varchar,
-- date Date,
-- location varchar,
-- numContributions int,
-- numHelpfulVotes int,
-- question varchar,
-- CONSTRAINT fk_answers
--       FOREIGN KEY(id) 
-- 	  REFERENCES answers(id),
-- PRIMARY KEY(id)
-- )