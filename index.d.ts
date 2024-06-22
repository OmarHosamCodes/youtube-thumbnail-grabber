// Type definitions for getThumbnail and youtube_parser functions

declare function getThumbnail(link: string, quality: 'max' | 'hq' | 'mq' | 'sd' | 'default'): string;

declare function youtube_parser(url: string): string | false;

export { getThumbnail, youtube_parser };
