using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreAngular2Blog.Models.DB
{
    public class User
    {
        public int Id { set; get; }
        public string Email { set; get; }
        public string Firstname { set; get; }
        public string Lastname { set; get; }
        public DateTime Birthdate { set; get; }
        public string Password { set; get; }
    }
}
