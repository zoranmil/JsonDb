"use strict";

const fs = require('fs');
const { writeFile, readFile,readFileSync, renameSync, writeFileSync,existsSync } = require('fs');
const path = require("path");
const process = require('process');


class jsondb {
    constructor(DbPath,options) {
    let defaultOptions = {
  		   	  dir: process.env.PROGRAMDATA,
  		    };
    this.config  = Object.assign({}, defaultOptions, options || {});
  	this.DbName=path.join(this.config.dir,DbPath+".json");;
    this.data=[];
    this.newdata=[];
    if (!fs.existsSync(this.DbName)) {
       writeFileSync(this.DbName, JSON.stringify(this.data));
      }
    }
    Select(){
    this.data=JSON.parse( readFileSync(this.DbName,  { encoding: 'utf8', flag: 'r' })) ;
    return this;
    }
   Insert (udata,col){
     this.Select();
    let id=this.data.length-1;
     if(id<0){
        udata[col]=1;
     }else{
         udata[col]=parseInt(this.data[id][col])+1;
     }
     this.data.push( udata);
      writeFileSync(this.DbName, JSON.stringify(this.data));
   };
   get(){
     return this.data;
   }
   Between ( key, value1, value2) {
      if(typeof value1!== 'number'){
         value1=parseInt(value1);
        }
         if(typeof value2!== 'number'){
            value2=parseInt(value2);
         }
      this.newdata= [];
       let i=0;
     for ( i = 0; i < this.data.length; i++){
         if(this.data[i][key] >= value1 && this.data[i][key] <= value2){
           this.newdata.push(this.data[i]);
         }
       }
        this.data=this.newdata;
        return this;
   };
   Like (col,name){
     this.newdata= [];
     let index=0;let entry;
     name = name.toUpperCase();
     for (index = 0; index < this.data.length; ++index) {
         entry = this.data[index];
         if (entry && entry[col] && entry[col].toUpperCase().indexOf(name) !== -1) {
         this.newdata.push(entry);

         }
     }
    this.data=this.newdata;
    return this;
  };
  Update(array, col,where){
    this.Select();
    if(array.length == undefined){
      let  newa=[];
      newa.push(array);
      array=newa;
      console.log(array);
    }
    let objIndex = this.data.findIndex(obj => obj[col] == where);
    if (objIndex === -1) {
      return;
      }

    let obj=this.data;
      array.forEach(function(item) {
      Object.keys(item).forEach(function(key) {
        obj[objIndex][key]=item[key];
      });
    });
    this.data=obj;
    writeFileSync(this.DbName, JSON.stringify(this.data));
      return this;
  }
  Delete(col,where){
    this.Select();
    let objIndex = this.data.findIndex(obj => obj[col] == where);
    if (objIndex === -1) {
      return;
    }
    this.data.splice(objIndex, 1);
    writeFileSync(this.DbName, JSON.stringify(this.data));
  }
  Limit(a,b){
    let to=0;
    let index=0;
     let ee=b+a;
     this.newdata=[];
    if(this.data.length<=ee){
      to=ee;
    }else{
      to=this.data.length;
    }
     this.newdata = [];
    for (index = a; index < this.data.length; ++index) {
      if(index<=to){
          this.newdata.push(this.data[index]);
      }else{
          return this;
      }

    }
    this.data=this.newdata;
      return this;
  }
  Where(col,string){
  this.newdata=[];
    this.newdata.push(this.data.find(data => data[col] ==string));
      if(this.newdata.length==1){

    	if(typeof this.newdata[0][col]==='undefined') {
          this.newdata=[];
      }
    }

      this.data=this.newdata;
      return this;
  }
  ByIdAsc(col){
    this.sortByIdAsc(col);
    return this ;
  };
  ByIdDesc(col){
    this.sortByIdDesc(col);
    return this ;
  };
  ByNameAsc(col){
    this.sortByNameAsc(col);
    return this ;
  }
  ByNameDesc(col){
    this.sortByNameDesc(col);
    return this ;
  }
  sortByIdDesc(col){
  this.data.sort(function(a, b){
    var nameA = parseInt(a[col]);
    var nameB = parseInt(b[col]);
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }
  return 0;
  });
  };
  sortByIdAsc(col){
  this.data.sort(function(a, b){
    var nameA = parseInt(a[col]);
    var nameB = parseInt(b[col]);
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
  });
  };
   sortByNameAsc(col){
   this.data.sort(function(a, b){
     var nameA = a[col].toUpperCase();
   var nameB = b[col].toUpperCase();
   if (nameA < nameB) {
     return -1;
   }
   if (nameA > nameB) {
     return 1;
   }
   return 0;
   });
   };
   sortByNameDesc(col){
   this.data.sort(function(a, b){
     var nameA = a[col].toUpperCase();
   var nameB = b[col].toUpperCase();
   if (nameA  > nameB) {
     return -1;
   }
   if (nameA <  nameB) {
     return 1;
   }
   return 0;
   });
   };
};
module.exports = jsondb;
