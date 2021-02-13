const mongoose = require('mongoose');
const fetch = require('node-fetch');
const Tag = require('./models/Tag');
const Fond = require('./models/Fond');

require('dotenv').config();

// поиск всех слагов

const findSlugs = async () => {
  const tags = await Tag.find();
  const slugs = [];

  tags.forEach((el) => {
    slugs.push(el.slug);
  });

  return slugs;
}

// фетч и запись объектов в БД

const token = process.env.HELP_TOKEN

const getHelpNeededTags = async () => {
  const path = `https://dev.nko.tochno.st/api/list/problems?token=${token}`;

  const response = await fetch(path);
  const data = await response.json();

  return data;
}

const getHelpNeededFonds = async () => {
  const query = `organizations?org_cats=all&&is_verify=1&token=${token}`;
  const base = `https://dev.nko.tochno.st/api/`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data;
}

const getFondsBySlug = async (slug) => {


  const path = `https://dev.nko.tochno.st/api/organizations?problem_path=${slug}&org_cats=all&is_verify=1&token=${token}`;

  const response = await fetch(path);
  const data = await response.json();

  return data;
}

const seedTags = async () => {
  try {
    const data = await getHelpNeededTags();

    data.map((elem) => {
      const tag = new Tag({ ...elem });
      tag.save();
    });

  }
  catch (err) {
    console.log(err);
  }
}

const seedFondsBySlug = async (i) => {
  const slugs = await findSlugs();

  try {
    const data = await getFondsBySlug(slugs[i]);

    // console.log(data.data);

    data.data.map((elem) => {
      const fond = new Fond({ slug: slugs[i], api_id: elem.id, ...elem });
      fond.save();
    });

  }
  catch (err) {
    console.log(err);
  }
}

module.exports = { seedTags, seedFondsBySlug, findSlugs, getFondsBySlug };
