using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AmbientSound.Controllers {
    [Route ("api")]
    public class SoundsController : Controller {
        List<Sound> _sounds;
        public SoundsController () {
            _sounds = new List<Sound> () {
                new Sound {
                    Id = 1,
                    FileName = "CoffeeShop.wav",
                    IconName = "user"
                },

                new Sound {
                    Id = 2,
                    FileName = "Rain.wav",
                    IconName = "cloud"
                },

                new Sound {
                    Id = 3,
                    FileName = "ThunderStorm.wav",
                    IconName = "flash"
                },

                new Sound {
                    Id = 4,
                    FileName = "WhiteNoise.wav",
                    IconName = "bullhorn"
                },
            };
        }

        [HttpGet ("books")]
        public JsonResult Sounds () {
            return Json(_sounds);
        }
    }
}