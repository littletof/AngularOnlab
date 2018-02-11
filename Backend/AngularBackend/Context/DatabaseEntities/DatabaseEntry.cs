
using AngularBackend.Context.DatabaseEntities;
using AngularBackend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularBackend.Context.DatabaseEntities {
    public class DatabaseEntry { 
        public static List<Entry> getAll() {

            using (var db = new DatabaseContext()) {
                List<Entry> result = (from entry in db.Entries
                                      select entry).ToList<Entry>();
                return result;
            }

        }

        public static List<Entry> getById(int entry_id) {
            using (var db = new DatabaseContext()) {
                List<Entry> result = (from entry in db.Entries
                                      where entry.Id == entry_id
                                      select entry).ToList<Entry>();
                return result;
            }
        }

        public static List<Entry> getForEvent(int event_id) {
            using (var db = new DatabaseContext()) {
                List<Entry> result = (from entry in db.Entries
                                      where entry.EventId == event_id
                                      select entry).ToList<Entry>();
                return result;
            }
        }
    }
}