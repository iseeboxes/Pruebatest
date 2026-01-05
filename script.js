// Internacionalización - Textos en inglés y español
const translations = {
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.services": "Services",
        "nav.process": "How it Works",
        "nav.testimonials": "Testimonials",
        "nav.contact": "Contact",
        "nav.getStarted": "Get Started",
        
        // Hero
        "hero.tagline": "DMV & VIN Verification",
        "hero.title": "Expert DMV & Title Services",
        "hero.subtitle": "in West Palm Beach",
        "hero.description": "Skip the long lines and confusing paperwork. We are your local vehicle paperwork solution in South Florida.",
        "hero.cta": "Get a Free Quote",
        "hero.learnMore": "Learn More",
        
        // About
        "about.tagline": "ABOUT US",
        "about.title": "Your Trusted Partner in Vehicle Paperwork",
        "about.description": "At Auto Palm Beach, we have helped hundreds of people in South Florida navigate the complex DMV system, making the paperwork simple, secure, and stress-free. We are your specialized administrative office in West Palm Beach.",
        "about.feature1.title": "Transparency",
        "about.feature1.description": "We guarantee 100% legal and clear transactions.",
        "about.feature2.title": "Experience",
        "about.feature2.description": "We have in-depth knowledge of DMV procedures.",
        "about.feature3.title": "Effective Management",
        "about.feature3.description": "We help you avoid long lines and paperwork errors.",
        "about.feature4.title": "Client Focus",
        "about.feature4.description": "Your peace of mind is the center of our service.",
        
        // Services
        "services.tagline": "OUR SERVICES",
        "services.title": "Explore Our Services",
        "services.cta": "Get Started",
        "services.service1.title": "Title Transfers & DMV Docs",
        "services.service1.description": "Simplifying title transfers and DMV documentation for a fast, stress-free process.",
        "services.service2.title": "Notary Public VIN Verification",
        "services.service2.description": "We offer Florida notary public VIN verification to certify your vehicle's legal identity.",
        "services.service3.title": "Registration & Plates",
        "services.service3.description": "We handle your vehicle's initial registration and plates, saving you time and DMV visits.",
        "services.service4.title": "Administrative Support Services",
        "services.service4.description": "Document organization and translation. Administrative accompaniment to the DMV or Tax Collector. Connection with external financing and insurance providers.",
        "services.service5.title": "DMV Appointment Scheduling",
        "services.service5.description": "Coordination of official appointments for license, registration, and plate paperwork. Confirmation of date, time, and specific requirements for each procedure.",
        "services.service6.title": "Vehicle Listing & Online Promotion",
        "services.service6.description": "We help you list your cars, motors, and auto parts. Digital promotion on partner platforms and social media.",
        
        // CTA
        "cta.title": "Get Started Today",
        "cta.description": "Get started with a free service evaluation. No obligations, just solutions.",
        "cta.call": "Call Now: (561) 303-9783",
        
        // Process
        "process.tagline": "HOW IT WORKS",
        "process.title": "Our Simple Process",
        "process.description": "We've streamlined the DMV process into four easy steps, saving you time and stress.",
        "process.step1.title": "Contact Us",
        "process.step1.description": "Reach out by phone, email, or our contact form to get started.",
        "process.step2.title": "Provide Documents",
        "process.step2.description": "Easily and securely submit the necessary documents.",
        "process.step3.title": "We Handle Paperwork",
        "process.step3.description": "Our expert team takes over the complex DMV process.",
        "process.step4.title": "Get Your Results",
        "process.step4.description": "Receive your completed titles and registrations quickly.",
        
        // Testimonials
        "testimonials.tagline": "TESTIMONIALS",
        "testimonials.title": "What Our Clients Say",
        "testimonials.testimonial1.text": "\"Saved me hours at the DMV! The title transfer was completed in half the time.\"",
        "testimonials.testimonial1.date": "2 days ago",
        "testimonials.testimonial2.text": "\"Professional and efficient. They handled everything from VIN verification to plates.\"",
        "testimonials.testimonial2.date": "1 week ago",
        "testimonials.testimonial3.text": "\"As a first-time car buyer in Florida, their guidance was invaluable.\"",
        "testimonials.testimonial3.date": "3 weeks ago",
        
        // Why Choose Us
        "why.tagline": "WHY CHOOSE US",
        "why.title": "Advantages of Our Service",
        "why.feature1.title": "Personalized Approach",
        "why.feature1.description": "We provide clear, personalized advice to avoid common mistakes that delay your paperwork.",
        "why.feature2.title": "Time Saving",
        "why.feature2.description": "Skip the long lines and confusion. We handle the paperwork and logistics, including scheduling.",
        "why.feature3.title": "All-in-One Service",
        "why.feature3.description": "From VIN verification to title transfers, we simplify the entire administrative process.",
        "why.feature4.title": "Total Transparency & Trust",
        "why.feature4.description": "We offer absolute transparency in costs and procedures, ensuring your transaction is 100% legal.",
        "why.feature5.title": "Administrative Support",
        "why.feature5.description": "We connect you with trusted insurance providers, making the entire process seamless.",
        "why.feature6.title": "Guaranteed Results",
        "why.feature6.description": "Our reputation is built on results. We have helped hundreds in South Florida. Your success is our commitment.",
        
        // Contact
        "contact.tagline": "CONTACT US",
        "contact.title": "Visit or Contact Us",
        "contact.address": "2393 South Congress Ave STE 200, West Palm Beach, FL 33406",
        "contact.phoneDescription": "Give us a call - we're happy to help!",
        "contact.emailDescription": "Send us an email for quick responses",
        "contact.hoursTitle": "Opening Hours",
        "contact.hoursWeekdays": "Monday - Friday: 9:00 AM - 5:00 PM",
        "contact.hoursSaturday": "Saturday: 10:00 AM - 2:00 PM (By appointment only)",
        "contact.mapDescription": "📍 Conveniently located in West Palm Beach with easy access and parking available.",
        
        // FAQ
        "faq.tagline": "FAQ",
        "faq.title": "Frequently Asked Questions",
        "faq.question1": "What services does Auto Palm Beach offer exactly?",
        "faq.answer1": "We are your administrative assistant specialized in vehicle paperwork. We handle the preparation and review of DMV forms, notary public VIN verification, registration and license plate assistance, and DMV appointment scheduling.",
        "faq.question2": "Are you a car dealership?",
        "faq.answer2": "No. It's important to clarify that Auto Palm Beach is NOT a licensed motor vehicle dealer. We operate as an administrative service office and an advertising platform. The vehicles belong to private sellers; We help you list your vehicles and provide added exposure through digital promotion on partner platforms.",
        "faq.question3": "I bought/sold a car privately. Can you help me with the paperwork?",
        "faq.answer3": "Absolutely! This is our primary service. We assist you with the title transfer, the correct preparation of documentation (such as form HSMV 82040), and the VIN verification if required, ensuring everything is in order to avoid future problems at the DMV.",
        "faq.question4": "Can you help me get temporary or permanent license plates?",
        "faq.answer4": "Yes. We provide all the necessary administrative support to apply for your temporary tags or manage permanent registration and plates, guiding you through the specific process and requirements.",
        "faq.question5": "What does \"VIN Verification by a Notary Public\" mean, and when do I need it?",
        "faq.answer5": "This service (form HSMV 82042) is mandatory for vehicles coming from another state or in cases where the Florida DMV requires a physical inspection of the VIN number. Our authorized Notary Public certifies the accuracy of the VIN, a crucial step for titling the car in Florida.",
        "faq.question6": "Do you offer document translation services?",
        "faq.answer6": "Yes, as part of our administrative support services, we can assist you in organizing and translating documents needed for your paperwork, making the process easier if language is a barrier.",
        "faq.question7": "How can I get in touch to use your services?",
        "faq.answer7": "You can call us at (561) 303-9783, visit us at our office at 2393 South Congress Ave STE 200, West Palm Beach, FL 33406, or complete the contact form on our website to schedule a consultation.",
        
        // Footer
        "footer.description": "Specialized administrative office for DMV Paperwork and VIN verification in West Palm Beach, South Florida.",
        "footer.quickLinks": "Quick Links",
        "footer.faq": "FAQ",
        "footer.contactInfo": "Contact Info",
        "footer.legalTitle": "Legal Disclosure",
        "footer.legalText": "Auto Palm Beach is not a licensed motor vehicle dealer. We operate as an Administrative Office. All vehicles are sold as private sales between owners.",
        "footer.copyright": "©2025 Auto Palm Beach. All rights reserved."
    },
    
    es: {
        // Navbar
        "nav.home": "Inicio",
        "nav.about": "Nosotros",
        "nav.services": "Servicios",
        "nav.process": "Cómo Funciona",
        "nav.testimonials": "Testimonios",
        "nav.contact": "Contacto",
        "nav.getStarted": "Comenzar",
        
        // Hero
        "hero.tagline": "DMV & Verificación VIN",
        "hero.title": "Servicios Expertos de DMV y Títulos",
        "hero.subtitle": "en West Palm Beach",
        "hero.description": "Evite las largas filas y la confusión de trámites. Somos su solución local de papeleo vehicular en el sur de Florida.",
        "hero.cta": "Obtener Cotización Gratis",
        "hero.learnMore": "Saber Más",
        
        // About
        "about.tagline": "SOBRE NOSOTROS",
        "about.title": "Su Socio de Confianza en Trámites Vehiculares",
        "about.description": "En Auto Palm Beach, hemos ayudado a cientos de personas en el sur de Florida a navegar el complejo sistema del DMV, haciendo que el papeleo sea simple, seguro y sin estrés. Somos su oficina administrativa especializada en West Palm Beach.",
        "about.feature1.title": "Transparencia",
        "about.feature1.description": "Garantizamos transacciones 100% legales y claras.",
        "about.feature2.title": "Experiencia",
        "about.feature2.description": "Tenemos conocimiento profundo de los procedimientos del DMV.",
        "about.feature3.title": "Gestión Efectiva",
        "about.feature3.description": "Le ayudamos a evitar largas filas y errores en el papeleo.",
        "about.feature4.title": "Enfoque en el Cliente",
        "about.feature4.description": "Su tranquilidad es el centro de nuestro servicio.",
        
        // Services
        "services.tagline": "NUESTROS SERVICIOS",
        "services.title": "Explore Nuestros Servicios",
        "services.cta": "Comenzar",
        "services.service1.title": "Transferencias de Título y Documentos DMV",
        "services.service1.description": "Simplificamos transferencias de título y documentación DMV para un proceso rápido y sin estrés.",
        "services.service2.title": "Verificación VIN por Notario Público",
        "services.service2.description": "Ofrecemos verificación VIN por notario público de Florida para certificar la identidad legal de su vehículo.",
        "services.service3.title": "Registro y Placas",
        "services.service3.description": "Manejamos el registro inicial de su vehículo y placas, ahorrándole tiempo y visitas al DMV.",
        "services.service4.title": "Servicios de Apoyo Administrativo",
        "services.service4.description": "Organización y traducción de documentos. Acompañamiento administrativo al DMV o Tax Collector. Conexión con proveedores externos de financiamiento y seguros.",
        "services.service5.title": "Programación de Citas DMV",
        "services.service5.description": "Coordinación de citas oficiales para trámites de licencia, registro y placas. Confirmación de fecha, hora y requisitos específicos para cada procedimiento.",
        "services.service6.title": "Listado de Vehículos y Promoción en Línea",
        "services.service6.description": "Le ayudamos a listar sus autos, motores y partes automotrices. Promoción digital en plataformas asociadas y redes sociales.",
        
        // CTA
        "cta.title": "Comience Hoy",
        "cta.description": "Comience con una evaluación gratuita del servicio. Sin obligaciones, solo soluciones.",
        "cta.call": "Llame Ahora: (561) 303-9783",
        
        // Process
        "process.tagline": "CÓMO FUNCIONA",
        "process.title": "Nuestro Proceso Simple",
        "process.description": "Hemos simplificado el proceso del DMV en cuatro pasos fáciles, ahorrándole tiempo y estrés.",
        "process.step1.title": "Contáctenos",
        "process.step1.description": "Comuníquese por teléfono, correo electrónico o nuestro formulario de contacto para comenzar.",
        "process.step2.title": "Proporcione Documentos",
        "process.step2.description": "Envíe fácil y seguramente los documentos necesarios.",
        "process.step3.title": "Nosotros Manejamos el Papeleo",
        "process.step3.description": "Nuestro equipo experto se encarga del complejo proceso del DMV.",
        "process.step4.title": "Obtenga Sus Resultados",
        "process.step4.description": "Reciba sus títulos y registros completados rápidamente.",
        
        // Testimonials
        "testimonials.tagline": "TESTIMONIOS",
        "testimonials.title": "Lo que Dicen Nuestros Clientes",
        "testimonials.testimonial1.text": "\"¡Me ahorró horas en el DMV! La transferencia de título se completó en la mitad del tiempo.\"",
        "testimonials.testimonial1.date": "Hace 2 días",
        "testimonials.testimonial2.text": "\"Profesionales y eficientes. Manejaron todo desde la verificación VIN hasta las placas.\"",
        "testimonials.testimonial2.date": "Hace 1 semana",
        "testimonials.testimonial3.text": "\"Como comprador de auto por primera vez en Florida, su orientación fue invaluable.\"",
        "testimonials.testimonial3.date": "Hace 3 semanas",
        
        // Why Choose Us
        "why.tagline": "POR QUÉ ELEGIRNOS",
        "why.title": "Ventajas de Nuestro Servicio",
        "why.feature1.title": "Enfoque Personalizado",
        "why.feature1.description": "Proporcionamos asesoría clara y personalizada para evitar errores comunes que retrasan su papeleo.",
        "why.feature2.title": "Ahorro de Tiempo",
        "why.feature2.description": "Evite las largas filas y confusión. Nos encargamos del papeleo y logística, incluyendo programación.",
        "why.feature3.title": "Servicio Todo en Uno",
        "why.feature3.description": "Desde verificación VIN hasta transferencias de título, simplificamos todo el proceso administrativo.",
        "why.feature4.title": "Transparencia Total y Confianza",
        "why.feature4.description": "Ofrecemos transparencia absoluta en costos y procedimientos, asegurando que su transacción sea 100% legal.",
        "why.feature5.title": "Apoyo Administrativo",
        "why.feature5.description": "Lo conectamos con proveedores de seguros confiables, haciendo todo el proceso fluido.",
        "why.feature6.title": "Resultados Garantizados",
        "why.feature6.description": "Nuestra reputación se basa en resultados. Hemos ayudado a cientos en el sur de Florida. Su éxito es nuestro compromiso.",
        
        // Contact
        "contact.tagline": "CONTÁCTENOS",
        "contact.title": "Visítenos o Contáctenos",
        "contact.address": "2393 South Congress Ave STE 200, West Palm Beach, FL 33406",
        "contact.phoneDescription": "¡Llámenos - estamos felices de ayudar!",
        "contact.emailDescription": "Envíenos un correo para respuestas rápidas",
        "contact.hoursTitle": "Horario de Atención",
        "contact.hoursWeekdays": "Lunes - Viernes: 9:00 AM - 5:00 PM",
        "contact.hoursSaturday": "Sábado: 10:00 AM - 2:00 PM (Solo con cita previa)",
        "contact.mapDescription": "📍 Ubicados convenientemente en West Palm Beach con fácil acceso y estacionamiento disponible.",
        
        // FAQ
        "faq.tagline": "PREGUNTAS FRECUENTES",
        "faq.title": "Preguntas Frecuentes",
        "faq.question1": "¿Qué servicios ofrece exactamente Auto Palm Beach?",
        "faq.answer1": "Somos su asistente administrativo especializado en papeleo vehicular. Manejamos la preparación y revisión de formularios DMV, verificación VIN por notario público, asistencia de registro y placas, y programación de citas DMV.",
        "faq.question2": "¿Son una agencia de autos?",
        "faq.answer2": "No. Es importante aclarar que Auto Palm Beach NO es un concesionario de vehículos motorizados autorizado. Operamos como una oficina de servicios administrativos y una plataforma publicitaria. Los vehículos pertenecen a vendedores privados; le ayudamos a listar sus vehículos y proporcionamos exposición adicional a través de promoción digital en plataformas asociadas.",
        "faq.question3": "Compré/vendí un auto de forma privada. ¿Pueden ayudarme con el papeleo?",
        "faq.answer3": "¡Absolutamente! Este es nuestro servicio principal. Le asistimos con la transferencia de título, la preparación correcta de la documentación (como el formulario HSMV 82040), y la verificación VIN si es requerida, asegurando que todo esté en orden para evitar problemas futuros en el DMV.",
        "faq.question4": "¿Pueden ayudarme a obtener placas temporales o permanentes?",
        "faq.answer4": "Sí. Proporcionamos todo el apoyo administrativo necesario para solicitar sus placas temporales o manejar el registro permanente y placas, guiándolo a través del proceso y requisitos específicos.",
        "faq.question5": "¿Qué significa \"Verificación VIN por un Notario Público\" y cuándo la necesito?",
        "faq.answer5": "Este servicio (formulario HSMV 82042) es obligatorio para vehículos provenientes de otro estado o en casos donde el DMV de Florida requiera una inspección física del número VIN. Nuestro Notario Público autorizado certifica la precisión del VIN, un paso crucial para titular el auto en Florida.",
        "faq.question6": "¿Ofrecen servicios de traducción de documentos?",
        "faq.answer6": "Sí, como parte de nuestros servicios de apoyo administrativo, podemos asistirle en organizar y traducir documentos necesarios para su papeleo, facilitando el proceso si el idioma es una barrera.",
        "faq.question7": "¿Cómo puedo contactarlos para usar sus servicios?",
        "faq.answer7": "Puede llamarnos al (561) 303-9783, visitarnos en nuestra oficina en 2393 South Congress Ave STE 200, West Palm Beach, FL 33406, o completar el formulario de contacto en nuestro sitio web para programar una consulta.",
        
        // Footer
        "footer.description": "Oficina administrativa especializada en trámites DMV y verificación VIN en West Palm Beach, sur de Florida.",
        "footer.quickLinks": "Enlaces Rápidos",
        "footer.faq": "Preguntas Frecuentes",
        "footer.contactInfo": "Información de Contacto",
        "footer.legalTitle": "Aviso Legal",
        "footer.legalText": "Auto Palm Beach no es un concesionario de vehículos motorizados autorizado. Operamos como una Oficina Administrativa. Todos los vehículos se venden como ventas privadas entre propietarios.",
        "footer.copyright": "©2025 Auto Palm Beach. Todos los derechos reservados."
    }
};

