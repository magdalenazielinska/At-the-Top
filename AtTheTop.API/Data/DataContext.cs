using AtTheTop.API.Models;
using Microsoft.EntityFrameworkCore;

namespace AtTheTop.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) {}
        public DbSet<User> Users {get; set;}
        public DbSet<Summit> Summits {get; set;}
    }
}