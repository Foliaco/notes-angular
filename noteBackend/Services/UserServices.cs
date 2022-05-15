using noteBackend.Models.Users;
using noteBackend.Services.Utils;

namespace noteBackend.Services
{
    public class UserServices
    {
        private readonly UserContext _context;
        private Encrypt encrypt = new Encrypt();
        public UserServices(UserContext context)
        {
            _context = context;
        }
        public List<User>? LoginUser(string username,string password)
        {
            List<User> users = _context.User.Where(us => us.Username == username).ToList();
            
            if (users==null)
            {
                return null;
            }

            List<User> query = users.Where(us => us.Password == password).ToList();

            return query;

        }

        public async void InsertUser(User user)
        {
            user.Password = encrypt.GetPass(user.Password);
            _context.User.Add(user);
            await _context.SaveChangesAsync();
            return;
        }
    }
}
