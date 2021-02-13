const express = require('express');
require('dotenv').config();
const Tag = require('./models/Tag');

const app = express();
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);


const token = process.env.HELP_TOKEN

const getHelpNeeded = async () => {

  const query = `organizations?org_cats=all&&is_verify=1&token=${token}`;
  const base = `https://dev.nko.tochno.st/api/`;
  const path = `https://dev.nko.tochno.st/api/list/problems?token=${token}`;
  const path2 = `https://dev.nko.tochno.st/api/organizations?problem_path=hiv&org_cats=all&is_verify=1&token=${token}`;

  const response0 = await fetch(base + query);
  const data0 = await response0.json();

  const response = await fetch(path);
  const data = await response.json();

  const response2 = await fetch(path2);
  const data2 = await response2.json();

  console.log('Help Needed API', data0, data, data2);

  return data;
}


try {
	const data = getHelpNeeded();
	console.log(data);
}
catch(err){
   console.log(err);
}
