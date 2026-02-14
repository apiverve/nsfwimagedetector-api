declare module '@apiverve/nsfwimagedetector' {
  export interface nsfwimagedetectorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface nsfwimagedetectorResponse {
    status: string;
    error: string | null;
    data: NSFWImageDetectorData;
    code?: number;
  }


  interface NSFWImageDetectorData {
      isNSFW:     boolean;
      isSafe:     boolean;
      confidence: number;
      category:   string;
  }

  export default class nsfwimagedetectorWrapper {
    constructor(options: nsfwimagedetectorOptions);

    execute(callback: (error: any, data: nsfwimagedetectorResponse | null) => void): Promise<nsfwimagedetectorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: nsfwimagedetectorResponse | null) => void): Promise<nsfwimagedetectorResponse>;
    execute(query?: Record<string, any>): Promise<nsfwimagedetectorResponse>;
  }
}
