using System.Data.Entity;
using AngularBackend.Models;

namespace AngularBackend.Context {
    public class DatabaseContext : DbContext {
        public DatabaseContext() : base("DefaultConnection") { }

        public DbSet<Country> Countries { get; set; }
        public DbSet<State> States { get; set; }
        public DbSet<City> Cities { get; set; }
    }
}