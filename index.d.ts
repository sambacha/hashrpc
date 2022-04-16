// @see https://github.com/microsoft/TypeScript/issues/31535
declare class TextEncoder { encode(input?: string): Uint8Array }
declare class TextDecoder { decode(input?: Uint8Array): string }