// Sistema de internacionalización
let currentLang = 'en';

function updateLanguage(lang) {
    currentLang = lang;
    
    // Actualizar el atributo lang del html
    document.documentElement.lang = lang;
    
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Actualizar el selector de idioma
    updateLanguageSelector(lang);
    
    // Guardar preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
}

function updateLanguageSelector(lang) {
    // Actualizar botón de idioma en escritorio
    const languageButton = document.getElementById('languageButton');
    const currentFlag = document.getElementById('currentFlag');
    const currentLanguageText = document.getElementById('currentLanguage');
    
    if (lang === 'en') {
        currentLanguageText.textContent = 'EN';
        currentFlag.innerHTML = `
            <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                <path fill="#bd3d44" d="M0 0h640v480H0"/>
                <path stroke="#fff" stroke-width="37" d="M0 55.3h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"/>
                <path fill="#192f5d" d="M0 0h364.8v258.5H0"/>
                <marker id="us-a" markerHeight="30" markerWidth="30">
                    <path fill="#fff" d="m14 0 9 27L0 10h28L5 27z"/>
                </marker>
                <path fill="none" marker-mid="url(#us-a)" d="m0 0 16 11h61 61 61 61 60L47 37h61 61 60 61L16 63h61 61 61 61 60L47 89h61 61 60 61L16 115h61 61 61 61 60L47 141h61 61 60 61L16 166h61 61 61 61 60L47 192h61 61 60 61L16 218h61 61 61 61 60z"/>
            </svg>
        `;
    } else {
        currentLanguageText.textContent = 'ES';
        currentFlag.innerHTML = `
            <svg viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                <path fill="#fcd116" d="M0 0h640v480H0z"/>
                <path fill="#0038a8" d="M0 0h640v320H0z"/>
                <path fill="#ce1126" d="M0 0h640v160H0z"/>
            </svg>
        `;
    }
    
    // Actualizar opciones activas en el dropdown
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // Actualizar opciones en móvil
    const mobileLangEn = document.getElementById('mobileLangEn');
    const mobileLangEs = document.getElementById('mobileLangEs');
    
    if (lang === 'en') {
        mobileLangEn.classList.add('active');
        mobileLangEs.classList.remove('active');
    } else {
        mobileLangEn.classList.remove('active');
        mobileLangEs.classList.add('active');
    }
}

