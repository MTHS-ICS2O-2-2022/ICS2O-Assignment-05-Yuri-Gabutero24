// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Yuri G
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function calculate() {
  const term = parseInt(document.getElementById("multiply-term").value)

  const sequence = []
  for (let i=0; i<5; i++) {
    sequence.push(term ** i);
  }

  document.getElementById("answer").innerHTML = "The first 5 terms would be: " + sequence
}