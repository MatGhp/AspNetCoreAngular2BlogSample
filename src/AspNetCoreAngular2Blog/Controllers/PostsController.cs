using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.OData;
using AspNetCoreAngular2Blog.Models.DB;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.OData;
// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AspNetCoreAngular2Blog.Controllers
{

   
    public class PostsController : ODataController
    {
        List<Post> _posts = new List<Post> {
                        new Post {
                            Id =22,
                            Title="Title_1 from WebAPI Service",
                            Body="Progressive Web Apps :  Use modern web platform capabilities to deliver app-like experiences. High performance, offline and zero-step installation.",
                            Email="a@b.com",
                            Username="George",
                            Comments = new List<Comment> {
                            new Comment {
                                Id=11,
                                Body="Comment body #1111 .......",
                                Email="s@f.com",
                                Username="user11",
                                PostId = 22
                            },
                            new Comment {
                                Id=12,
                                Body="Comment #22222 ...........",
                                Email="f@g.com",
                                Username="user 12",
                                PostId = 22
                            },
                            new Comment {
                                Id=13,
                                Body="Comment #33333333 XXXX",
                                Email="d@a.com",
                                Username="user 13",
                                PostId = 22
                            }
                        }
                        },
                          new Post {
                            Id=23,
                            Title="Title_2 from WebAPI Service",
                            Body="Native : Build native mobile apps with strategies from Ionic Framework, NativeScript, and React Native.",
                            Email="c@d.com",
                            Username="Matt",
                            Comments = new List<Comment> {
                                 new Comment {
                                Id=14,
                                Body="Comment #4...........",
                                Email="s@m.com",
                                Username="user 14",
                                PostId = 23
                            }
                        }
                        }
                };


        [EnableQuery]
        public IQueryable<Post> Get()
        {
            return _posts.AsQueryable();
        }


    }
}
