import React, { Component } from 'react';
import './App.css';
import * as rssParser from 'react-native-rss-parser';
 
return fetch('https://www.utilitydive.com/feeds/news/')
  .then((response) => response.text())
  .then((responseData) => rssParser.parse(responseData))
  .then((rss) => {
  	console.log(rss.items.url);
    console.log(rss.title);
    console.log(rss.items.published);
    console.log(rss.items.authors.name);
  });
