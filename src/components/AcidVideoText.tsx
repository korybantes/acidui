
import clsx from 'clsx';
import './AcidVideoText.css';

export interface AcidVideoTextProps {
    text: string;
    videoSrc: string;
    className?: string;
}

export const AcidVideoText = ({ text, videoSrc, className }: AcidVideoTextProps) => {
    return (
        <div className={clsx('ac-video-text-container', className)}>
            <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="ac-video-text-bg"
            />
            <h1 className="ac-video-text-mask">{text}</h1>
        </div>
    );
};
