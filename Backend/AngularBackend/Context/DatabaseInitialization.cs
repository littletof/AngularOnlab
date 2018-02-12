using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using AngularBackend.Models;

namespace AngularBackend.Context {
    public class DatabaseInitializer : DropCreateDatabaseIfModelChanges<DatabaseContext> {
        protected override void Seed(DatabaseContext context) {
            base.Seed(context);

            var entries = new List<Entry> {
                new Entry {
                    Name = "Jürgen",
                    Note = "First entry"
                },
                new Entry {
                    Name = "Secundo",
                    Note = "Second Entry"
                }
            };

            var seedEvent = new Event {
                    Title="First Event",
                    Entry = entries,
                    Description = "This is the first ever event"

            };

            context.Events.Add(seedEvent);
            context.SaveChanges();
        }
    }
}