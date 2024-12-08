
## Configuring npm and install

```

## Configuring npm and install

```
npm install @zoranmil/jsondb

```

## Sample code 
```
const Db = require('@zoranmil/jsondb');
const JSON_DBPATH="baza";
const DB=new Db( JSON_DBPATH);
Insert :
let json={'naziv':naziv,"cena":cena,"kolicina":kolicina,"marka":marka};
 primry_key='id';
DB.Insert(json,primry_key);

Update:
DB.Update(json,  col,primry_key);
 get  data
 let dbdata=DB.Select().data;
 
sorting :
 let dbdata=DB.Select().Limit(from,records_per_page).ByIdDesc(primry_key).data;
 integer:
    ByIdDesc(col);
    ByIdAsc(col);
   string :
    ByNameAsc(col);
    ByNameDesc(col);
	
  Where  :
  let id=1;
  let data= DB.Select().Where(primry_key,id).data;
  
  Delete:
    id=1;
  DB.Delete(primry_key,id);
  
  Like :
  let text='art";
 let dbdata=DB.Select().Like('naziv',text).data;
 Between:
 Between ( key, value1, value2);
 let dbdata=DB.Select().Between('id',1,2).data;

```
