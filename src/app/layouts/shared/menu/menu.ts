import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        label: 'Navigation',
        isTitle: true
    },
    {
        label: 'Tableau de bord',
        icon: 'home',
        link: '/',
        badge: {
            variant: 'success',
            text: '1',
        }
    },
    {
        label: 'Appareils',
        isTitle: true
    },
    {
        label: 'Mes Appareils',
        icon: 'briefcase',
        subItems: [
            {
                label: 'Liste Des Appareils',
                link: '/apps/project-list',
            },
            {
                label: 'Historique',
                link: '/other/pages-activity'
            },
        ]
    },
    
    {
        label: 'Paramètres',
        isTitle: true
    },
    {
        label: 'Paramètres',
        icon: 'file-text',
        subItems: [
        
            {
                label: 'Profile',
                link: '/other/pages-profile'
            },
            
            {
                label: 'Localisation',
                link: '/other/pages-profile'
            },
            {
                label: 'Pramètres',
                link: '/other/pages-profile'
            },
            {
                label: 'Aide',
                link: '/other/pages-profile'
            },
            {
                label: 'A propos',
                link: '/other/pages-profile'
            },
        ]
    },
    
];
