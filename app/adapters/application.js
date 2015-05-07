// TODO: Create remote database if necessary
var remote = new window.PouchDB('http://localhost:4200/db/bonfire');
var db = new window.PouchDB('bonfire');

window.PouchDB.debug.enable('*');

db.sync(remote, {
  live: true,   // do a live, ongoing sync
  retry: true   // retry if the conection is lost
});

export default window.EmberPouch.Adapter.extend({
  db: db
});
