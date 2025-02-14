import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState<boolean>(false);
    const [isApps, setIsApps] = useState<boolean>(false);
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isPages, setIsPages] = useState<boolean>(false);
    const [isBaseUi, setIsBaseUi] = useState<boolean>(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState<boolean>(false);
    const [isForms, setIsForms] = useState<boolean>(false);
    const [isTables, setIsTables] = useState<boolean>(false);
    const [isCharts, setIsCharts] = useState<boolean>(false);
    const [isIcons, setIsIcons] = useState<boolean>(false);
    const [isMaps, setIsMaps] = useState<boolean>(false);
    const [isMultiLevel, setIsMultiLevel] = useState<boolean>(false);

    // Apps
    const [isCalendar, setCalendar] = useState<boolean>(false);
    const [isEmail, setEmail] = useState<boolean>(false);
    const [isSubEmail, setSubEmail] = useState<boolean>(false);
    const [isEcommerce, setIsEcommerce] = useState<boolean>(false);
    const [isProjects, setIsProjects] = useState<boolean>(false);
    const [isTasks, setIsTasks] = useState<boolean>(false);
    const [isCRM, setIsCRM] = useState<boolean>(false);
    const [isCrypto, setIsCrypto] = useState<boolean>(false);
    const [isInvoices, setIsInvoices] = useState<boolean>(false);
    const [isSupportTickets, setIsSupportTickets] = useState<boolean>(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState<boolean>(false);
    const [isJobs, setIsJobs] = useState<boolean>(false);
    const [isJobList, setIsJobList] = useState<boolean>(false);
    const [isCandidateList, setIsCandidateList] = useState<boolean>(false);


    // Authentication
    const [isSignIn, setIsSignIn] = useState<boolean>(false);
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [isPasswordReset, setIsPasswordReset] = useState<boolean>(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState<boolean>(false);
    const [isLockScreen, setIsLockScreen] = useState<boolean>(false);
    const [isLogout, setIsLogout] = useState<boolean>(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);
    const [isVerification, setIsVerification] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    // Pages
    const [isProfile, setIsProfile] = useState<boolean>(false);
    const [isLanding, setIsLanding] = useState<boolean>(false);
    const [isBlog, setIsBlog] = useState<boolean>(false);

    // Charts
    const [isApex, setIsApex] = useState<boolean>(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState<boolean>(false);
    const [isLevel2, setIsLevel2] = useState<boolean>(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e : any) {
        if (e && e.target && e.target.getAttribute("sub-items")) {
            const ul : any = document.getElementById("two-column-menu");
            const iconItems : any = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item:any) => {
                item.classList.remove("active");
                var id = item.getAttribute("sub-items");
                const getID = document.getElementById(id) as HTMLElement
                if (getID)
                    getID.classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'BaseUi') {
            setIsBaseUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }
        if (iscurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (iscurrentState === 'Widgets') {
            history("/widgets");
            document.body.classList.add('twocolumn-panel');
        }
        if (iscurrentState !== 'Landing') {
            setIsLanding(false);
        }
    }, [
        history,
        iscurrentState,
        isDashboard,
        isApps,
        isAuth,
        isPages,
        isBaseUi,
        isAdvanceUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel
    ]);

    const menuItems : any = [
       
        {
            id: "dashboard",
            label: "Home",
            icon: "ri-apps-2-line",
            link: "/#",
            stateVariables: isDashboard,
            click: function (e : any) {
                e.preventDefault();
                setIsDashboard(!isDashboard);
                setIscurrentState('Dashboard');
                updateIconSidebar(e);
            },
        },
        // {
        //     id: "apps",
        //     label: "Apps",
        //     icon: "ri-apps-2-line",
        //     link: "/#",
        //     click: function (e : any) {
        //         e.preventDefault();
        //         setIsApps(!isApps);
        //         setIscurrentState('Apps');
        //         updateIconSidebar(e);
        //     },
        //     stateVariables: isApps,
        //     subItems: [
        //         {
        //             id: "calendar",
        //             label: "Calendar",
        //             link: "/#",
        //             parentId: "apps",
        //             isChildItem: true,
        //             click: function (e: any) {
        //                 e.preventDefault();
        //                 setCalendar(!isCalendar);
        //             },
        //             stateVariables: isCalendar,
        //             childItems: [
        //                 {
        //                     id: 1,
        //                     label: "Main Calendar",
        //                     link: "/apps-calendar",
        //                     parentId: "apps"
        //                 },
        //                 {
        //                     id: 2,
        //                     label: "Month Grid",
        //                     link: "/apps-calendar-month-grid",
        //                     parentId: "apps"
        //                 },
        //             ]
        //         },
        //         {
        //             id: "chat",
        //             label: "Chat",
        //             link: "/apps-chat",
        //             parentId: "apps",
        //         },
        //         {
        //             id: "mailbox",
        //             label: "Email",
        //             link: "/#",
        //             parentId: "apps",
        //             isChildItem: true,
        //             click: function (e : any) {
        //                 e.preventDefault();
        //                 setEmail(!isEmail);
        //             },
        //             stateVariables: isEmail,
        //             childItems: [
        //                 {
        //                     id: 1,
        //                     label: "Mailbox",
        //                     link: "/apps-mailbox",
        //                     parentId: "apps"
        //                 },
        //                 {
        //                     id: 2,
        //                     label: "Email Templates",
        //                     link: "/#",
        //                     parentId: "apps",
        //                     isChildItem: true,
        //                     stateVariables: isSubEmail,
        //                     click: function (e : any) {
        //                         e.preventDefault();
        //                         setSubEmail(!isSubEmail);
        //                     },
        //                     childItems: [
        //                         { id: 2, label: "Basic Action", link: "/apps-email-basic", parentId: "apps" },
        //                         { id: 3, label: "Ecommerce Action", link: "/apps-email-ecommerce", parentId: "apps" },
        //                     ],
        //                 },
        //             ]
        //         },
        //         {
        //             id: "appsecommerce",
        //             label: "Ecommerce",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e : any) {
        //                 e.preventDefault();
        //                 setIsEcommerce(!isEcommerce);
        //             },
        //             parentId: "apps",
        //             stateVariables: isEcommerce,
        //             childItems: [
        //                 { id: 1, label: "Products", link: "/apps-ecommerce-products", parentId: "apps" },
        //                 { id: 2, label: "Product Details", link: "/apps-ecommerce-product-details", parentId: "apps" },
        //                 { id: 3, label: "Create Product", link: "/apps-ecommerce-add-product", parentId: "apps" },
        //                 { id: 4, label: "Orders", link: "/apps-ecommerce-orders", parentId: "apps" },
        //                 { id: 5, label: "Order Details", link: "/apps-ecommerce-order-details", parentId: "apps" },
        //                 { id: 6, label: "Customers", link: "/apps-ecommerce-customers", parentId: "apps" },
        //                 { id: 7, label: "Shopping Cart", link: "/apps-ecommerce-cart", parentId: "apps" },
        //                 { id: 8, label: "Checkout", link: "/apps-ecommerce-checkout", parentId: "apps" },
        //                 { id: 9, label: "Sellers", link: "/apps-ecommerce-sellers", parentId: "apps" },
        //                 { id: 10, label: "Seller Details", link: "/apps-ecommerce-seller-details", parentId: "apps" },
        //             ]
        //         },
        //         {
        //             id: "appsprojects",
        //             label: "Projects",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e : any) {
        //                 e.preventDefault();
        //                 setIsProjects(!isProjects);
        //             },
        //             parentId: "apps",
        //             stateVariables: isProjects,
        //             childItems: [
        //                 { id: 1, label: "List", link: "/apps-projects-list", parentId: "apps", },
        //                 { id: 2, label: "Overview", link: "/apps-projects-overview", parentId: "apps", },
        //                 { id: 3, label: "Create Project", link: "/apps-projects-create", parentId: "apps", },
        //             ]
        //         },
        //         {
        //             id: "tasks",
        //             label: "Tasks",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e : any) {
        //                 e.preventDefault();
        //                 setIsTasks(!isTasks);
        //             },
        //             parentId: "apps",
        //             stateVariables: isTasks,
        //             childItems: [
        //                 { id: 1, label: "Kanban Board", link: "/apps-tasks-kanban", parentId: "apps", },
        //                 { id: 2, label: "List View", link: "/apps-tasks-list-view", parentId: "apps", },
        //                 { id: 3, label: "Task Details", link: "/apps-tasks-details", parentId: "apps", },
        //             ]
        //         },
        //         {
        //             id: "appscrm",
        //             label: "CRM",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e : any) {
        //                 e.preventDefault();
        //                 setIsCRM(!isCRM);
        //             },
        //             parentId: "apps",
        //             stateVariables: isCRM,
        //             childItems: [
        //                 { id: 1, label: "Contacts", link: "/apps-crm-contacts" },
        //                 { id: 2, label: "Companies", link: "/apps-crm-companies" },
        //                 { id: 3, label: "Deals", link: "/apps-crm-deals" },
        //                 { id: 4, label: "Leads", link: "/apps-crm-leads" },
        //             ]
        //         },
        //         {
        //             id: "appscrypto",
        //             label: "Crypto",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e : any) {
        //                 e.preventDefault();
        //                 setIsCrypto(!isCrypto);
        //             },
        //             parentId: "apps",
        //             stateVariables: isCrypto,
        //             childItems: [
        //                 { id: 1, label: "Transactions", link: "/apps-crypto-transactions" },
        //                 { id: 2, label: "Buy & Sell", link: "/apps-crypto-buy-sell" },
        //                 { id: 3, label: "Orders", link: "/apps-crypto-orders" },
        //                 { id: 4, label: "My Wallet", link: "/apps-crypto-wallet" },
        //                 { id: 5, label: "ICO List", link: "/apps-crypto-ico" },
        //                 { id: 6, label: "KYC Application", link: "/apps-crypto-kyc" },
        //             ]
        //         },
        //         {
        //             id: "invoices",
        //             label: "Invoices",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e : any) {
        //                 e.preventDefault();
        //                 setIsInvoices(!isInvoices);
        //             },
        //             parentId: "apps",
        //             stateVariables: isInvoices,
        //             childItems: [
        //                 { id: 1, label: "List View", link: "/apps-invoices-list" },
        //                 { id: 2, label: "Details", link: "/apps-invoices-details" },
        //                 { id: 3, label: "Create Invoice", link: "/apps-invoices-create" },
        //             ]
        //         },
        //         {
        //             id: "supportTickets",
        //             label: "Support Tickets",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e : any) {
        //                 e.preventDefault();
        //                 setIsSupportTickets(!isSupportTickets);
        //             },
        //             parentId: "apps",
        //             stateVariables: isSupportTickets,
        //             childItems: [
        //                 { id: 1, label: "List View", link: "/apps-tickets-list" },
        //                 { id: 2, label: "Ticket Details", link: "/apps-tickets-details" },
        //             ]
        //         },
        //         {
        //             id: "NFTMarketplace",
        //             label: "NFT Marketplace",
        //             link: "/#",
        //             isChildItem: true,
        //             click: function (e : any) {
        //                 e.preventDefault();
        //                 setIsNFTMarketplace(!isNFTMarketplace);
        //             },
        //             parentId: "apps",
        //             stateVariables: isNFTMarketplace,
        //             childItems: [
        //                 { id: 1, label: "Marketplace", link: "/apps-nft-marketplace" },
        //                 { id: 2, label: "Explore Now", link: "/apps-nft-explore" },
        //                 { id: 3, label: "Live Auction", link: "/apps-nft-auction" },
        //                 { id: 4, label: "Item Details", link: "/apps-nft-item-details" },
        //                 { id: 5, label: "Collections", link: "/apps-nft-collections" },
        //                 { id: 6, label: "Creators", link: "/apps-nft-creators" },
        //                 { id: 7, label: "Ranking", link: "/apps-nft-ranking" },
        //                 { id: 8, label: "Wallet Connect", link: "/apps-nft-wallet" },
        //                 { id: 9, label: "Create NFT", link: "/apps-nft-create" },
        //             ]
        //         },
        //         {
        //             id: "filemanager",
        //             label: "File Manager",
        //             link: "/apps-file-manager",
        //             parentId: "apps",
        //         },
        //         {
        //             id: "todo",
        //             label: "To Do",
        //             link: "/apps-todo",
        //             parentId: "apps",
        //         },
        //         {
        //             id: "job",
        //             label: "Jobs",
        //             link: "/#",
        //             parentId: "apps",
        //             // badgeName: "New",
        //             // badgeColor: "success",
        //             isChildItem: true,
        //             click: function (e : any) {
        //                 e.preventDefault();
        //                 setIsJobs(!isJobs);
        //             },
        //             stateVariables: isJobs,
        //             childItems: [
        //                 {
        //                     id: 1,
        //                     label: "Statistics",
        //                     link: "/apps-job-statistics",
        //                     parentId: "apps",
        //                 },
        //                 {
        //                     id: 2,
        //                     label: "Job Lists",
        //                     link: "/#",
        //                     parentId: "apps",
        //                     isChildItem: true,
        //                     stateVariables: isJobList,
        //                     click: function (e : any) {
        //                         e.preventDefault();
        //                         setIsJobList(!isJobList);
        //                     },
        //                     childItems: [
        //                         {
        //                             id: 1,
        //                             label: "List",
        //                             link: "/apps-job-lists",
        //                             parentId: "apps",
        //                         },
        //                         {
        //                             id: 2,
        //                             label: "Grid",
        //                             link: "/apps-job-grid-lists",
        //                             parentId: "apps",
        //                         },
        //                         {
        //                             id: 3,
        //                             label: "Overview",
        //                             link: "/apps-job-details",
        //                             parentId: "apps",
        //                         },
        //                     ],
        //                 },
        //                 {
        //                     id: 3,
        //                     label: "Candidate Lists",
        //                     link: "/#",
        //                     parentId: "apps",
        //                     isChildItem: true,
        //                     stateVariables: isCandidateList,
        //                     click: function (e : any) {
        //                         e.preventDefault();
        //                         setIsCandidateList(!isCandidateList);
        //                     },
        //                     childItems: [
        //                         {
        //                             id: 1,
        //                             label: "List View",
        //                             link: "/apps-job-candidate-lists",
        //                             parentId: "apps",
        //                         },
        //                         {
        //                             id: 2,
        //                             label: "Grid View",
        //                             link: "/apps-job-candidate-grid",
        //                             parentId: "apps",
        //                         },
        //                     ],
        //                 },
        //                 {
        //                     id: 4,
        //                     label: "Application",
        //                     link: "/apps-job-application",
        //                     parentId: "apps",
        //                 },
        //                 {
        //                     id: 5,
        //                     label: "New Job",
        //                     link: "/apps-job-new",
        //                     parentId: "apps",
        //                 },
        //                 {
        //                     id: 6,
        //                     label: "Companies List",
        //                     link: "/apps-job-companies-lists",
        //                     parentId: "apps",
        //                 },
        //                 {
        //                     id: 7,
        //                     label: "Job Categories",
        //                     link: "/apps-job-categories",
        //                     parentId: "apps",
        //                 },
        //             ],
        //         },
        //         {
        //             id: "apikey",
        //             label: "API Key",
        //             link: "/apps-api-key",
        //             parentId: "apps",
        //             badgeName: "New",
        //             badgeColor: "success"
        //         },
        //     ],
       
        {
            id: "authentication",
            label: "Metrics",
            icon: "bx bxs-copy",
            link: "/stats",
            click: function (e : any) {
                e.preventDefault();
                setIsAuth(!isAuth);
                setIscurrentState('Auth');
                updateIconSidebar(e);
            },
            stateVariables: isAuth,
        },
        {
            id: "pages",
            label: "Forecast",
            icon: "ri-pages-line",
            link: "/pages-starter",
            click: function (e : any) {
                e.preventDefault();
                setIsPages(!isPages);
                setIscurrentState('Pages');
                updateIconSidebar(e);
            },
            stateVariables: isPages,
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;