using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace AngularBackend.Models {

    public class Event {
        [Key]
        public int EventId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<Entry> Entry { get; set; }
    }

    public class Entry {
        [Key]
        public int EntryId { get; set; }
        public string Name { get; set; }
        public string Note { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
    }
}