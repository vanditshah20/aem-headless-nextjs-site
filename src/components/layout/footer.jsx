'use client';

import React, { useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon, Button, Input } from '../ui';

/**
 * Unified footer component supporting different variants
 * @param {Object} props - Component props
 * @param {'simple'|'detailed'} [props.variant='detailed'] - Footer style variant
 * @param {boolean} [props.showNewsletter=true] - Whether to show newsletter signup
 * @param {boolean} [props.showSocial=true] - Whether to show social media links
 * @param {Array} [props.footerLinks] - Custom footer link configuration
 * @param {Object} [props.newsletter] - Newsletter configuration
 * @param {string} [props.companyName='Flow'] - Company name for copyright
 * @param {string} [props.backgroundImage] - Background decoration image
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {React.ReactElement} Footer component
 */
const Footer = ({
  variant = 'detailed',
  showNewsletter = true,
  showSocial = true,
  footerLinks = [
    {
      title: 'Platform',
      links: [
        { label: 'Solutions', href: '/#solutions' },
        { label: 'How it works', href: '/about' },
        { label: 'Pricing', href: '/pricing' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Help Center', href: '#' },
        { label: 'Support', href: '/contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Our Mission', href: '/about' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '/contact' }
      ]
    }
  ],
  newsletter = {
    title: 'Your Source for Green Energy Updates',
    description: 'Stay in the loop with our Green Horizon newsletter, where we deliver bite-sized insights into the latest green energy solutions.',
    placeholder: 'Your e-mail...',
    buttonText: 'Get in touch'
  },
  companyName = 'Flow',
  backgroundImage,
  className = ''
}) => {
  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Newsletter signup:', email);
    // In a real app, this would make an API call
  }, []);

  if (variant === 'simple') {
    return (
      <footer className={`bg-gray-900 text-white ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {showSocial && (
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Icon name="facebook" size={20} color="currentColor" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Icon name="instagram" size={24} color="currentColor" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Icon name="linkedin" size={24} color="currentColor" />
                </a>
              </div>
            </div>
          )}
        </div>
      </footer>
    );
  }

  // Detailed variant
  return (
    <footer className={`relative py-12 lg:py-24 bg-orange-50 overflow-hidden ${className}`}>
      {backgroundImage && backgroundImage.trim() && (backgroundImage.startsWith('/') || backgroundImage.startsWith('http')) && (
        <Image
          className="absolute bottom-0 left-0 object-contain"
          src={backgroundImage}
          alt=""
          width={400}
          height={300}
          style={{ objectFit: 'contain' }}
        />
      )}

      <div className="container px-4 mx-auto relative">
        <div className="flex flex-wrap mb-16 -mx-4">
          {/* Logo Section */}
          <div className="w-full lg:w-2/12 xl:w-2/12 px-4 mb-16 lg:mb-0">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.svg"
                alt={`${companyName} Logo`}
                className="h-8"
                width={120}
                height={32}
              />
            </Link>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-7/12 lg:w-6/12 px-4 mb-16 lg:mb-0">
            <div className="flex flex-wrap -mx-4">
              {footerLinks.map((section) => (
                <div key={section.title} className="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0">
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul>
                    {section.links.map((link, index) => (
                      <li key={link.label} className={index < section.links.length - 1 ? "mb-4" : ""}>
                        <Link
                          href={link.href}
                          className="inline-block text-gray-600 hover:text-lime-500 font-medium transition-colors duration-200"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          {showNewsletter && (
            <div className="w-full md:w-5/12 lg:w-4/12 px-4">
              <div className="max-w-sm p-8 bg-teal-900 rounded-2xl mx-auto md:mr-0">
                <h5 className="text-xl font-medium text-white mb-4">
                  {newsletter.title}
                </h5>
                <p className="text-sm text-white opacity-80 leading-normal mb-10">
                  {newsletter.description}
                </p>
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-3">
                  <fieldset>
                    <legend className="sr-only">Newsletter Subscription</legend>
                    <input
                      type="email"
                      name="email"
                      placeholder={newsletter.placeholder}
                      required
                      className="h-12 w-full px-4 py-1 bg-white placeholder-gray-700 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      className="h-12 text-teal-900 border-lime-500 hover:border-white bg-lime-500 hover:bg-white mt-3"
                    >
                      {newsletter.buttonText}
                    </Button>
                  </fieldset>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap -mb-3 justify-between items-center">
          {showSocial && (
            <div className="flex items-center mb-3 space-x-4">
              <a
                className="inline-block text-black hover:text-lime-500 transition-colors duration-200"
                href="#"
                aria-label="Facebook"
              >
                <Icon name="facebook" size={20} color="currentColor" />
              </a>
              <a
                className="inline-block text-black hover:text-lime-500 transition-colors duration-200"
                href="#"
                aria-label="Instagram"
              >
                <Icon name="instagram" size={24} color="currentColor" />
              </a>
              <a
                className="inline-block text-black hover:text-lime-500 transition-colors duration-200"
                href="#"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" size={24} color="currentColor" />
              </a>
            </div>
          )}
          <p className="text-sm text-gray-500 mb-3">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;