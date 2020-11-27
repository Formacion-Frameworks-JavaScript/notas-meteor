import { Meteor } from "meteor/meteor";
import { NotasCollection } from '/imports/api/NotasCollection';

Meteor.publish("notas", () => NotasCollection.find());