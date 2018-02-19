using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularBackend.Context.DatabaseEntities {
    public class ListHelper {
        
            public static List<int> intListSetter(string s) {
                if (s.Equals("[]") || s.Equals("")) {
                    return new List<int>();
                } else {
                    List<string> strL = new List<string>(s.Split(','));
                    return strL.Select(sI => int.Parse(sI)).ToList();
                }

            }
        
    }
}