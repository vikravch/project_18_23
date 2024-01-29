export interface ProfileNavItemsType
{
        Account: string
        Address: string
        Orders: string
        Wishlist:string
        LogOut:string
}
export const profileNavItems:ProfileNavItemsType =
    {
        Account: '/profile',
        Address: '/profile/address',
        Orders: '/profile/orders',
        Wishlist: '/profile/wishlist',
        LogOut: '/'
    };