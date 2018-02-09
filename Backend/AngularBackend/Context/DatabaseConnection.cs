using System.Data.Entity;
using AngularBackend.Models;

namespace AngularBackend.Context {
    public class DatabaseContext : DbContext {
        public DatabaseContext() : base("DefaultConnection") { }

        public DbSet<Event> Events { get; set; }
        public DbSet<Entry> Entries { get; set; }


    }
}