import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/about.svg'
import MainIcon from 'shared/assets/icons/main.svg'
import ProfileIcon from 'shared/assets/icons/user.svg'

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль'
    },
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная страница'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'Информация'
    },
]