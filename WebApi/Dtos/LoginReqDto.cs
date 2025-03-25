using System.ComponentModel.DataAnnotations;

namespace WebApi.Dtos
{
    public class LoginReqDto
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
