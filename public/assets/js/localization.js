
const rerender = () => {
    $('body').localize();
    activeLanguage();
}

const activeLanguage = () => {
    // if (localStorage.getItem('i18nextLng') === 'id') {
    //     let langMenu = `
    //     <li><a id="indonesia" style="color: black !important; background-color: #ff685f !important;" href="javascript:void(0)" onclick="changeLanguage('id')">Indonesia</a></li>

    //     <li><a id="english"" href="javascript:void(0)" onclick="changeLanguage('en')">Inggris</a></li>`
    //     $('#langMenu').html(langMenu)
    //     console.log('english is active');
    // } else if (localStorage.getItem('i18nextLng') === 'en') {
    //     let langMenu = `
    //     <li><a id="indonesia" href="javascript:void(0)" onclick="changeLanguage('id')">Indonesia</a></li>

    //     <li><a id="english" style="color: black !important; background-color: #ff685f !important;" href="javascript:void(0)" onclick="changeLanguage('en')">English</a></li>`
    //     $('#langMenu').html(langMenu)
    //     console.log('indonesia is active');
    // }

    //     <select class="form-select" aria-label="Default select example">
    //   <option selected>Open this select menu</option>
    //   <option value="1">One</option>
    //   <option value="2">Two</option>
    //   <option value="3">Three</option>
    // </select>
    let langMenu = `
    <select class="btn" aria-label="Default select example" onchange="changeLanguage(this.value)">
        <option ${localStorage.getItem('i18nextLng') === 'id' ? 'selected' : ''} value="id">Indonesia</option>
        <option ${localStorage.getItem('i18nextLng') === 'en' ? 'selected' : ''} value="en">English</option>
    </select>`
    $('#langMenu').html(langMenu)
}

i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
        fallbackLng: 'en',
        ns: ['translation'],
        defaultNS: 'translation',

        resources: {
            id: {
                translation: {
                    banner1: {
                        title: 'Selamat Datang di Anlimitid',
                        subtitle1: 'Rancang <em>PCB</em> atau Bangun <em>Situs Web</em> terbaik <span>Anda</span>.',
                        subtitle2: 'Kami adalah solusi Anda untuk desain PCB yang berkualitas dan terjangkau atau membangun situs web Anda.',
                        orderNow: 'Pesan Sekarang',
                    },

                    banner2: {
                        title: 'Layanan Kami',
                        subtitle1: 'Dapatkan Layanan <em>Terbaik</em> <span>Kami</span>',
                        subtitle2: 'Kami selalu memberikan pelayanan terbaik kepada semua pelanggan kami.',
                        ourServices: 'Layanan Kami',
                    },

                    banner3: {
                        title: 'Testimoni',
                        subtitle1: 'Kepercayaan <em>Pelanggan</em> kepada <span>Kami</span>',
                        subtitle2: 'Kami telah melayani lebih dari 100 pelanggan dan mereka sangat puas dengan layanan kami.',
                        readMore: 'Lihat Testimoni',
                    },

                    nav: {
                        home: "Beranda",
                        services: "Layanan",
                        about: "Tentang",
                        portfolio: "Portofolio",
                        videos: "Video",
                        contact: "Kontak",
                        contactNow: "Hubungi Kami Sekarang"
                    }
                }
            },
            en: {
                translation: {
                    banner1: {
                        title: 'Welcome to Anlimitid',
                        subtitle1: "Design <span>your</span> best <em>PCB</em> or build a <em>Website</em>.",
                        subtitle2: "We are your solution for quality and affordable PCB design or building your website.",
                        orderNow: "Order Now"
                    },

                    banner2: {
                        title: 'Our Services',
                        subtitle1: 'Get the <em>Best</em> Services from <span>Us</span>.',
                        subtitle2: 'We always provide the best service to all our customers.',
                        ourServices: 'Our Services'
                    },

                    banner3: {
                        title: 'Testimonials',
                        subtitle1: 'Customer <em>Trust</em> to <span>Us</span>.',
                        subtitle2: 'We have served more than 100 customers and they are very satisfied with our service.',
                        readMore: 'View Testimonials'
                    },

                    nav: {
                        home: "Home",
                        services: "Services",
                        about: "About",
                        portfolio: "Portfolio",
                        videos: "Videos",
                        contact: "Contact",
                        contactNow: "Contact Us Now",

                    }
                }
            },
        },
    }, function (err, t) {
        i18nextJquery.init(i18next, $);

        rerender();
        changeLanguage = (lang) => {
            i18next.changeLanguage(lang);
            console.log('i18next is ready...', lang);
            console.log('i18next is ready2...', i18next);
            rerender();
        }
    });

