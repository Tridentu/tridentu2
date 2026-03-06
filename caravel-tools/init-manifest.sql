CREATE TABLE packagekit_ids(
record_id integer primary key autoincrement,
package_table_id integer not null,
package_id text not null
);


CREATE TABLE packageinfo(pkgId integer primary key autoincrement not null,
name varchar(255) unique not null,
description text,
pkgType text check (pkgType in ('binaries','configs','assets','sources')),
category varchar(128),
architecture text check(architecture in ('x86_64','arm64','dots','assets') not null)
);


CREATE TABLE packagegroups ( id integer primary key not null, package_group text not null, latest text not null);

