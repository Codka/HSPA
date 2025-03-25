using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi.Dtos;
using WebApi.Interfaces;

namespace WebApi.Controllers
{
    public class AccountController : BaseController
    {
        private readonly IUnitOfWork uow;

        public AccountController(IUnitOfWork uow)
        {
            this.uow = uow;
        }
        //api/account/login
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginReqDto loginReq)
        {
            var user = await uow.UserRepository.Authenticate(loginReq.Username, loginReq.Password);
            if(user is null)
            {
                return Unauthorized();
            }
            else
            {
                var loginRes = new LoginResDto()
                {
                    UserName = user.Username,
                    Token = "Token will generated"
                };
                return Ok(loginRes);
            }
        }
    }
}
