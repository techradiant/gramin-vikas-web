using Microsoft.AspNetCore.Mvc;

namespace GraminVikas.Web.Controllers
{
    public class Panchayat : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult RithalNarwal()
        {
            return View();
        }

        public IActionResult RithalPhogat()
        {
            return View();
        }
    }
}
