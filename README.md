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
const DBNAME="dbname";
const DB=new Db( DBNAME,{ dir:"./"});
```

dbname is the name of your database, and it will create the dbname.json.

in windows you don't have to take the directory  just call

const DB=new Db( DBNAME);

the json will be in

ProgramData directory 
 
## Inserting data

Just run:  
```
Insert(json,primry_key);
```

let json={'name':name,"price":price,"amount":amount,"brand":brand};
 primry_key='id';

DB.Insert(json,primry_key);


## Searching for data

### Select All:
```
let dbdata=DB.Select().get();

```
Selects all data from database.

### Select Limit:
```
Limit(from,records_per_page)
```
let dbdata=DB.Select().Limit(from,records_per_page).get();

### Sorting: 
```
    ByIdDesc(key);
    ByIdAsc(key);
    ByNameAsc(key);
    ByNameDesc(key)
```
let dbdata=DB.Select().ByIdDesc('id').get();

let dbdata=DB.Select().Limit(from,records_per_page).ByNameDesc('name').get();

### Select Where :
```
  Where(key,value);
```
let data= DB.Select().Where(key,value).get();

It selects all data which satisfies condition key > value.


### Select  Between
```
Between ( key, value1, value2);
```

DB.Select().Between ( 'price' ,100,200).get();

### Select  Like
```
  Like (key,name)
```
DB.Select().Like( 'name' ,'zora').get();
### Insert: 
```
Insert(json,primry_key);
```
let json={'name':name,"price":price,"amount":amount,"brand":brand};

 primry_key='id';

DB.Insert(json,primry_key);



### Update:
```
Update(json,  key,value);
```
let json={'name':name,"price":price,"amount":amount,"brand":brand};

 key='id';
 
 where_value=1;

 DB.Update(json,  key,where_value);

### Delete:
```
Delete(key,value);
```

 key='id';

 where_value=1;

 DB.Delete( key,where_value);


## License

License: ICS!