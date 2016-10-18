using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreAngular2Blog.Models.DB;
// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNetCoreAngular2Blog.Controllers
{
    [Route("api/[controller]")]
    public class AdminController : Controller
    {
        private List<User> _users = new List<User>
        {
            new User
            {
                Id = 1,
                Email = "sasha@dff.com",
                Firstname = "Sasha",
                Lastname = "Licht",
                Birthdate = new DateTime(2008, 3, 9),
                Password = "123"
            },
            new User
            {
                Id = 2,
                Email = "ervin@gfg.com",
                Firstname = "Alex",
                Lastname = "Joe",
                Birthdate = new DateTime(2000,5,11),
                Password = "123"
            },
            new User
            {
                Id = 3,
                Email = "david@gmail.com",
                Firstname = "David",
                Lastname = "Doe",
                Birthdate = new DateTime(1990,5,11),
                Password = "123"
            },
            new User
            {
                Id = 4,
                Email = "george@yahoo.com",
                Firstname = "Bill",
                Lastname = "Gates",
                Birthdate = new DateTime(1988,8,21),
                Password = "123"
            },
            new User
            {
                Id = 5,
                Email = "sara@live.com",
                Firstname = "Sara",
                Lastname = "McManaman",
                Birthdate = new DateTime(1978,2,2),
                Password = "123"
            },
            new User
            {
                Id = 6,
                Email = "jacob@microsoft.com",
                Firstname = "Jacob",
                Lastname = "Mayer",
                 Birthdate = new DateTime(1950,3,1),
                Password = "123"
            },
        };


        // GET: api/values
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _users;
        }


        // GET api/values/5
        [Microsoft.AspNetCore.Mvc.HttpGet("{id}")]
        public User Get(int id)
        {
            return _users.FirstOrDefault(u => u.Id == id);
        }

        // GET api/SearchUsers?SearchPattern=XXX
        [Microsoft.AspNetCore.Mvc.HttpGet("SearchUsers")]
        public IList<User> SearchUsers([Microsoft.AspNetCore.Mvc.FromQuery] string SearchPattern)
        {
            if(!string.IsNullOrWhiteSpace(SearchPattern ))
            return _users.Where(u => u.Firstname.ToLower().Contains(SearchPattern.ToLower()) || u.Lastname.ToLower().Contains(SearchPattern.ToLower())).ToList();
            else
            {

                return null;
            }
        }

        // POST api/values
        [Microsoft.AspNetCore.Mvc.HttpPost]
        public void Post([Microsoft.AspNetCore.Mvc.FromBody]User user)
        {
            _users.Add(user);
        }

        // PUT api/values/5
        [Microsoft.AspNetCore.Mvc.HttpPut("{id}")]
        public void Put(int id, [Microsoft.AspNetCore.Mvc.FromBody]User user)
        {

        }

        // DELETE api/values/5
        [Microsoft.AspNetCore.Mvc.HttpDelete("{id}")]
        public void Delete(int id)
        {
            _users.Remove(_users.First(user => user.Id == id));
        }
    }
}
