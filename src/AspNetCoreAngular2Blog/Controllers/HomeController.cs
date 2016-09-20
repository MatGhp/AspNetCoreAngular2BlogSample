using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AspNetCoreAngular2Blog.Models.DB;
namespace AspNetCoreAngular2Blog.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _ctx;
        public HomeController(ApplicationDbContext ctx)
        {
            _ctx = ctx;

        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
