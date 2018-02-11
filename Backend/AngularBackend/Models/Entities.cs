using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;


namespace AngularBackend.Models {

    public class Event {
        [Key]
        public int EventId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        [JsonIgnore] //TODO megbeszél kell e
        public List<Entry> Entry { get; set; }
    }

    public class Entry {
        [Key]
        public int EntryId { get; set; }
        public string Name { get; set; }
        public string Note { get; set; }

        public int EventId { get; set; }

        [JsonIgnore]
        public Event Event { get; set; }
    }
}