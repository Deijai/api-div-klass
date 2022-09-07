"use strict";
const Person = require('../models/Person');
//save persons
const save = async (req, res) => {
  try {
    const { person } = req.body;

    if(!person){
        return res
          .status(401)
          .json({ error: "All data must be reported" });
    }

    const personExists = await Person.find({
        $or: [{email: person.email}, {cpf: person.cpf}, {rg: person.rg}, {passport: person.passport}],
    });

      if (personExists.length > 0) {
        return res
          .status(401)
          .json({ error: "The person is already registered" });
      }

      const data = new Person(person);

      data.save( (err, personStored) => {
        if (err) {
            return res.status(500).json({ error: err });
          }

          if (personStored) {
            return res.status(200).json({ data: personStored });
          } else {
            return res.status(404).json({ error: "Person not created" });
          }
      });


  } catch (error) {
    return res.status(401).json({ error: error });
  }
};

//list all persons
const getPersons = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const persons = await Person.find()
      .sort("_id")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Person.count();
    if (persons.length <= 0) {
      return res.status(404).json({ error: "No persons found" });
    }
    return res
      .status(200)
      .json({ data: persons, totalPages: Math.ceil(total / limit), currentPage: page });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = {
    save,
    getPersons,
  };
  