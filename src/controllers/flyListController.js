"use strict";
const FlyList = require('../models/FlyList');
//save role
const save = async (req, res) => {
  try {
    const { flyList } = req.body;

    if(!flyList){
        return res
          .status(401)
          .json({ error: "All data must be reported" });
    }

    const flyListExists = await FlyList.find({
        $or: [{email: flyList.email}, {cpf: flyList.cpf}, {rg: flyList.rg}],
        $and: [{event: flyList.event}]
    });

      if (flyListExists.length > 0) {
        return res
          .status(401)
          .json({ error: "The role is already registered" });
      }

      const data = new FlyList(flyList);

      data.save( (err, flyListStored) => {
        if (err) {
            return res.status(500).json({ error: err });
          }

          if (flyListStored) {
            return res.status(200).json({ flyList: flyListStored });
          } else {
            return res.status(404).json({ error: "Role not created" });
          }
      });


  } catch (error) {
    return res.status(401).json({ error: error });
  }
};

module.exports = {
    save,
  };
  