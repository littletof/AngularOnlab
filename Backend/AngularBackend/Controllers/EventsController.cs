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
        public IHttpActionResult Get() {
            try {
                //TODO move to data class
                var result = from even in db.Events
                             select new {
                                 even.EventId,
                                 even.Name,
                                 even.Description,
                                 Entry = from entry in db.Entries
                                         where entry.EventId == even.EventId
                                         select new {
                                             entry.Name,
                                             entry.Note,
                                             entry.EventId
                                         }

                             };


                return Ok(result);
            } catch (Exception) {
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();
            }
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id) {
            try {
                //TODO move to data class
                var result = from even in db.Events
                             where even.EventId == id
                             select new {
                                 even.EventId,
                                 even.Name,
                                 even.Description,
                                 Entry = from entry in db.Entries
                                         where entry.EventId == even.EventId
                                         select new {
                                             entry.Name,
                                             entry.Note,
                                             entry.EventId
                                         }

                             };


                return Ok(result);
            } catch (Exception) {
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();
            }
        }

        // POST api/<controller>
        public void Post([FromBody]Event value) {
            Console.WriteLine(value);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]Event value) {
        }

        // DELETE api/<controller>/5
        public void Delete(int id) {
        }
    }
}