declare module '@apiverve/nsfwimagedetector' {
  export interface nsfwimagedetectorOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface nsfwimagedetectorResponse {
    status: string;
    error: string | null;
    data: NSFWImageDetectorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface NSFWImageDetectorData {
      isNSFW:     boolean | null;
      isSafe:     boolean | null;
      confidence: number | null;
      category:   null | string;
  }

  export default class nsfwimagedetectorWrapper {
    constructor(options: nsfwimagedetectorOptions);

    execute(callback: (error: any, data: nsfwimagedetectorResponse | null) => void): Promise<nsfwimagedetectorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: nsfwimagedetectorResponse | null) => void): Promise<nsfwimagedetectorResponse>;
    execute(query?: Record<string, any>): Promise<nsfwimagedetectorResponse>;
  }
}
