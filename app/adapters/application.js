var remote = new window.PouchDB('http://localhost:5984/hello');
var db = new window.PouchDB('hello');

window.PouchDB.debug.enable('*');

db.sync(remote, {
  live: true,   // do a live, ongoing sync
  retry: true   // retry if the conection is lost
});

export default window.EmberPouch.Adapter.extend({
  db: db
});