// Función para cerrar el menú móvil
function closeMenu() {
    const offCanvasMenu = document.getElementById('offCanvasMenu');
    const offCanvasOverlay = document.getElementById('offCanvasOverlay');
    const body = document.body;
    
    offCanvasMenu.classList.remove('active');
    offCanvasOverlay.classList.remove('active');
    body.classList.remove('menu-open');
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Cargar idioma preferido o detectar idioma del navegador
    const savedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
    const initialLang = savedLang || browserLang;
    
    // Aplicar idioma inicial
    updateLanguage(initialLang);
    
    // Off-canvas menu functionality
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const closeMenuButton = document.getElementById('closeMenuButton');
    const offCanvasMenu = document.getElementById('offCanvasMenu');
    const offCanvasOverlay = document.getElementById('offCanvasOverlay');
    const body = document.body;

    // Open menu
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            offCanvasMenu.classList.add('active');
            offCanvasOverlay.classList.add('active');
            body.classList.add('menu-open');
        });
    }

    // Close menu with close button
    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMenu);
    }

    // Close menu with overlay click
    if (offCanvasOverlay) {
        offCanvasOverlay.addEventListener('click', closeMenu);
    }

    // Close menu with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && offCanvasMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Si es el enlace de Home "/", no hacer nada especial
            if (this.getAttribute('href') === '/' || this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            // Verificar si es un enlace interno (#about, #services, etc.)
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close menu if open
                    closeMenu();
                    
                    // Scroll suave con offset para el navbar fijo
                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = targetPosition - headerHeight - 20;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Actualizar URL sin recargar la página
                    history.pushState(null, null, targetId);
                }
            }
        });
    });

    // Sticky header
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('sticky-header', 'shadow-md');
                header.style.padding = '0.75rem 0';
                header.style.backgroundColor = 'white';
            } else {
                header.classList.remove('sticky-header', 'shadow-md');
                header.style.padding = '';
                header.style.backgroundColor = '';
            }
        });
    }

    // FAQ functionality with smooth animations
    const faqButtons = document.querySelectorAll('.faq-button');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.material-symbols-outlined');
            
            // Toggle current answer
            if (answer.classList.contains('open')) {
                answer.classList.remove('open');
                icon.textContent = 'add_circle';
            } else {
                // Close all other answers
                document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                    if (otherAnswer !== answer && otherAnswer.classList.contains('open')) {
                        otherAnswer.classList.remove('open');
                        const otherIcon = otherAnswer.previousElementSibling.querySelector('.material-symbols-outlined');
                        if (otherIcon) {
                            otherIcon.textContent = 'add_circle';
                        }
                    }
                });
                
                // Open current answer
                answer.classList.add('open');
                icon.textContent = 'remove_circle';
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections with animations
    document.querySelectorAll('.section-hidden').forEach((section) => {
        observer.observe(section);
    });

    // Random floating animation delays
    document.querySelectorAll('.floating').forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.2}s`;
    });

    // Language selector functionality
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option:not(#mobileLangEn):not(#mobileLangEs)');
    const mobileLangEn = document.getElementById('mobileLangEn');
    const mobileLangEs = document.getElementById('mobileLangEs');

    // Toggle dropdown
    if (languageButton) {
        languageButton.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function() {
        if (languageDropdown) {
            languageDropdown.classList.remove('active');
        }
    });

    // Language option selection (desktop)
    languageOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            updateLanguage(lang);
            if (languageDropdown) {
                languageDropdown.classList.remove('active');
            }
        });
    });

    // Language option selection (mobile)
    if (mobileLangEn) {
        mobileLangEn.addEventListener('click', function() {
            updateLanguage('en');
        });
    }

    if (mobileLangEs) {
        mobileLangEs.addEventListener('click', function() {
            updateLanguage('es');
        });
    }
    
    // Cerrar menú móvil al hacer clic en enlaces del menú móvil
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});