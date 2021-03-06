﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreAngular2Blog.Models.DB;
// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNetCoreAngular2Blog.Controllers
{

    [Microsoft.AspNetCore.Mvc.Route("api/[controller]")]
    public class UsersController : Controller
    {
        private List<User> _users = new List<User>
        {
            new User
            {
                Id = 1,
                Email = "sasha@dff.com",
                Firstname = "Sasha",
                Lastname = "Licht",
                Birthdate = DateTime.Parse("12.12.1970"),
                Password = "123"
            },
            new User
            {
                Id = 2,
                Email = "ervin@gfg.com",
                Firstname = "Alex",
                Lastname = "Joe",
                Birthdate = DateTime.Parse("01.01.2000"),
                Password = "123"
            },
            new User
            {
                Id = 3,
                Email = "david@gmail.com",
                Firstname = "David",
                Lastname = "Doe",
                Birthdate = DateTime.Parse("10.04.1983"),
                Password = "123"
            },
            new User
            {
                Id = 4,
                Email = "george@yahoo.com",
                Firstname = "Bill",
                Lastname = "Gates",
                Birthdate = DateTime.Parse("21.05.1993"),
                Password = "123"
            },
            new User
            {
                Id = 5,
                Email = "sara@live.com",
                Firstname = "Sara",
                Lastname = "McManaman",
                Birthdate = DateTime.Parse("14.08.1981"),
                Password = "123"
            },
            new User
            {
                Id = 6,
                Email = "jacob@microsoft.com",
                Firstname = "Jacob",
                Lastname = "Mayer",
                Birthdate = DateTime.Parse("25.03.2000"),
                Password = "123"
            },
        };

        

        // GET api/values/5
        [Microsoft.AspNetCore.Mvc.HttpGet("{id}")]
        [Authorize]
        public User Get(int id)
        {
            return _users.FirstOrDefault(u => u.Id == id);
        }

        // POST api/values
        [Microsoft.AspNetCore.Mvc.HttpPost]
        [Authorize]
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
