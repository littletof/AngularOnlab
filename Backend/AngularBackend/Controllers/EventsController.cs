using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using AngularBackend.Models;
using AngularBackend.Context;
using AngularBackend.Context.DatabaseEntities;
using System.Diagnostics;

namespace AngularBackend.Controllers {
    public class EventsController : ApiController {

        private DatabaseContext db = new DatabaseContext();

        // GET api/<controller>
        public IHttpActionResult Get() {
            Debug.WriteLine("Get /events");
            try {
                var result = DatabaseEvent.getAll();

                return Ok(result);
            } catch (Exception) {
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();
            }
        }

        // GET api/<controller>/5
        public IHttpActionResult Get(int id) {
            Debug.WriteLine("Get /events/{0}", id);
            try {
                var result = DatabaseEvent.getById(id);

                // Empty array is better?!
                /*if (result.Count == 0) {
                    return NotFound();
                }*/

                return Ok(result);
            } catch (Exception) {
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();
            }
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody]Event value) {
            Debug.WriteLine("post: {0}", value);
            try {
                var result = DatabaseEvent.put(value);

                // Empty array is better?!
                /*if (result.Count == 0) {
                    return NotFound();
                }*/

                return Ok(result);
            } catch (Exception) {
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();
            }
        }

        public IHttpActionResult Options() {
            return Ok();
        }

        // PUT api/<controller>/5
        public IHttpActionResult Put(int id, [FromBody]Event value) {
            Debug.WriteLine("put: id:{0}, value:{1}",id, value);
            try {
                var result = DatabaseEvent.putById(id, value);

                return Ok(result);
            } catch (Exception) {
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();
            }
        }

        // DELETE api/<controller>/5
        public IHttpActionResult Delete(int id) {
            Debug.WriteLine("delete: id:{0}", id);
            try {
                var result = DatabaseEvent.deleteById(id);

                return Ok(result);
            } catch (Exception) {
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();
            }
        }
    }
}