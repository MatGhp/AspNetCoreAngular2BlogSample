﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreAngular2Blog.Models.ViewModel;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNetCoreAngular2Blog.Controllers
{
    [Route("api/[controller]")]
    public class PostController : Controller
    {
        List<PostViewModel> _posts = new List<PostViewModel> {
                new PostViewModel {
                    Id =22,
                    Title="Title_1 from WebAPI Service",
                    Body="Progressive Web Apps :  Use modern web platform capabilities to deliver app-like experiences. High performance, offline and zero-step installation.",
                    Email="a@b.com",
                    Username="George"
                },
                new PostViewModel {
                    Id=23,
                    Title="Title_2 from WebAPI Service",
                    Body="Native : Build native mobile apps with strategies from Ionic Framework, NativeScript, and React Native.",
                    Email="c@d.com",
                    Username="Matt"
                }
            };
        // GET: api/Post
        [HttpGet]
        public IEnumerable<PostViewModel> Get()
        {
            return _posts;
        }

        // GET api/Post/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _posts.FirstOrDefault(p => p.Id == id);
            if (post == null)
            {
                return NotFound();
            }
            return new ObjectResult(post);
        }

        // POST api/Post
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/Post/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/Post/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
