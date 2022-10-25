import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import NavigationBarSection from '../sections/NavigationBarSection'

const ContactsView = () => {
  window.top.document.title = 'Contacts | Fixxo.'

  return (
    <>
      <NavigationBarSection />
      <BreadcrumbSection currentPage="Contacts" />
      <FooterSection />
    </>
  )
}

export default ContactsView