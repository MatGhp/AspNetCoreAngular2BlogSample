using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AspNetCoreAngular2Blog.Models.ViewModel
{
    public class PostViewModel
    {
        public int Id { set; get; }
        public string Title { set; get; }
        public string Body { set; get; }
        public string UserId { set; get; }
        public string Username { set; get; }
        public string Email { set; get; }

    }
}
