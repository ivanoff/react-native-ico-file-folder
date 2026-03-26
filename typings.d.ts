declare module 'react-native-ico-file-folder' {
    import { ReactNode } from 'react';
    import { SvgProps } from 'react-native-svg';

    type AdditionalProps = {
      onError?: (error: Error) => void;
      onLoad?: () => void;
      fallback?: ReactNode;
    };

    type iconNames = 'certificate-5' |
      'file-27' |
      'file-1' |
      'file-29' |
      'file-20' |
      'file-5' |
      'file-46' |
      'file-31' |
      'analytics-4' |
      'file-52' |
      'file-38' |
      'file-49' |
      'file-16' |
      'file-64' |
      'file-6' |
      'folder-11' |
      'css' |
      'text' |
      'clipboard-3' |
      'folder-24' |
      'contract-11' |
      'cabinet-1' |
      'folder-29' |
      'pdf-1' |
      'curriculum-vitae-1' |
      'folder-21' |
      'file-70' |
      'folder-33' |
      'clipboard-5' |
      'picture-2' |
      'invoice' |
      'file-39' |
      'file-56' |
      'file-47' |
      'contract-5' |
      'psd-1' |
      'file-43' |
      'zip-file' |
      'file-62' |
      'gif-1' |
      'analytics-7' |
      'network' |
      'cdr' |
      'image' |
      'file-2' |
      'archive' |
      'file-65' |
      'clipboard-4' |
      'file-32' |
      'file-66' |
      'zip-file-1' |
      'file-36' |
      'ps' |
      'contract-13' |
      'file-54' |
      'folder-28' |
      'file-23' |
      'archive-3' |
      'zip-file-2' |
      'file-8' |
      'folder-41' |
      'analytics-2' |
      'list-1' |
      'certificate-2' |
      'folder-17' |
      'file-17' |
      'folder-40' |
      'folder-2' |
      'pdf' |
      'file-61' |
      'file-37' |
      'folder-26' |
      'file-63' |
      'file' |
      'folder-4' |
      'folder-32' |
      'folder-12' |
      'checklist-2' |
      'folder-35' |
      'folder-3' |
      'video-file-2' |
      'outbox' |
      'doc-1' |
      'file-19' |
      'contract-9' |
      'file-50' |
      'html' |
      'file-48' |
      'email-1' |
      'clipboard-1' |
      'folder-37' |
      'folder-14' |
      'folder-9' |
      'certificate-6' |
      'folder-39' |
      'inbox-1' |
      'xls' |
      'contract-7' |
      'folder-19' |
      'clipboard-2' |
      'png' |
      'file-57' |
      'file-14' |
      'curriculum-vitae-4' |
      'analytics-1' |
      'file-12' |
      'gif' |
      'certificate-3' |
      'txt' |
      'folder-8' |
      'iso' |
      'analytics-6' |
      'file-25' |
      'file-9' |
      'file-22' |
      'certificate-1' |
      'doc-2' |
      'mkv' |
      'file-18' |
      'notepad' |
      'folder-15' |
      'contract-6' |
      'contract-8' |
      'folder-34' |
      'checklist' |
      'file-26' |
      'file-3' |
      'archive-1' |
      'certificate' |
      'file-28' |
      'archive-2' |
      'file-68' |
      'checklist-1' |
      'cabinet' |
      'monitor' |
      'file-33' |
      'file-60' |
      'folder-36' |
      'video-file-1' |
      'audio-file' |
      'file-53' |
      'file-34' |
      'contract-12' |
      'folder-42' |
      'taxes' |
      'favorite' |
      'certificate-4' |
      'folder-6' |
      'picture-3' |
      'file-59' |
      'music-file' |
      'file-42' |
      'psd' |
      'folders' |
      'file-51' |
      'contract-2' |
      'contract-4' |
      'doc-3' |
      'folder-31' |
      'jpg' |
      'folder-20' |
      'contract-3' |
      'folder-30' |
      'flv' |
      'file-55' |
      'clipboard' |
      'folder-10' |
      'file-35' |
      'contract-14' |
      'list' |
      'folder-7' |
      'analytics' |
      'curriculum-vitae-2' |
      'folder-1' |
      'inbox' |
      'file-41' |
      'analytics-5' |
      'folder-16' |
      'file-30' |
      'folder' |
      'mkv-2' |
      'picture-4' |
      'folder-5' |
      'folder-23' |
      'email' |
      'file-13' |
      'curriculum-vitae' |
      'file-7' |
      'folder-22' |
      'video-file' |
      'analytics-3' |
      'file-15' |
      'folder-27' |
      'folder-38' |
      'file-69' |
      'swf' |
      'picture-1' |
      'file-21' |
      'file-45' |
      'folder-18' |
      'folder-13' |
      'sketch' |
      'mkv-1' |
      'file-11' |
      'file-58' |
      'curriculum-vitae-3' |
      'file-40' |
      'file-4' |
      'php' |
      'contract' |
      'contract-10' |
      'folder-25' |
      'contract-1' |
      'file-10' |
      'doc' |
      'ai' |
      'file-44' |
      'file-24' |
      'file-67' |
      'picture';

    type iconColors = '#1C75A1' |
      '#27A2DB' |
      '#2D93BA' |
      '#31978C' |
      '#3A556A' |
      '#3EA69B' |
      '#44C4A1' |
      '#64798A' |
      '#D15241' |
      '#D5D6DB' |
      '#DC8744' |
      '#DEDFE0' |
      '#E1E6E9' |
      '#E56353' |
      '#E5AE4E' |
      '#EBECED' |
      '#EBF0F3' |
      '#F6C358' |
      '#FCD462' |
      '#FFFFFF';

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors?: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}
