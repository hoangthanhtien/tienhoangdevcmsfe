import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Ngôn ngữ lập trình',
  },
  {
    component: CNavGroup,
    name: 'Golang',
    to: '/golang',
    icon: (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO8AAADTCAMAAABeFrRdAAAAYFBMVEX///8ArNcAqNUAp9UAqtYApdSDy+Wf2eyp3O75/v/u+fzz+/2+5fLe8vnq9/uu3+9Aud3U7vZrxuMUsNmR0+kutNvM6/WI0OhXv+DE5/O24vHi9PrB5vNcweF7y+UqtNtCtu7cAAAGoklEQVR4nO2c24KiMAyGh7YseOSooozw/m+5gKhIU1oqU734v4u9GQlNk6ZJWvbnBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6A9TE8XYsiPsTFtYqSjb2k1WbzxtMuKMM0Y5wxIbwGIRjjIs53c8UkUZ7Gh1aA8OriX5j8xVjfpswzv9f0BcazwNhOm21V++2Mefc5ayfNLy7fZulLwZms641myKeVgYx9EDNaiuAs/SYrRxlXKdsb2Qt1MrbNjE1IEDz+Fo23Om274R4m13GolyH8Yu9KpQnKWK/tTeNAKUPrH70IphbhisBM2xZe0SJ2B2MZPP5s4NrE3FTbBlZQMvI5IoQ3e3tbkJ1nbFyVwvNmrPXp3w8oeuNs7st3hdORiLkz1uBHH1G2iTLzLNMxClpH5aY9JWP7EXVDC3Ub6wx30fkO0sE+sRNHvs1QPZE9RRztRDRZpvsovbWybgP7dxeR2IrwROxa3dJ6rB4vbyL280PVU4Y2PV2WVWY/VnG9yXhDRCPErUcXytReMM55+49aG78z8FVdHYhOCO/qQtVPTu8rkVT/NFR9cqNMiQSv83OrzuoYxKp6R7SbsDLcNbp6aZTs9+XxUqnzav9tA++Zlj62qhav4C9VallR9hHMj9uXqURk+VDG8ap6V/6uvgcmlPRj6UcS05PO43I8hcXraBvbiTTcTYjILuNhJTU5NcN9zYogqzOaxyv63EiRaJAxc+D5jLM46BfERSGCrPdS8sf8+KbCpqzIfYTVY+Pe6BQWra75eaUToajnT5TCTFFdLk5O+ZcoVB2qk8/9utputCLYVfnKlPj92w5tyIYcK1nZ3oi2ayMRanXp5c7ddHco28zM7+aLKIknmJsyiVp6bGzBaahdSpMwVbLCbH7KcfXN6fe7XyJ2cGkTmYQKzvw8/cxeTk/E1AIgIeOegvvem8rGEROLl6KwEUGs4LlF0sXXpFN8AOsfItyZj8rvMgwmoWKPtgsXSA4tvLn6htGDC8H2ye+2H9CRcInRPJ8100itXr2H7OQX+zP1tYEIrWzUP7Oo87i+57iSn3KhL7H2RpWKTRfPxDMP0pu5ySHcm8jKiPr1FxbmFeMuLUUsPeZAX6ISHOWxNuZlJvuZrO9S/rwPZdThir2WRbVFl8Y3OSORBfOF9K25FFP93oihHK5eY41V29Jk4Ct5P1qoYKA88n4QmRO770sdKnudAcJgVImcYC3UlB20OZ727VcYsR296Ettz3p1TQxF5BsLFcCbhvWD/Y3+bydC32HmS2xXJgobjEqW7OLwm9B3WJZZduENAu1GluyioUP487BRSCxvI3318Vl2Z485SDcIhYZl2UQPfYpxRkpAZDEuzpAiqs/w/HOSyeWBgb76coEw7/sNaAPOVKk+7KusJBSd5tcp07SiqO68voRcAKIq01iHiHCEvprWDDVn9fQjC0EF4KlAaXikPW1gqh3L3JyIUvnTuEIaUBIXSCkmu5MV2W5fXjfy3WSzXVXPrTPi16SDc7VH0+q6iFY/dMBSjnZHnprQK1p123AT08dlDjbflpXiXI+ycEi2qmKq/dzgk+lwRC+IibuYC0P0YzurxePtYUdfnGtyKXJNtMdl0jWj8XnqAzfBuUVZAb2edSdXn5yYthuyU8Vs//oS6Xep6nTfqEGwEAfFYNu7DFV4LsvkHCrvIYisXXfKIrkVcdltmmWzP+fqW7MWJyn2TDSoum8NfM6pzxhu3LbqiSq5+8bD6w7H1XdV3N6+sulQ3dXtdxGTHFOJEPNO596F3pJMeJwSU2mpMePjmz+HSu9MEPVj05x1x3ukrvPbsdaX6wZ+aO3Rn7j9TPQKTRjWBGvDxFpS1/HFyRsWhwjCey2BdjaLQvjzTtYXI5irsMjGFZ9F2BPC1Z0riXyeS7NYzu9/515uV97PckFI54s09JdHySyXFmRN4o6jccQRqvO/MjPXmInPfKXxZG325ZDghTofqgx9WvjVF3wRG+i7rU0FMHlX4Wxi4mbKPvlV2ZN1Or2KBc90++Uqn7jF3sH84lu+hG2WYKosZATjscl2uck9tVcLzqrvsO2ddd4Uu+PxCsH8w4m+IUwQxYyoIbub/R9KMCZJ8qL9bwrY/cyY80MaGSvbsb5U2ePD/ZsMVgxuTH8du21wqtJrWp2CreVyW5+DUxrXdXytTuF53nwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHDPf4sjUi4ZyFr3AAAAAElFTkSuQmCC"
        style={{ width: '2rem', marginRight: '1rem' }}
        // customClassName="nav-icon"
      />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Giới thiệu về Golang',
        to: '/golang/golang-intro',
      },
    ],
  },
  // {
  //   component: CNavItem,
  //   name: 'Dashboard',
  //   to: '/dashboard',
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       to: '/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
