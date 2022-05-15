namespace noteBackend.Services.Utils
{
    public class Encrypt
    {
        public string GetPass(string pass)
        {
            return BCrypt.Net.BCrypt.HashPassword(pass);
        }
        public bool VerifyPass(string pass,string passDB)
        {
            return BCrypt.Net.BCrypt.Verify(pass,passDB);
        }
    }
}
