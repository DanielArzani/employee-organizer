INSERT INTO department (name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, salary, department_id)
VALUES
('Salesperson', 10000, 1),
('Lead Engineer', 20000, 2),
('Software Engineer', 30000, 2),
('Account Manager', 40000, 3),
('Accountant', 50000, 3),
('Legal Team Lead', 60000, 4),
('Laywer', 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('James', 'Fraser', 1, null),
  ('Jack', 'London', 1, 1),
  ('Robert', 'Bruce', 1, null),
  ('Peter', 'Greenaway', 1, 2),
  ('Derek', 'Jarman', 1, null),
  ('Paolo', 'Pasolini', 1, 3),
  ('Heathcote', 'Williams', 1, null);

