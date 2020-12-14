DROP DATABASE IF EXISTS qa;

CREATE DATABASE qa;
\c qa

DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
id serial,
tripId int,
username varchar, 
profilePic varchar,
date Date,
location varchar,
numContributions int,
numHelpfulVotes int,
question varchar,
UNIQUE(id),
PRIMARY KEY(tripId, id)
);

insert into questions 
(tripId, username, profilePic, date, location, numContributions, numHelpfulVotes, question) 
VALUES(9000007,'travis_B','https://picsum.photos/id/100/200','2020-11-16','Seattle Washington',1,2,'will this work?');

CREATE TABLE answers (
id serial,
questionId int,
CONSTRAINT fk_questions
      FOREIGN KEY(questionId) 
	  REFERENCES questions(id),
ansUsername varchar,
ansProfilePic varchar,
ansDate Date,
ansAnswer varchar,
likes int,
PRIMARY KEY(questionId, id)
)
