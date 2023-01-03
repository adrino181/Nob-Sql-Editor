export const CREATE_DEMO_TABLE = "CREATE TABLE hello (a int, b char); \
INSERT INTO hello VALUES (0, 'hello'); \
INSERT INTO hello VALUES (1, 'world');"

export const CREATE_TABLE_EMPLOYEE = "\
create table tblEmployee \
( \
Employee_id int auto_increment primary key, \
Employee_first_name varchar(500) NOT null, \
Employee_last_name varchar(500) NOT null, \
Employee_Address varchar(1000), \
Employee_emailID varchar(500), \
Employee_department_ID int default 9, \
Employee_Joining_date date \
);"

export const INSERT_INTO_EMLOYEE = "INSERT INTO tblemployee (employee_first_name, employee_last_name) values ('Nisarg','Upadhyay')"

export const SELECT_FROM_EMPLOYEE = "select * from tblEmployee"

