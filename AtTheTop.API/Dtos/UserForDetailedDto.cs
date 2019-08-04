using System;
using System.Collections.Generic;
using AtTheTop.API.Models;

namespace AtTheTop.API.Dtos
{
    public class UserForDetailedDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int Age { get; set; }
        public string About { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string ProfilePhotoUrl { get; set; }
        public ICollection<Summit> Summits { get; set; }
        public string PageUrl { get; set; }
    }
}