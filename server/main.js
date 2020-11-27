import { Meteor } from 'meteor/meteor';
import { NotasCollection } from '/imports/api/NotasCollection';
import "/imports/api/NotasPubs";
import notasJSON from "/imports/db/notas.json";

Meteor.startup(() => {
  console.log(`Hay ${NotasCollection.find().count()} notas en la BD`);
  if (NotasCollection.find().count() === 0) {
    notasJSON.forEach(nota => {
      NotasCollection.insert(nota);
    });
  }
});