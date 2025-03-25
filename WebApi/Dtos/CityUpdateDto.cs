using System.ComponentModel.DataAnnotations;

namespace WebApi.Dtos
{
    public class CityUpdateDto
    {
        [Required]
        public string Name { get; set; }
    }
}
