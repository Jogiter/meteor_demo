// 1.0.1
// if (Meteor.isClient) {
//   Template.body.helpers({
//     tasks: [{
//       text: 'this is task 1'
//     }, {
//       text: 'this is task 2'
//     }, {
//       text: 'this is task 3'
//     }]
//   })
// }

// 1.0.2
Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  Template.body.helpers({
    task: function() {
      return Task.find();
    }
  })
}