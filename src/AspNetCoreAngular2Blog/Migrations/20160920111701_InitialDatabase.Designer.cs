using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using AspNetCoreAngular2Blog.Models.DB;

namespace AspNetCoreAngular2Blog.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20160920111701_InitialDatabase")]
    partial class InitialDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AspNetCoreAngular2Blog.Models.DB.Blog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("BlogAddress");

                    b.Property<string>("UserEmail");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.ToTable("Blogs");
                });

            modelBuilder.Entity("AspNetCoreAngular2Blog.Models.DB.Comment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Body");

                    b.Property<string>("Email");

                    b.Property<int>("PostId");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.HasIndex("PostId");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("AspNetCoreAngular2Blog.Models.DB.Post", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("BlogId");

                    b.Property<string>("Body");

                    b.Property<string>("Email");

                    b.Property<string>("Title");

                    b.Property<string>("UserId");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.HasIndex("BlogId");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("AspNetCoreAngular2Blog.Models.DB.Comment", b =>
                {
                    b.HasOne("AspNetCoreAngular2Blog.Models.DB.Post")
                        .WithMany("Comments")
                        .HasForeignKey("PostId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("AspNetCoreAngular2Blog.Models.DB.Post", b =>
                {
                    b.HasOne("AspNetCoreAngular2Blog.Models.DB.Blog")
                        .WithMany("Posts")
                        .HasForeignKey("BlogId");
                });
        }
    }
}
