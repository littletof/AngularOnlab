using AngularBackend.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularBackend.Controllers
{
    public class DefaultController : ApiController {
        //Creating Instance of DatabaseContext class  
        private DatabaseContext db = new DatabaseContext();

        //Creating a method to return Json data   
        [HttpGet]
        public IHttpActionResult Get() {
            try {
                //Prepare data to be returned using Linq as follows  
                
                //TODO move to data class
                var result = from even in db.Events
                             select new {
                                 even.EventId,
                                 even.Name,
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
    }
}
