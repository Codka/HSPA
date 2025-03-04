using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController : ControllerBase
    {
        [HttpGet("")]
        public IEnumerable<string> GetStrings(){
            return new string[]{"Mogadishu","Hargeysa","Kismayo","Baydabo","Boosaaso"};
        }
    }
}