using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.NSFWImageDetector
{
    /// <summary>
    /// Query options for the NSFW Image Detector API
    /// </summary>
    public class NSFWImageDetectorQueryOptions
    {
        /// <summary>
        /// An image file to classify (JPG, PNG or GIF, up to 5 MB), or a public image URL
        /// </summary>
        [JsonProperty("image")]
        public string Image { get; set; }
    }
}
