"use strict";
const Event = require('../models/Event');
//save event
const save = async (req, res) => {
  try {
    const { event } = req.body;

    if(!event.name){
        return res
          .status(401)
          .json({ error: "The event need to be informed" });
    }

    const eventExists = await Event.find(
        { name: event.name }
      );

      if (eventExists.length > 0) {
        return res
          .status(401)
          .json({ error: "The event is already registered" });
      }

      const data = new Event(event);

      data.save( (err, eventStored) => {
        if (err) {
            return res.status(500).json({ error: err });
          }

          if (eventStored) {
            return res.status(200).json({ event: eventStored });
          } else {
            return res.status(404).json({ error: "Event not created" });
          }
      });


  } catch (error) {
    return res.status(401).json({ error: error });
  }
};

module.exports = {
    save,
  };
  