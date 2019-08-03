namespace AtTheTop.API.Models
{
    public class Summit
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string MountainRange { get; set; }
        public string Country { get; set; }
        public string Date { get; set; }
        public int Altitude { get; set; }
        public string Route { get; set; }
        public string Difficulty { get; set; }
        public string UserDescription { get; set; }
        public User User { get; set; }
        public int UserId { get; set; }
    }
}