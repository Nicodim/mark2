import {FC} from 'react';
import {LinkProps} from "react-router-dom";
import {LinkBox} from "shared/ui/AppLink/styles";

interface AppLinkProps extends LinkProps {
    className?: string;
    inverted?: boolean
}

const AppLink: FC<AppLinkProps> = (props) => {
    const {to, children, className, inverted, ...otherProps} = props
    return (
        <LinkBox to={to}
                 className={className}
                 inverted={inverted}
                 {...otherProps}
        >
            {children}
        </LinkBox>
    );
};

export default AppLink;