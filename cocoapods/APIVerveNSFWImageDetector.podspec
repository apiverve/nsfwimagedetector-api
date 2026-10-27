Pod::Spec.new do |s|
  s.name             = 'APIVerveNSFWImageDetector'
  s.version          = '1.2.3'
  s.summary          = 'NSFW Image Detector scans uploaded photos to determine whether an image contains adult content.'
  s.description      = <<-'DESC'
NSFW Image Detector scans uploaded photos to determine whether an image contains adult content. Send a JPG, PNG, or GIF file up to 10 MB to receive safe and adult content boolean flags.

This iOS/macOS SDK provides a convenient way to access the NSFW Image Detector from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/nsfwimagedetector?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/nsfwimagedetector-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveNSFWImageDetector/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
