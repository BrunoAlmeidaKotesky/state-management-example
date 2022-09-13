import { INavItem } from "../models/INavItem";
import { IUser } from "../models/IUser";

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export async function getUserInfo(): Promise<IUser> {
    return Promise.resolve({
        email: 'brunokoteskybr@hotmail.com',
        name: 'Bruno Kotesky',
        photo: 'https://deleoye.ng/wp-content/uploads/2016/11/Dummy-image.jpg',
        online: true
    });
}

export async function getNavItems(): Promise<INavItem[]> {
    await sleep(1000);
    return Promise.resolve([
        {
            label: 'Home',
            icon: 'Home',
            url: '/',
            id: 1
        },
        {
            label: 'About',
            icon: 'Info',
            url: '/about',
            id: 2
        },
        {
            label: 'Contact',
            icon: 'CellPhone',
            url: '/contact',
            id: 3
        },
        {
            label: 'Blog',
            icon: 'Blog',
            url: '/blog',
            id: 4
        }
    ]);
}