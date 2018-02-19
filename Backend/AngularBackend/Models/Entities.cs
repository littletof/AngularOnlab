using AngularBackend.Context.DatabaseEntities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;
using System.Linq;

namespace AngularBackend.Models {

    public class Event {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Description { get; set; }

        [NotMapped]
        public List<string> SelectedDays { get; set; }


        [JsonIgnore]
        [Obsolete("just to store")]
        public string SelectedString {
            get { return string.Join(",", SelectedDays); }
            set { SelectedDays = value.Split(',').ToList(); }
        }

        public List<int> DisabledDays { get; set; }

        [JsonIgnore]
        [Obsolete("just to store")]
        public string DisabledString {
            get { if (DisabledDays != null) {
                    return string.Join(",", DisabledDays);
                } else {
                    return "";
                }
            }
            set {
                DisabledDays = ListHelper.intListSetter(value);
            }
        }

        [JsonIgnore]
        public List<Entry> Entry { get; set; }
    }

    

    public class EventX {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

        [JsonIgnore] //TODO megbeszél kell e
        public List<Entry> Entry { get; set; }
    }

    public class Entry {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Note { get; set; }

        public int EventId { get; set; }

        [JsonIgnore]
        public Event Event { get; set; }
    }
}