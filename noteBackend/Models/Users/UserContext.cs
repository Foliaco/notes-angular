using Microsoft.EntityFrameworkCore;

namespace noteBackend.Models.Users
{
    public class UserContext:DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options)
        {

        }
        public DbSet<User> User { get; set; }
    }
}
