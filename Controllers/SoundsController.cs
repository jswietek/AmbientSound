using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
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

        [HttpGet ("sounds")]
        public JsonResult GetSounds () {
            return Json (_sounds);
        }

        [HttpGet ("sounds/{id:int}")]
        public JsonResult GetSound (int id) {
            return Json (_sounds.FirstOrDefault (sound => sound.Id == id));
        }

        [HttpGet ("sounds/data/{id:int}")]
        public ActionResult GetSoundData (int id) {
            var fileName = _sounds.FirstOrDefault (sound => sound.Id == id)?.FileName;
            if (!string.IsNullOrEmpty (fileName)) {
                string path = "ClientApp/src/sound/" + fileName;
                var stream = new FileStream(path, FileMode.Open, FileAccess.Read);
                return new FileStreamResult(stream, "audio/wav");
            }
            return StatusCode(404);
        }
    }
}