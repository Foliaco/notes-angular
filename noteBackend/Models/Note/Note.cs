namespace noteBackend.Models.Users
{
    public class Note
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
    }
}
