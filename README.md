# @zoranmil/jsondb

An easy-to-use JSON database which can be used for small data storage, up to 100mb without getting slow.

Portable Node.js database, very useful.

## Features

Pros
1.	Portability
2.	Easy-to-use
3.	Can control several db’s at the same .js file
4.	Pretty fast when treating small volumes of data

Cons
1.	Slow when dealing with big data volumes
2.	Low security, just erase the .json created and the data is lost

### Installing

Just run: 
```
npm i @zoranmil/jsondb
```

Then, in your .js, summon it with:
```
const DB = require('@zoranmil/jsondb')
```

and you're ready to go!

## How to use

Important note: rdtb database is case sensitive, so if you try to query “Ruben Acevedo” typing “ruben acevedo” it will not work.

Always when treating strings on function arguments, go with ‘stringName’ instead of stringName. While when treating with ints, Boolean, etc just go without ‘ ‘.

## Creating a database 

Just run:

```
const Db = require('@zoranmil/jsondb');
const JSON_DBPATH="baza";
const DB=new Db( JSON_DBPATH);
```

dbname is the name of your database, and it will create the dbname.json at the same folder of your .js file.


## Inserting data

Just run:  
```
Insert(json,primry_key);
```

let json={'naziv':naziv,"cena":cena,"kolicina":kolicina,"marka":marka};
 primry_key='id';

DB.Insert(json,primry_key);


## Searching for data

### Select All:
```
let dbdata=DB.Select().data;

```
Selects all data from database.

### Select Limit:
```
Limit(from,records_per_page)
```
let dbdata=DB.Select().Limit(from,records_per_page).data;

### Sorting: 
```
    ByIdDesc(key);
    ByIdAsc(key);
    ByNameAsc(key);
    ByNameDesc(key)
```
let dbdata=DB.Select().ByIdDesc('id').data;

let dbdata=DB.Select().Limit(from,records_per_page).ByIdDesc('id').data;

### Select Where :
```
  Where(key,value);
```
let data= DB.Select().Where(key,value).data;
It selects all data which satisfies condition key > value.


### Select  Between
```
Between ( key, value1, value2);
```
DB.Select().Between ( 'id' ,1,2).data;

### Select  Like
```
  Like (key,name)
```
DB.Select().Like( 'name' ,'ja').data;
### Insert: 
```
Insert(json,primry_key);
```
let json={'naziv':naziv,"cena":cena,"kolicina":kolicina,"marka":marka};
 primry_key='id';
DB.Insert(json,primry_key);



### Update:
```
Update(json,  key,value);
```
let json={'naziv':naziv,"cena":cena,"kolicina":kolicina,"marka":marka};
 key='id';
 value=1;
 DB.Update(json,  key,value);

### Delete:
```
Delete(key,value);
```

 key='id';
 value=1;
 DB.Delete( key,value);


## License

License: ICS!