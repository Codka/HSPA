using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Data
{
    public class DataContext:DbContext
    {
        public DataContext (DbContextOptions<DataContext> options): base(options){}
        public DbSet<City> Cities { get; set; }
        public DbSet<User> Users { get; set; }
    }
}