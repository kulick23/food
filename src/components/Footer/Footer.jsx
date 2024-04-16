import React from 'react';
import './Footer.css'
import Logo from '../../images/Logo.svg'
import Inst from '../../images/inst.svg'
import Twit from '../../images/twit.svg'
import YouTube from '../../images/youtube.svg'

const Footer = () => {
    const sections = [
        {
            title: 'COMPANY',
            links: [
                { text: 'Home', href: '*' },
                { text: 'Order', href: '*' },
                { text: 'FAQ', href: '*' },
                { text: 'Contact', href: '*' }
            ],
            className: 'company'
        },
        {
            title: 'TEMPLATE',
            links: [
                { text: 'Style Guide', href: '*' },
                { text: 'Changelog', href: '*' },
                { text: 'Licence', href: '*' },
                { text: 'Webflow University', href: '*' }
            ],
            className: 'template'
        },
        {
            title: 'FLOWBASE',
            links: [
                { text: 'More Cloneables', href: '*' }
            ],
            className: 'flowbase'
        }
    ];

    // Массив элементов социальных сетей
    const socialLinks = [
        { icon: Inst, alt: 'Inst' },
        { icon: Twit, alt: 'Twit' },
        { icon: YouTube, alt: 'YouTube' }
    ];

    return (
        <footer className='footer'>
            <div className='footer__linksblock'>
                <div className='logoblock'>
                    <img className='footer__logo' src={Logo} alt="Logo"/>
                    <p>Takeaway & Delivery template <br /> for small - medium businesses. </p>
                </div>
                {sections.map((section, index) => (
                    <div className={section.className} key={index}>
                        <b>{section.title}</b>
                        {section.links.map((link, index) => (
                            <a href={link.href} key={index}>{link.text}</a>
                        ))}
                    </div>
                ))}
            </div>
            <hr></hr>
            <div className='footer__socialblock'>
                <p>Built by <a href='*'>Flowbase</a> · Powered by <a href='*'>Webflow</a></p>
                <div className='footer__social'>
                    {socialLinks.map((social, index) => (
                        <div className='footer__social--logo' key={index}>
                            <img src={social.icon} alt={social.alt}/>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer;
