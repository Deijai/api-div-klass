"use strict";
const Delegation = require('../models/Delegation');
//save role
const save = async (req, res) => {
  try {
    const { delegation } = req.body;

    if(!delegation.name && !delegation.uf){
        return res
          .status(401)
          .json({ error: "All data must be reported" });
    }

    const delegationExists = await Role.find({
        $or: [{ name: delegation.name }, {uf: delegation.uf}]
    });

      if (delegationExists.length > 0) {
        return res
          .status(401)
          .json({ error: "The delegation is already registered" });
      }

      const data = new Delegation(delegation);

      data.save( (err, delegationStored) => {
        if (err) {
            return res.status(500).json({ error: err });
          }

          if (delegationStored) {
            return res.status(200).json({ data: delegationStored });
          } else {
            return res.status(404).json({ error: "Delegation not created" });
          }
      });


  } catch (error) {
    return res.status(401).json({ error: error });
  }
};

module.exports = {
    save,
  };
  