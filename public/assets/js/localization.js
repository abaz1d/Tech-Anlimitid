
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
        <option ${localStorage.getItem('i18nextLng') === 'id' ? 'selected' : ''} value="id">🇮🇩 Indonesia</option>
        <option ${localStorage.getItem('i18nextLng') === 'en' ? 'selected' : ''} value="en">🇬🇧 English</option>
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
          },

          services: {
            title: "Kami <em>Memberikan</em> Layanan Terbaik Dengan <span>Alat Kami</span>",
            subtitle: "Pelayanan Kami",
            pcb1: "Merancang PCB Dengan <span>Eagle</span>",
            subpcb1: "Merancang PCB menggunakan Autodesk Eagle, file yang akan diterima pelanggan: <i>.sch, .brd, .gerber dan .pdf.</i>",
            pcb2: "Merancang PCB Dengan <span>Proteus</span>",
            subpcb2: "Merancang PCB menggunakan Labcenter Proteus, file yang akan diterima pelanggan: <i>.sch, .brd, dan .pdf.</i>",
            pcb3: "Mencetak Layout Desain PCB",
            subpcb3: "Mencetak PCB berdasarkan skema sesuai dengan permintaan pelanggan.",
            pcb4: "Menyolder Komponen PCB",
            subpcb4: "Menyolder Komponen PCB berdasarkan skema pcb sesuai permintaan pelanggan.",

            app1: "Membuat Aplikasi Situs Web",
            subapp1: "Menggunakan Javascript, Node JS, HTML5, CSS, ReactJS, VueJS, PostgreSQL,dan MongoDB.",
            app2: "Membuat Aplikasi Desktop",
            subapp2: "Menggunakan Electron JS, Javascript, Node JS, HTML5, CSS, PostgreSQL,dan MongoDB.",
            app3: "Membuat Aplikasi Seluler",
            subapp3: "Menggunakan React Native, Javascript, Node JS, PostgreSQL,dan MongoDB.",
            app4: "Membuat Desain Mockup",
            subapp4: "Membuat Mockup Aplikasi untuk Desktop atau Mobile Menggunakan Figma.",
          },

          about: {
            transaction: "Transaksi",
            tokopedia: "Melayani lebih dari 2500 transaksi di Tokopedia",
            shopee: "Melayani lebih dari 3000 transaksi di Shopee",
            rating: "Peringkat",
            subrating: "Mendapatkan peringkat bintang 5 di Tokopedia dan Shopee."
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

          },

          services: {
            title: "We <em>Provide</em> The Best Service With <span>Our Tools</span>",
            subtitle: "Our Services",
            pcb1: "PCB design using Autodesk <span>Eagle</span>",
            subpcb1: "PCB design using Autodesk Eagle, files customers will receive: <i>.sch, .brd, .gerber and .pdf</i>.",
            pcb2: "PCB design using <span>Proteus</span>",
            subpcb2: "PCB design using Labcenter Proteus, files customers will receive: <i>.sch, .brd, and .pdf</i>.",
            pcb3: "Print PCB Design Layouts",
            subpcb3: "Printing PCB based on the schematic according to customer's request.",
            pcb4: "Soldering PCB Components",
            subpcb4: "Soldering PCB Components based on pcb schematic according to customer request.",

            app1: "Creating Website Applications",
            subapp1: "Uses Javascript, Node JS, HTML5, CSS, ReactJS, VueJS, PostgreSQL, and MongoDB.",
            app2: "Creating Desktop Applications",
            subapp2: "Uses Electron JS, Javascript, Node JS, HTML5, CSS, PostgreSQL and MongoDB.",
            app3: "Creating Mobile Applications",
            subapp3: "Uses React Native, Javascript, Node JS, PostgreSQL, and MongoDB.",
            app4: "Creating Mockup Design",
            subapp4: "Create an Application Mockup for Desktop or Mobile Using Figma.",
          },

          about: {
            transaction: "Transaction",
            tokopedia: "Serving more than 2500 transactions on Tokopedia.",
            shopee: "Serving more than 3000 transactions on Shopee.",
            rating: "Ratings",
            subrating: "Get a 5-star rating on Tokopedia and Shopee."

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

