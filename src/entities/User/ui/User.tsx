import { classNames } from 'shared/lib/classNames/classNames';

interface UserProps {
    className?: string;
}

export const User = ({ className }: UserProps) => {
    return (
        <div className={classNames('', {}, [className])}>

        </div>
    );
};