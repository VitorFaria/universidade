INSERT INTO User (id, firstname, lastname, username, password, salary, age) VALUES (1, 'Alex','Knr', 'alex123','$2a$04$4vwa/ugGbBVDvbWaKUVZBuJbjyQyj6tqntjSmG8q.hi97.xSdhj/2', 3456, 33);
INSERT INTO User (id, firstname, lastname, username, password, salary, age)  VALUES (2, 'Tom', 'Asr', 'tom234', '$2a$04$QED4arFwM1AtQWkR3JkQx.hXxeAk/G45NiRd3Q4ElgZdzGYCYKZOW', 7823, 23);
INSERT INTO User (id, firstname, lastname, username, password, salary, age)  VALUES (3, 'Adam', 'Psr', 'adam', '$2a$04$WeT1SvJaGjmvQj34QG8VgO9qdXecKOYKEDZtCPeeIBSTxxEhazNla', 4234, 45);

INSERT INTO `universidade`.`aluno`
(
`cpf`,
`data_nascimento`,
`email`,
`nome`)
VALUES
(
'08015306604',
'1991-07-27',
'dfsdfsdfsd',
'Vitor');

INSERT INTO `universidade`.`aluno`
(
`cpf`,
`data_nascimento`,
`email`,
`nome`)
VALUES
(
'08015306605',
'1990-07-27',
'sdsdsdsdsdsd',
'Rodolfo');

INSERT INTO `universidade`.`curso`
(
`data_fim`,
`data_inicio`,
`nome`)
VALUES
(
'2001-07-27',
'2001-01-27',
'Física');

INSERT INTO `universidade`.`curso`
(
`data_fim`,
`data_inicio`,
`nome`)
VALUES
(
'2005-07-27',
'2005-01-27',
'Filosofia');

INSERT INTO `universidade`.`matricula`
(`id_aluno`,
`id_curso`,
`data_matricula`)
VALUES
(1,
1,
'2019-02-02');

INSERT INTO `universidade`.`matricula`
(`id_aluno`,
`id_curso`,
`data_matricula`)
VALUES
(2,
2,
'2018-03-01');

INSERT INTO `universidade`.`disciplina`
(
`nome`,
`id_curso`)
VALUES
(
'Eletromagnetismo',
1);


 