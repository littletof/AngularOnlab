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
using System.Web.Script.Serialization;
using Newtonsoft.Json;

namespace AngularBackend.Controllers {
    public class EventPathController : ApiController {

        private DatabaseContext db = new DatabaseContext();

        // GET api/<controller>/{path}        
        public IHttpActionResult Get(string id) {
            return Ok(DatabaseEvent.getByPath(id));
        }
    }
}