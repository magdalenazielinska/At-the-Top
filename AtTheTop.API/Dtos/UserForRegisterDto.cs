using System.ComponentModel.DataAnnotations;

namespace AtTheTop.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(20, MinimumLength = 4, ErrorMessage = "Twoje hasło musi składać się z minimum 4, a maksimum 20 znaków")]
        public string Password { get; set; }
    }
}