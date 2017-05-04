DROP TABLE bites CASCADE;
DROP TABLE zombies CASCADE;
DROP TABLE victims CASCADE;


CREATE TABLE zombies(
  id SERIAL8 primary key,
  name VARCHAR(255)
  type VARCHAR(255)
  victim_id INT8 REFERENCES victims(id)



);

CREATE TABLE victms(
id SERIAL8 primary key,
name VARCHAR(255)
run_speed INT2
victim_id INT8 REFERENCES zombies(id)

);

CREATE TABLE bites(
  id SERIAL8 primary key, 
  victim_id INT8 REFERENCES victim(id),
  zombie_id INT8 REFERENCES zombies(id),
  infected_on DATE not null 


);

INSERT INTO zombies (name, type, id) VALUES ('Glenn', 'Walker');
INSERT INTO zombies (name, type, id) VALUES ('Herschel', 'Crawler');
INSERT INTO zombies (name, type, id) VALUES ('Andrea', 'Runner Bearded');

INSERT INTO victims(name, run_speed, id) VALUES ('Abraham', 7);
INSERT INTO victims(name, run_speed, id) VALUES ('Daryl', 8);
INSERT INTO victims(name, run_speed, id)  VALUES ('Rick', 7);


INSERT INTO bites(zombie_id, victim_id, infected_on) VALUES (1, 1, 'Jan 12 2017');

INSERT INTO bites(zombie_id, victim_id, infected_on) VALUES (2, 2, 'Jan 20 2017');

INSERT INTO bites(zombie_id, victim_id, infected_on) VALUES (3, 3, 'Jan 23 2017');

INSERT INTO bites(zombie_id, victim_id, infected_on) VALUES (1, 2, 'Jan 12 2017');


SELECT * FROM zombies where name = 'Glenn';

SELECT victim_id FROM bites WHERE zombie_id = 1;

SELECT name FROM victims WHERE id IN (1,2);