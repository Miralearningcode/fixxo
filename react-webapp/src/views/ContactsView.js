import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ContactFormSection from '../sections/ContactFormSection'
import FooterSection from '../sections/FooterSection'
import MapSection from '../sections/MapSection'
import NavigationBarSection from '../sections/NavigationBarSection'

const ContactsView = () => {
  window.top.document.title = 'Contacts | Fixxo.'

  return (
    <>
      {/* <NavigationBarSection />
      <BreadcrumbSection currentPage="Contacts" />
      <MapSection />
      <FooterSection /> */}
      <ContactFormSection />
    </>
  )
}

export default ContactsView