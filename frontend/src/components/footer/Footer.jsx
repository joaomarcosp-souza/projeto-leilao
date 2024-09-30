import "./Footer.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer>
            <footer>
                <div class="footer-container">
                    <div class="footer-links">
                        <Link to="#" className="footer-link-btn">{t('footer.about')}</Link>
                        <Link to="#" className="footer-link-btn">{t('footer.contact')}</Link>
                        <Link to="#" className="footer-link-btn">{t('footer.privacy')}</Link>
                        <Link to="#" className="footer-link-btn">{t('footer.terms')}</Link>
                    </div>
                    <div class="footer-copyright">
                        &copy;  {new Date().getFullYear()} {t('footer.all-rights')}.
                    </div>
                </div>
            </footer>
        </footer >
    );

}
export default Footer;