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
            return res.status(200).json({ data: eventStored });
          } else {
            return res.status(404).json({ error: "Event not created" });
          }
      });


  } catch (error) {
    return res.status(401).json({ error: error });
  }
};

//list all events
const getEvents = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const events = await Event.find()
      .sort("_id")
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const total = await Event.count();

    if (events.length <= 0) {
      return res.status(404).json({ error: "No events found" });
    }
    return res
      .status(200)
      .json({ data: events, totalPages: Math.ceil(total / limit), currentPage: page });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

module.exports = {
    save,
    getEvents
  };
  