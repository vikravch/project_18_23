export interface ProfileType {
    orders: OrdersHistoryType[]
    addresses: AddressType[]
}

export interface OrdersHistoryType {
    Number_ID: string
    Dates: string
    Status: string
    Price: string
}

export interface AddressType {
    addressTitle: string
    name: string
    phone: string
    address: string;
}

export const profileData: ProfileType =
    {
        orders:
            [
                {
                    Number_ID: '##3456_980',
                    Dates: 'October 11, 2023',
                    Status: 'Delivered',
                    Price: ' $345.00'
                },
                {
                    Number_ID: '##1122',
                    Dates: 'December 11, 2025',
                    Status: 'Delivered',
                    Price: ' $0'
                },
                {
                    Number_ID: '##564356',
                    Dates: 'May 11, 2024',
                    Status: 'Delivered',
                    Price: ' $345.66'
                },
                {
                    Number_ID: '##04',
                    Dates: 'October 11, 2021',
                    Status: 'not Delivered',
                    Price: ' $111.00'
                },
                {
                    Number_ID: '##3456_980',
                    Dates: 'October 11, 2023',
                    Status: 'Delivered',
                    Price: ' $345.00'
                },
                {
                    Number_ID: '##1122',
                    Dates: 'December 11, 2025',
                    Status: 'Delivered',
                    Price: ' $0'
                },
                {
                    Number_ID: '##564356',
                    Dates: 'May 11, 2024',
                    Status: 'Delivered',
                    Price: ' $345.66'
                },
                {
                    Number_ID: '##04',
                    Dates: 'October 11, 2021',
                    Status: 'not Delivered',
                    Price: ' $111.00'
                },
                {
                    Number_ID: '11',
                    Dates: 'January 11, 1990',
                    Status: 'Delivered',
                    Price: ' $775.00'
                },
                {
                    Number_ID: '##3456_980',
                    Dates: 'October 11, 2023',
                    Status: 'not Delivered',
                    Price: ' $3'
                },
            ],
        addresses:
            [
                {
                    addressTitle: 'Billing Address',
                    name: 'Sofia Havertz',
                    phone: '(+1) 234 567 890',
                    address: '345 Long Island, NewYork, United States'
                },
                {
                    addressTitle: 'Shipping Address',
                    name: 'Sofia Havertz',
                    phone: '(+1) 234 567 890',
                    address: '345 Long Island, NewYork, United States'
                },
                {
                    addressTitle: 'Living Address',
                    name: 'Sofia Havertz',
                    phone: '(+1) 234 567 890',
                    address: '345 Long Island, NewYork, United States'
                },
                {
                    addressTitle: 'Parents Address',
                    name: 'Sofia Havertz',
                    phone: '(+1) 234 567 890',
                    address: '345 Long Island, NewYork, United States'
                }


            ]
    }