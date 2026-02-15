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
        /// Upload an image file containing the image needing classification (supported formats: JPG, PNG, GIF)
        /// </summary>
        [JsonProperty("image")]
        public string Image { get; set; }
    }
}
