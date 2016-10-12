using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using AspNetCoreAngular2Blog.Models.ViewModel;
using AspNetCoreAngular2Blog.Models.DB;
using Microsoft.EntityFrameworkCore;
using AspNetCoreAngular2Blog.Migrations;
using Owin;
using AspNetCoreAngular2Blog.Middlewares;
using System.Reflection;
using System.Web.Http;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;
using Microsoft.Owin.Diagnostics;
using Newtonsoft.Json.Serialization;


namespace AspNetCoreAngular2Blog
{
    public partial class Startup
    {
        

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddSingleton<IConfigurationRoot>(provider => { return Configuration; });
            services.AddDbContext<ApplicationDbContext>(options =>
            {
                options.UseSqlServer(Configuration["ConnectionStrings:ApplicationDbContextConnection"]);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDatabaseErrorPage();
              
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            ConfigureAuth(app);
            app.UseStaticFiles();

            app.UseOwinApp(owinApp =>
            {
                if (env.IsDevelopment())
                {
                    owinApp.UseErrorPage(new ErrorPageOptions()
                    {
                        ShowCookies = true,
                        ShowEnvironment = true,
                        ShowExceptionDetails = true,
                        ShowHeaders = true,
                        ShowQuery = true,
                        ShowSourceCode = true
                    });
                }

                var webApiConfig = new HttpConfiguration();
                var odataMetadataBuilder = new ODataConventionModelBuilder();
                odataMetadataBuilder.EntitySet<Post>("Posts");
                odataMetadataBuilder.EnableLowerCamelCase();
                webApiConfig.MapODataServiceRoute(
                    routeName: "ODataRoute",
                    routePrefix: "odata",
                    model: odataMetadataBuilder.GetEdmModel());
                owinApp.UseWebApi(webApiConfig);

                owinApp.MapSignalR();
            });



            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
