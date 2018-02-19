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
            
            context.SaveChanges();
        }
    }
}