// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  // get input value
  const term = parseInt(document.getElementById("multiply-term").value)

  // calculate first 5 terms
  let answer = 1
  let list = ""
  for (let counter = 0; counter < 5; counter++) {
    list = list + answer + ", "
    answer = answer * term
  }

  // output
  document.getElementById("answer").innerHTML = "The first 5 terms would be: " + list + "..."
}