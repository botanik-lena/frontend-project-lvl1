#!/usr/bin/env node
import hello from '../src/cli.js';

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = hello();
  return userName;
};

export default welcome;
