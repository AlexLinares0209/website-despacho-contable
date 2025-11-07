
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__content">
                <div className="footer-list">
                    <div className="footer-item">
                        <h3>Contabilidad S.A.</h3>
                        <p>Tu socio estratégico para el éxito financiero</p>
                    </div>
                    <div className="footer-item">
                        <h3>Secciones</h3>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Testimonios</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3>Contacto</h3>
                        <ul>
                            <li>Avenida Siempre Viva 123, Lima</li>
                            <li>+51 123 456 789</li>
                            <li>contabilidadsa@gmail.com</li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h3>Síguenos</h3>
                        <div className="social-icons">
                            <a href="#"><i className="ri-facebook-fill"></i></a>
                            <a href="#"><i className="ri-twitter-fill"></i></a>
                            <a href="#"><i className="ri-linkedin-fill"></i></a>
                            <a href="#"><i className="ri-instagram-fill"></i></a>
                        </div>
                    </div>
                </div>
                <p>&copy; 2025 Contabilidad S.A. Todos los derechos reservados. | Aviso de Privacidad | Terminos y condiciones</p>
            </div>
        </div>
    )
}

export default Footer