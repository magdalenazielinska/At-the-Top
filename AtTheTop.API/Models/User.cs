using System;
using System.Collections.Generic;

namespace AtTheTop.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string About { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string ProfilePhotoUrl { get; set; }
        public ICollection<Summit> Summits { get; set; }
        public string PageUrl { get; set; }
    }
}