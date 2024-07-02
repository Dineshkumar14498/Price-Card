
const Plans = [
    
    {
        title: "FREE",
        price: "$0/month",
        features: [
            "Single User",
            "50GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            { feature: "Unlimited Private Projects", available: false },
            { feature: "Dedicated Phone Support", available: false },
            { feature: "Free Subdomain", available: false },
            { feature: "Monthly Status Reports", available: false },
        ],
    },
    {
        title: "PLUS",
        price: "$9/month",
        features: [
            "5 Users",
            "50GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            "Unlimited Private Projects",
            "Dedicated Phone Support",
            "Free Subdomain",
            { feature: "Monthly Status Reports", available: false },
        ],
    },
    {
        title: "PRO",
        price: "$49/month",
        features: [
            "Unlimited Users",
            "50GB Storage",
            "Unlimited Public Projects",
            "Community Access",
            "Unlimited Private Projects",
            "Dedicated Phone Support",
            "Free Subdomain",
            "Monthly Status Reports",
        ],
    },
];


export default Plans