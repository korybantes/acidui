
import clsx from 'clsx';
import './AcidAvatar.css';

export interface AcidAvatarProps {
    src?: string;
    fallback?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'square' | 'circle' | 'industrial';
    className?: string;
}

export const AcidAvatar = ({
    src,
    fallback = '?',
    size = 'md',
    shape = 'industrial',
    className
}: AcidAvatarProps) => {
    return (
        <div className={clsx('ac-avatar', `ac-avatar-${size}`, `ac-avatar-${shape}`, className)}>
            {src ? (
                <img src={src} alt="Avatar" className="ac-avatar-img" />
            ) : (
                <div className="ac-avatar-fallback">
                    {fallback.substring(0, 2).toUpperCase()}
                </div>
            )}
            <div className="ac-avatar-status" />
        </div>
    );
};
