# NSFW Image Detector API - Dart/Flutter Client

NSFW Image Detector is an NSFW detection API that checks whether an image contains explicit adult content. Upload a JPG, PNG or GIF up to 5 MB, or pass an image URL, to get isNSFW and isSafe flags.

[![pub package](https://img.shields.io/pub/v/apiverve_nsfwimagedetector.svg)](https://pub.dev/packages/apiverve_nsfwimagedetector)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [NSFW Image Detector API](https://apiverve.com/marketplace/nsfwimagedetector?utm_source=dart&utm_medium=referral&utm_content=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_nsfwimagedetector: ^1.2.6
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_nsfwimagedetector/apiverve_nsfwimagedetector.dart';

void main() async {
  final client = NsfwimagedetectorClient('YOUR_API_KEY');

  try {
    // This API requires a file upload — a JSON body is rejected with a 400.
    final response = await client.executeWithFile('/path/to/your-file');

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

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

## API Reference

- **API Home:** [NSFW Image Detector API](https://apiverve.com/marketplace/nsfwimagedetector?utm_source=dart&utm_medium=referral&utm_content=readme)
- **Documentation:** [docs.apiverve.com/ref/nsfwimagedetector](https://docs.apiverve.com/ref/nsfwimagedetector?utm_source=dart&utm_medium=referral&utm_content=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=referral&utm_content=readme)
