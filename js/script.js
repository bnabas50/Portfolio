document.addEventListener('DOMContentLoaded', () => {

    // --- Translations Configuration ---
    const translations = {
        en: {
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_services: "Services",
            nav_contact: "Contact Me",
            hero_greeting: "Hello, I'm",
            hero_name: "Ahmed Abbas",
            hero_title_prefix: "Professional",
            hero_title_accent: "Video Editor",
            hero_desc: "Crafting cinematic narratives that captivate audiences. I specialize in transforming raw footage into high-impact visual stories for YouTube, social media, and digital brands.",
            hero_btn_projects: "View Projects",
            hero_btn_contact: "Contact Me",
            about_title_1: "About",
            about_title_2: "Me",
            about_text_1: "With over <strong>+5 years of professional experience</strong> in the video editing industry, I have mastered the art of storytelling through precision cutting, color grading, and immersive sound design.",
            about_text_2: "My expertise spans diverse sectors including medical, marketing, real estate, and documentary filmmaking. I understand that great editing isn't just about technical skills—it's about emotion, pacing, and retention.",
            about_objective_title: "Career Objective",
            about_objective_text: "To forge strategic partnerships with top-tier creators and global brands, delivering cinematic video editing that defines industry standards.",
            skills_title_1: "My",
            skills_title_2: "Skills",
            skills_cat_editing: "Video Editing",
            skill_long_form: "Long Form YouTube",
            skill_shorts: "Shorts / Reels",
            skill_cinematic: "Cinematic Videos",
            skill_docu: "Documentary Style",
            skills_cat_visual: "Visual & Audio",
            skill_grading: "Color Grading",
            skill_sound: "Sound Design",
            skill_vfx: "VFX & Transitions",
            skill_audio_cleanup: "Audio Cleanup & Mixing",
            skills_cat_tools: "Tools & Tech",
            skill_ai: "AI Enhancement",
            projects_title_1: "My",
            projects_title_2: "YouTube Channels",
            channel_coding_cat: "PROGRAMMING & AI CONTENT",
            channel_coding_desc: "A YouTube channel focused on producing high-quality programming and AI content, where I simplify complex technical topics into engaging, easy-to-follow videos with strong storytelling.",
            channel_turning_cat: "DOCUMENTARY & STORYTELLING",
            channel_turning_desc: "A documentary-style YouTube channel by Ahmed Abas that explores powerful real-life turning points and meaningful stories, presented through cinematic editing.",
            projects_visit_btn: "Visit Channel",
            videos_title_1: "Featured",
            videos_title_2: "Video Work",
            video_title_1: "YouTube Videos – Real Estate Company",
            video_desc_1: "Visually distinctive YouTube content that highlights a real estate brand and strengthens its digital presence.",
            video_title_2: "Cinematic Furniture Video",
            video_desc_2: "A classic cinematic showcase focusing on details, elegance, and interior design aesthetics.",
            video_title_3: "Kids Educational App Advertisement",
            video_desc_3: "An engaging promotional video for a children’s educational mobile app with playful visuals.",
            video_title_4: "Saudi Wedding Film",
            video_desc_4: "A professional wedding film capturing memorable moments with a modern cinematic touch.",
            video_title_5: "Cinematic Medical Center Promo",
            video_desc_5: "A promotional video highlighting professionalism, trust, and high-quality medical services.",
            video_title_6: "Tech Website Promotional Reels",
            video_desc_6: "Fast-paced short videos showcasing technical services with a modern dynamic style.",
            video_title_7: "3D Advertisement for Shopify Services",
            video_desc_7: "A 3D video explaining Shopify services through an engaging and professional visual approach.",
            video_title_8: "Camera Gear Platform Reel",
            video_desc_8: "A promotional reel for a Gulf-based platform specializing in professional camera and filming equipment.",
            video_title_9: "Syrian Marketing Platform Reel",
            video_desc_9: "A promotional reel for a Syrian marketing platform, delivering brand-focused content in a clean and fast-paced style.",
            video_title_ju: "JU Group Saudi Automotive Promotional Video",
            video_desc_ju: "A professional promotional video showcasing JU Group’s presence in the Saudi automotive market, using modern visuals, dynamic editing, and a cinematic approach that reflects quality and trust.",
            // Add other videos if needed, but for now we rely on placeholders or basic numbers
            services_title_1: "My",
            services_title_2: "Services",
            service_1_title: "YouTube Production",
            service_1_desc: "End-to-end editing for long-form content, optimized for retention, watch time, and algorithm performance.",
            service_2_title: "Shorts & Reels",
            service_2_desc: "Punchy, fast-paced editing for Instagram Reels and TikTok designed to grab attention instantly.",
            service_3_title: "Cinematic Editing",
            service_3_desc: "Advanced color grading, sound design, and narrative pacing for documentaries, trailers, and commercials.",
            service_4_title: "Motion Graphics",
            service_4_desc: "Custom motion graphics, titles, and visual effects to elevate your brand identity and production value.",
            contact_title_1: "Let's",
            contact_title_2: "Collaborate",
            contact_text: "Ready to elevate your content? Whether it's a single video or a long-term partnership, I'm here to bring your vision to life.",
            contact_location: "Remote / Cairo",
            form_name_label: "Name",
            form_email_label: "Email",
            form_message_label: "Message",
            form_btn_submit: "Send Message",
            form_name_placeholder: "Your Name",
            form_email_placeholder: "Your Email",
            form_message_placeholder: "Tell me about your project...",
            form_msg_placeholder: "Tell me about your project...",
            footer_rights: "All Rights Reserved.",
            footer_top: "Back to Top"
        },
        ar: {
            nav_about: "من أنا",
            nav_skills: "مهاراتي",
            nav_projects: "قنواتي",
            nav_services: "خدماتي",
            nav_contact: "تواصل معي",
            hero_greeting: "أهلاً، أنا",
            hero_name: "أحمد عباس",
            hero_title_prefix: "مونتير",
            hero_title_accent: "فيديو محترف",
            hero_desc: "بصنع محتوى قصصي سينمائي بيشد الجمهور. تخصصي إني أحول المادة الخام لقصص بصرية قوية ومؤثرة لليوتيوب، والسوشيال ميديا، والبراندات.",
            hero_btn_projects: "شوف أعمالي",
            hero_btn_contact: "تواصل معي",
            about_title_1: "نبذة",
            about_title_2: "عني",
            about_text_1: "بخبرة أكتر من <strong>٥ سنين في مجال المونتاج</strong>، أنا اتقنت فن السرد القصصي من خلال التقطيع الدقيق، وتصحيح الألوان، وتصميم الصوت الاحترافي.",
            about_text_2: "خبرتي بتغطي مجالات كتير زي الطبي، والتسويق، والعقارات، والأفلام الوثائقية. أنا فاهم إن المونتاج مش بس مهارة تقنية—ده إحساس، وإيقاع، واهتمام بالتفاصيل عشان المشاهد يكمل للآخر.",
            about_objective_title: "هدفي المهني",
            about_objective_text: "بناء شراكات استراتيجية مع صناع المحتوى والبراندات العالمية، وتقديم مستوى مونتاج سينمائي بيحدد معايير السوق.",
            skills_title_1: "أهم",
            skills_title_2: "مهاراتي",
            skills_cat_editing: "المونتاج والتحرير",
            skill_long_form: "فيديوهات اليوتيوب الطويلة",
            skill_shorts: "Shorts / Reels",
            skill_cinematic: "فيديوهات سينمائية",
            skill_docu: "ستايل وثائقي (Documentary)",
            skills_cat_visual: "الصورة والصوت",
            skill_grading: "تصحيح ألوان (Color Grading)",
            skill_sound: "هندسة صوتية (Sound Design)",
            skill_vfx: "خدع بصرية و Transitions",
            skill_audio_cleanup: "تنسيق وتنقية الصوت",
            skills_cat_tools: "الأدوات والتقنيات",
            skill_ai: "تحسين بالذكاء الاصطناعي (AI)",
            projects_title_1: "قنوات",
            projects_title_2: "اليوتيوب",
            channel_coding_cat: "برمجة وذكاء اصطناعي",
            channel_coding_desc: "قناة بتقدم محتوى تقني عالي الجودة في البرمجة والـ AI. بشرح المواضيع المعقدة بأسلوب بسيط وسرد قصصي ممتع بيضمن إن المشاهد يكمل الفيديو للآخر.",
            channel_turning_cat: "وثائقيات وقصص",
            channel_turning_desc: "قناة وثائقية بتقدم قصص حقيقية ولحظات تحول في حياة الناس، بأسلوب سينمائي ومؤثرات صوتية بتدخلك جو القصة.",
            projects_visit_btn: "زور القناة",
            videos_title_1: "أعمال",
            videos_title_2: "مختارة",
            video_title_1: "فيديوهات يوتيوب – شركة عقارات",
            video_desc_1: "محتوى يوتيوب بأسلوب بصري مميز يبرز هوية شركة عقارية ويعزز حضورها الرقمي.",
            video_title_2: "فيديو سينمائي للأثاث",
            video_desc_2: "عرض سينمائي كلاسيكي يركّز على التفاصيل، الفخامة، وجمال التصميم الداخلي.",
            video_title_3: "إعلان تطبيق تعليمي للأطفال",
            video_desc_3: "فيديو ترويجي جذاب لتطبيق موبايل تعليمي بأسلوب مرح وبصري مناسب للأطفال.",
            video_title_4: "توثيق فرح سعودي",
            video_desc_4: "فيديو احترافي يوثّق أجمل لحظات الزفاف بأسلوب عصري ولمسة سينمائية.",
            video_title_5: "برومو سينمائي لمجمع طبي",
            video_desc_5: "فيديو ترويجي يعكس الاحترافية، الثقة، وجودة الخدمات الطبية.",
            video_title_6: "ريلز ترويجية لموقع تقني",
            video_desc_6: "فيديوهات قصيرة وسريعة تبرز الخدمات التقنية بأسلوب حديث وديناميكي.",
            video_title_7: "إعلان ثلاثي الأبعاد لخدمات شوبيفاي",
            video_desc_7: "فيديو 3D يشرح خدمات شوبيفاي بشكل بصري جذاب واحترافي.",
            video_title_8: "ريلز لـ منصة بروز",
            video_desc_8: "ريل ترويجي لمنصة خليجية متخصصة في توفير معدات التصوير بأسلوب بصري احترافي وسريع.",
            video_title_9: "ريل منصة سوق موثوق",
            video_desc_9: "ريل ترويجي لمنصة تسويق سورية يقدّم المحتوى بأسلوب بسيط وسريع يخدم الهوية التجارية.",
            video_title_ju: "فيديو إعلاني لمجموعة JU السعودية للسيارات",
            video_desc_ju: "فيديو إعلاني احترافي يبرز قوة وهوية مجموعة JU السعودية في مجال السيارات، من خلال أسلوب بصري عصري، مونتاج ديناميكي، ولمسة سينمائية تعكس الجودة والثقة.",
            services_title_1: "أهم",
            services_title_2: "خدماتي",
            service_1_title: "مونتاج يوتيوب",
            service_1_desc: "مونتاج كامل للفيديوهات الطويلة، بنركز فيه على زيادة مدة المشاهدة (Retention) وأداء الفيديو مع الخوارزميات.",
            service_2_title: "ريلز وشورتس",
            service_2_desc: "مونتاج سريع وقوي لإنستجرام وتيك توك، مصمم عشان يخطف انتباه المشاهد في أول ٣ ثواني.",
            service_3_title: "مونتاج سينمائي",
            service_3_desc: "تصحيح ألوان، وهندسة صوتية، وإيقاع سردي للأفلام الوثائقية والإعلانات.",
            service_4_title: "موشن جرافيك",
            service_4_desc: "تحريك نصوص وعناصر بصرية عشان ترفع من قيمة الفيديو وتبرز هويتك.",
            contact_title_1: "خلينا",
            contact_title_2: "نشتغل سوا",
            contact_text: "جاهز تنقل محتواك لمستوى تاني؟ سواء فيديو واحد أو شراكة طويلة، أنا هنا عشان أحول رؤيتك لواقع بدقة سينمائية.",
            contact_location: "عن بعد / القاهرة",
            form_name_label: "الاسم",
            form_email_label: "الإيميل",
            form_message_label: "الرسالة",
            form_btn_submit: "إرسال الرسالة",
            form_name_placeholder: "اسمك",
            form_email_placeholder: "بريدك الإلكتروني",
            form_message_placeholder: "تفاصيل مشروعك...",
            form_msg_placeholder: "تفاصيل مشروعك...",
            footer_rights: "جميع الحقوق محفوظة.",
            footer_top: "للأعلى"
        }
    };

    // --- Language Logic ---
    const langToggleBtn = document.getElementById('lang-toggle');

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Update toggle button to show the OTHER language (Target) or Current? 
        // User asked: "toggle should switch between AR/EN". I'll show the one you switch TO.
        // If current is AR, show EN. If current is EN, show AR.
        langToggleBtn.textContent = lang === 'ar' ? 'EN' : 'AR'; // Simple abbreviation

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // If the element has specific HTML constraints (like bubbles/spans inside), we might replace innerHTML.
                // But for safety and specific span targeting, I used granular keys for spans (e.g. hero_title_prefix).
                // So innerHTML is safe and correct.
                el.innerHTML = translations[lang][key];
            }
        });

        // Update Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Save Preference
        localStorage.setItem('lang', lang);
    }

    // Initialize Language (Default to 'ar')
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);

    // Toggle Listener
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const currentLang = document.documentElement.lang;
            const newLang = currentLang === 'ar' ? 'en' : 'ar';
            setLanguage(newLang);
        });
    }


    // --- Dark Mode Toggle ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const icon = themeToggleBtn.querySelector('i');

    function updateIcon(theme) {
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Check for saved preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon between bars and times
        const btnIcon = mobileBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            btnIcon.classList.remove('fa-bars');
            btnIcon.classList.add('fa-times');
        } else {
            btnIcon.classList.remove('fa-times');
            btnIcon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking a link
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.querySelector('i').classList.remove('fa-times');
            mobileBtn.querySelector('i').classList.add('fa-bars');
        });
    });

    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // --- Smooth Scrolling for Anchors (Fallback/Enhancement) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- About Section Slideshow ---
    const slides = document.querySelectorAll('.about-slideshow .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 3500; // 3.5 seconds per GIF

        setInterval(() => {
            // Remove active class from current
            slides[currentSlide].classList.remove('active');

            // Move to next
            currentSlide = (currentSlide + 1) % slides.length;

            // Add active to next
            slides[currentSlide].classList.add('active');
        }, slideInterval);
    }

    // --- Video Modal Logic (Floating Window) ---
    const videoModal = document.getElementById('video-modal');
    const modalVideoPlayer = document.getElementById('modal-video-player');
    const closeModalBtn = document.querySelector('.close-modal');
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    const modalContent = document.querySelector('.modal-content');

    if (videoModal && modalVideoPlayer) {
        // Helper to extract YouTube ID
        function getYouTubeId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
            if (match && match[2].length === 11) {
                return match[2];
            }
            // Handle Shorts explicitly if regex didn't catch it
            const shortsMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
            if (shortsMatch && shortsMatch[1]) {
                return shortsMatch[1];
            }
            return null;
        }

        // Open Modal
        videoThumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const videoSrc = thumbnail.getAttribute('data-video-src');
                if (videoSrc) {
                    const youtubeId = getYouTubeId(videoSrc);
                    const videoWrapper = document.querySelector('.video-wrapper');

                    // Clean up previous iframe if exists
                    const existingIframe = videoWrapper.querySelector('iframe');
                    if (existingIframe) {
                        existingIframe.remove();
                    }

                    if (youtubeId) {
                        // Switch to Iframe for YouTube
                        modalVideoPlayer.style.display = 'none';
                        modalVideoPlayer.src = "";

                        const iframe = document.createElement('iframe');

                        iframe.setAttribute('src', `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&playsinline=1&modestbranding=1`);
                        iframe.setAttribute('frameborder', '0');
                        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                        iframe.setAttribute('allowfullscreen', '');
                        videoWrapper.appendChild(iframe);
                    } else {
                        // Local Video Fallback
                        modalVideoPlayer.style.display = 'block';
                        modalVideoPlayer.src = videoSrc;
                        modalVideoPlayer.play();
                    }

                    // Show modal
                    videoModal.style.display = 'flex';
                    // Force reflow for animation
                    void videoModal.offsetWidth;
                    videoModal.classList.add('show');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close Function
        function closeVideoModal() {
            videoModal.classList.remove('show');
            document.body.style.overflow = ''; // Restore scroll

            setTimeout(() => {
                videoModal.style.display = 'none';
                modalVideoPlayer.pause();
                modalVideoPlayer.currentTime = 0;
                modalVideoPlayer.src = "";
                modalVideoPlayer.style.display = 'block'; // Reset visibility

                // Remove iframe
                const videoWrapper = document.querySelector('.video-wrapper');
                const iframe = videoWrapper.querySelector('iframe');
                if (iframe) {
                    iframe.remove();
                }
            }, 400); // Match transition duration
        }

        // Close Listeners
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeVideoModal);
        }

        // Click outside (background)
        videoModal.addEventListener('click', (e) => {
            // Check if click is outside the modal content
            if (!modalContent.contains(e.target)) {
                closeVideoModal();
            }
        });

        // ESC Key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('show')) {
                closeVideoModal();
            }
        });
    }
});
