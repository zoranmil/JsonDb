
## Configuring npm and install

```
npm install @zoranmil/jsondb

```

## Sample code 
```

const Db = require('@zoranmil/jsondb');
const JSON_DBPATH="baza";
const DB=new Db( JSON_DBPATH);

let json={'naziv':naziv,"cena":cena,"kolicina":kolicina,"marka":marka};
 primry_key='id';

DB.Insert(json,primry_key);
DB.Update([{'naziv':naziv,"cena":cena,"kolicina":kolicina,"marka":marka}], 'id',id);

 get  data

 let dbdata=DB.Select().data;
sorting :
 let dbdata=DB.Select().Limit(from,records_per_page).ByIdDesc('id').data;
    ByIdDesc(col);
    ByIdAsc(col);
    ByNameAsc(col);
    ByNameDesc(col)
  Where 
  let data= DB.Select().Where('id',parseInt(id)).data;
  Delete:
 id=1;
  DB.Delete('id',id);
  let text='art";
 let dbdata=DB.Select().Like('naziv',text).data;

```
