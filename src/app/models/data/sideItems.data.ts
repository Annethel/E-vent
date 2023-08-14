import { IconDefinition, faCalendar, faCalendarPlus, faLocationDot, faLocationPin } from "@fortawesome/free-solid-svg-icons"

export interface SidebarItems {
    name: string
    icon: IconDefinition
    routerLink: string
}

export const Icons = {
    eventicon : faCalendar,
    addeventicon: faCalendarPlus,
    venuesicon: faLocationDot,
    addvenueicon: faLocationPin
}

export const sidebarItems: SidebarItems[] =  [
    {
        name: 'Events',
        icon: Icons.eventicon,
        routerLink: 'events'
    },
    {
        name: 'Create Events',
        icon: Icons.addeventicon,
        routerLink: 'create-event'
    },
    {
        name: 'Venues',
        icon: Icons.venuesicon,
        routerLink: 'venue'
    },
    {
        name: 'Add Vanue',
        icon: Icons.addvenueicon,
        routerLink: 'add-venue'
    }
]

