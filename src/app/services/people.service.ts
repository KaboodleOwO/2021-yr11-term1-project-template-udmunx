import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  database = [];
  constructor() {
    /* ====LOCALSTORAGE========
  Local storage stores data as key-value pairs, and the values are stored as "strings". 
  So, if we must JSON.stringify when we put them into LocalStorage and we must 'parse' the string into a valid object. when we retrieve it.
  */
    if (localStorage.database == null) {
      localStorage.setItem('database', JSON.stringify(this.dataSet));
    }
  } //end constructor

  dataSet = [
    {
      fName: 'spider',
      lName: 'lad',
      email: 'spiderlad@studytafensw.edu.au',
      password: 'P123Y777',
    },
    {
      fName: 'Green',
      lName: 'Lantern',
      email: 'greenlatern@tafensw.edu.au',
      password: 'greeneggsandham',
    },
    {
      fName: 'super',
      lName: 'lad',
      email: 'superlad@studytafensw.edu.au',
      password: 'fly3443hight',
    },
  ];

  getUsers() {
    let data = JSON.parse(localStorage.getItem('database'));
    return data;
  }
} // end class
