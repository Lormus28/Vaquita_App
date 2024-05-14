-- Creating table Users
create table Users (
	  id serial,
	  name varchar(100) not null,
	  email varchar(50) not null,
	  password varchar(100) not null,
	  createdAt date not null,
	  PRIMARY KEY(id)
);

-- Creating table Groups
create table Groups (
  	id serial,
  	ownerUserId integer not null,
  	name varchar(100) not null,
  	color varchar(50) not null,
  	createdAt date not null,
  	PRIMARY KEY(id),
  	CONSTRAINT fk_groups_users_id FOREIGN KEY(ownerUserId) REFERENCES Users(id)
);