using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using AngularBackend.Models;
using AngularBackend.Context;

namespace AngularBackend.Controllers {
    public class EventsController : ApiController {

        private DatabaseContext db = new DatabaseContext();

        // GET api/<controller>
        public IEnumerable<Event> Get() {
            return new Event[] { new Event(), new Event() };
        }

        // GET api/<controller>/5
        public Event Get(int id) {
            var e = new Event();
            e.EventId = id;
            return e;
        }

        // POST api/<controller>
        public void Post([FromBody]Event value) {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]Event value) {
        }

        // DELETE api/<controller>/5
        public void Delete(int id) {
        }
    }
}