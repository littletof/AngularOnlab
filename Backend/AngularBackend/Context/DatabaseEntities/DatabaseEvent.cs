using AngularBackend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace AngularBackend.Context.DatabaseEntities {
    public class DatabaseEvent {

        public static List<Event> getAll() {

            using (var db = new DatabaseContext()) {
                List<Event> result = (from even in db.Events
                                      select even).ToList<Event>();
                return result;
            }
        }

        public static List<Event> getById(int event_id) {
            using (var db = new DatabaseContext()) {
                List<Event> result = (from even in db.Events
                                      where even.EventId == event_id
                                      select even).ToList<Event>();
                return result;
            }
        }

        public static Event put(Event ev) {
            if(ev == null) {
                return null;
            }            

            using (var db = new DatabaseContext()) {

                Event result = db.Events.Add(ev);
                db.SaveChanges();
                return result;
            }

        }


        // what to do if id != ev.id 
        public static Boolean putById(int id, Event ev) {
            if (ev == null) {
                return false;
            }

            using (var db = new DatabaseContext()) 
            {
                /*var result = db.Events.SingleOrDefault(e => e.EventId == id);
                if (result != null) {*/
                ev.EventId = id;
                    db.Events.AddOrUpdate(ev);
                    db.SaveChanges();
                    return true;
                /*}
                return false;*/
            }
        }

        public static Event deleteById(int id) {
            using (var db = new DatabaseContext()) {
                var even = db.Events.SingleOrDefault(s => s.EventId == id);
                if(even != null) {
                    var deleted = db.Events.Remove(even);
                    db.SaveChanges();
                    return deleted;
                }                
            }
            return null;
        }


        // TODO delete
        public Object toApiOutput(Event even)
        {
            return new {
                even.Name,
                even.EventId,
                even.Description,
                even.Entry
            };
        }

    }
}