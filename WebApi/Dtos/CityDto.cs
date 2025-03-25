using System.ComponentModel.DataAnnotations;

namespace WebApi.Dtos
{
    public class CityDto
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is mandatory field")]
        [StringLength(50,MinimumLength =2,ErrorMessage = "Name should contain a minimum of 2 characters and a maximum of 50 characters.")]
        [RegularExpression(".*[a-zA-Z]+.*", ErrorMessage ="Only numerics are not allowed")]
        public string Name { get; set; }
        [Required]
        public string Country { get; set; }
    }
}
