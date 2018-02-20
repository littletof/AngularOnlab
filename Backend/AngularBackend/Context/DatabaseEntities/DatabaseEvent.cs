using AngularBackend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace AngularBackend.Context.DatabaseEntities {
    public class DatabaseEvent {

        public static List<Event> getAll() {

            using (var db = new DatabaseContext()) {
                List<Event> result = db.Events.ToList<Event>();
                return result;
            }
        }

        public static Event getById(int event_id) {
            using (var db = new DatabaseContext()) {
                Event result = db.Events.SingleOrDefault<Event>(even => even.Id == event_id);
                return result;
            }
        }

        public static Event getByPath(string event_path) {
            using (var db = new DatabaseContext()) {
                Event result = db.Events.SingleOrDefault<Event>(even => even.Path.ToLower() == event_path.ToLower());
                return result;
            }
        }

        public static Event put(Event ev) {
            if(ev == null) {
                return null;
            }
            using (var db = new DatabaseContext()) {
                ev.Path = DatabaseHelper.CreateMD5(DateTime.UtcNow.ToString()).ToLower();

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
                ev.Id = id;
                    db.Events.AddOrUpdate(ev);
                    db.SaveChanges();
                    return true;
                /*}
                return false;*/
            }
        }

        public static Event deleteById(int id) {
            using (var db = new DatabaseContext()) {
                var even = db.Events.SingleOrDefault(s => s.Id == id);
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
                even.Title,
                even.Id,
                even.Description,
                even.Entry
            };
        }

    }
}