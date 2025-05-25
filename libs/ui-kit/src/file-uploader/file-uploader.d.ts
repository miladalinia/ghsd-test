import React from 'react';
import { Nullable } from '@ghased-portal/types';
export interface IFileUploadProps {
    id?: string;
    imageButton?: boolean;
    loading?: boolean;
    accept: string;
    hoverLabel?: Nullable<string>;
    dropLabel?: Nullable<string>;
    buttonTitle?: Nullable<string>;
    orLabel?: Nullable<string>;
    width?: string;
    height?: string;
    backgroundColor?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDrop: (event: React.DragEvent<HTMLElement>) => void;
}
declare const FileUploader: React.FC<IFileUploadProps>;
export default FileUploader;
//# sourceMappingURL=file-uploader.d.ts.map