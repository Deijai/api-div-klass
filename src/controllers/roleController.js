"use strict";
const Role = require('../models/Role');
//save role
const save = async (req, res) => {
  try {
    const { role } = req.body;

    if(!role.name){
        return res
          .status(401)
          .json({ error: "The event needs to be informed" });
    }

    const roleExists = await Role.find(
        { name: role.name }
      );

      if (roleExists.length > 0) {
        return res
          .status(401)
          .json({ error: "The role is already registered" });
      }

      const data = new Role(role);

      data.save( (err, roleStored) => {
        if (err) {
            return res.status(500).json({ error: err });
          }

          if (roleStored) {
            return res.status(200).json({ data: roleStored });
          } else {
            return res.status(404).json({ error: "Role not created" });
          }
      });


  } catch (error) {
    return res.status(401).json({ error: error });
  }
};

//list all roles
const getRoles = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const roles = await Role.find()
      .sort("_id")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Role.count();

    if (roles.length <= 0) {
      return res.status(404).json({ error: "No roles found" });
    }
    return res
      .status(200)
      .json({ data: roles, totalPages: Math.ceil(total / limit), currentPage: page });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = {
    save,
    getRoles
  };
  