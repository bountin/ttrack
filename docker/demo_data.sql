INSERT INTO users
    (usr_id, usr_lastname, usr_email, usr_target_time, usr_firstname)
  VALUES
    (DEFAULT, 'Mustermann', 'mustermann@example.org', '40 hours'::interval, 'Maximilian')
  RETURNING usr_id
;
