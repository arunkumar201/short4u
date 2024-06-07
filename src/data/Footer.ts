export interface FooterDataType {
    title: string;
    links: Array<string>;
}

export const footerData: FooterDataType[] = [
    {
        title: 'Features',
        links: [
            'URL Shortener',
            'Analytics Dashboard',
            'URL Shortener',
            'Link-in-bio',
            'Branded Links',
            'Mobile Links',
        ],
    },
    {
        title: 'Products',
        links: ['URL Shortener', 'QR Codes', 'Analytics', 'Pages'],
    },
    {
        title: 'Business',
        links: [
            'Trust pilot Business',
            'Products',
            'Plans & Pricing',
            'Business Login',
            'Blog for Business',
        ],
    },

    // Pricing
    // {
    //     title: 'Company',
    //     links: [
    //         'About',
    //         'Careers',
    //         'Press',
    //         'Blog',
    //         'Contact',
    //         'Terms of Service',
    //         'Privacy Policy',
    //     ],
    // },
    // {
    //     title: 'Why Short4u',
    //     links: ['Integrations & API', 'Enterprise Class'],
    // },
];
