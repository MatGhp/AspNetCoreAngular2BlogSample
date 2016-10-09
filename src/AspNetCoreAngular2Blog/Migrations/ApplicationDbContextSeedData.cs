using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCoreAngular2Blog.Models.DB;

using Microsoft.Extensions.DependencyInjection;

namespace AspNetCoreAngular2Blog.Migrations
{
    public static class ApplicationDbContextSeedData
    {
        //public static void SeedData(this IServiceScopeFactory scopeFactory)
        //{
        //    using (var serviceScope = scopeFactory.CreateScope())
        //    {
        //        var context = serviceScope.ServiceProvider.GetService<ApplicationDbContext>();
        //        if (!context.Blogs.Any())
        //        {
        //            var blogs = new List<Blog>
        //            {
        //                new Blog
        //                {
        //                    BlogAddress="MyBlog",
        //                    UserEmail="a@b.com",
        //                    Username = "Admin"
        //                }
        //            };
        //            context.AddRange(blogs);
        //            context.SaveChanges();
        //        }
        //    }
        //}
    }
}
