# NSFW Image Detector API - Ruby Gem

NSFW Image Detector scans uploaded photos to determine whether an image contains adult content. Send a JPG, PNG, or GIF file up to 10 MB to receive safe and adult content boolean flags.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_nsfwimagedetector'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_nsfwimagedetector
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_nsfwimagedetector'

# Initialize the client
client = APIVerve::Nsfwimagedetector::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg" })

# Print the response
puts response
```

### File Upload

```ruby
# Upload a file
response = client.execute_with_file("/path/to/file.jpg")

# Or use a URL
response = client.execute_with_url("https://example.com/image.jpg")
```

### Error Handling

```ruby
begin
  response = client.execute({ image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Camponotus_flavomarginatus_ant.jpg" })
  puts response["data"]
rescue APIVerve::Nsfwimagedetector::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Nsfwimagedetector::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Nsfwimagedetector::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "isNSFW": false,
    "isSafe": true,
    "confidence": 0.987,
    "category": "neutral"
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/nsfwimagedetector?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/nsfwimagedetector?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/nsfwimagedetector?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
