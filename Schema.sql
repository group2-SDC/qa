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




-- sudo -i -u postgres

-- sudo vim  /etc/nginx/conf.d/load-balancer.conf
-- sudo service nginx restart