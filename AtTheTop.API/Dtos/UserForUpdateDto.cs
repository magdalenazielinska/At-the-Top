using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using AtTheTop.API.Models;

namespace AtTheTop.API.Dtos
{
    public class UserForUpdateDto
    {
        public DateTime DateOfBirth { get; set; }

        [StringLength(1000, ErrorMessage = "Możesz wpisać w swoim opisie maksymalnie 1000 znaków")]
        public string About { get; set; }

        [StringLength(50, ErrorMessage = "Zbyt długa nazwa miasta")]
        public string City { get; set; }

        [StringLength(50, ErrorMessage = "Zbyt długa nazwa kraju")]
        public string Country { get; set; }
        public string ProfilePhotoUrl { get; set; }
        public ICollection<Summit> Summits { get; set; }

        [StringLength(80, ErrorMessage = "Zbyt długi adres url")]
        public string PageUrl { get; set; }
    }
}