
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
            title: 'Selamat Datang di Anlimitid Tech',
            subtitle1: 'Rancang <em>PCB</em> atau Bangun <em>Aplikasi</em> terbaik <span>Anda</span>.',
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
            title: 'Terpercaya',
            subtitle1: 'Kepercayaan <em>Pelanggan</em> kepada <span>Kami</span>',
            subtitle2: 'Kami telah melayani lebih dari 5000 pelanggan dan mereka sangat puas dengan layanan kami.',
            readMore: 'Lihat Proyek Terbaru',
          },

          nav: {
            home: "Beranda",
            services: "Layanan",
            about: "Tentang",
            portfolio: "Portofolio",
            testimony: "Kesaksian",
            pricing: "Harga",
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
            app4: "Membuat Desain Maket",
            subapp4: "Membuat Maket Aplikasi untuk Desktop atau Mobile Menggunakan Figma.",
          },

          about: {
            title: "Rancang <span>PCB Terbaik</span> Anda atau Bangun <em>Aplikasi</em> Anda Dengan Anlimitid Tech",
            subtitle: "Anlimitid Tech adalah perusahaan penyedia layanan yang selalu memberikan layanan terbaik untuk pelanggannya di Indonesia.",
            transaction: "Transaksi",
            tokopedia: "Melayani lebih dari 2500 transaksi di Tokopedia",
            shopee: "Melayani lebih dari 3000 transaksi di Shopee",
            rating: "Peringkat",
            subrating: "Mendapatkan peringkat bintang 5 di Tokopedia dan Shopee."
          },

          portfolio: {
            title: "<em>Proyek</em> &amp; Studi Kasus Terbaru Kami <span>Untuk Klien</span>",
            subtitle: "PORTOFOLIO KAMI",
            a1: "Tata Letak Atas Layar Sutra",
            a2: "Rangkaian Komponen Raspberry Pi.",
            b1: "Aplikasi Situs Web  Binatu",
            b2: "Aplikasi situs Web Laundry, dibangun menggunakan React JS.",
            c1: "Skema",
            c2: "Skema Raspberry Pi.",
            d1: "Aplikasi Seluler Binatu",
            d2: "Aplikasi Seluler Batu, dibuat menggunakan React Native.",
          },

          testimoni: {
            title: `Testimoni Pelanggan`,
            c1: `<i class="fas fa-quote-left pe-2"></i>Mantap... Pengerjaan sangat cepat... Recommended lah pokoknya`,
            c2: `<i class="fas fa-quote-left pe-2"></i>Hasil bagus, penjual sangat ramah dan cepat merespon`,
            c3:`<i class="fas fa-quote-left pe-2"></i>Penjual sangat ramah enak di ajak diskusi. hasil desain sangat bagus, rencana mau order lagi. recommended seller... `,
            c4: `<i class="fas fa-quote-left pe-2"></i>pelayanan sellernya oke dan sabar bgt, pengerjaan layout-nya juga cepat dan rapi. terimakasih`,
            c5: `<i class="fas fa-quote-left pe-2"></i>Pelayanan mantap pokoknya. Jangan ragu buat yg mau buat desain pcb di sini. Recommended.`,
            c6: `<i class="fas fa-quote-left pe-2"></i>Proses cepat respon penjual sangat baik.`
          },

          price: {
            title: "Pilih Layanan dan Harga Yang Sesuai Dengan Proyek Anda",
            subtitle: "Harga Layanan Kami",
            start: "Mulai dari",

            pcb1: "Mendesain PCB",
            pcb2: '<i class="fa-solid fa-rupiah-sign"></i> 20.000',
            pcb3: '<i class="fa-solid fa-rupiah-sign"></i> 10.000',
            pcb4: `<li>File Gerber</li><li>File Eagle/ Proteus</li><li>File PDF</li><li>File PCB 2 dimensi/ PCB Fisik</li>`,

            app1: "Membangun Aplikasi / Maket",
            app2: '<i class="fa-solid fa-rupiah-sign"></i> 20.000',
            app3: '<i class="fa-solid fa-rupiah-sign"></i> 10.000',
            app4: `<li>File Web App/ Desktop App/ Seluler App</li><li>File Figma</li><li>File PDF sebagai petunjuk instalasi</li><li>File Query ata Basis Data</li>`,
            beli: `Beli Sekarang`

          },

          maps: {
            title: `Jangan Ragu Untuk <em>Menghubungi</em> atau datang ke kantor kami di <span>alamat</span> yang tertera.`,
            send: `Kirim`
          },

          our: `Tim Kami`,

          faq: {
            title: `Ada pertanyaan ?`,
            subtitle: `Jika Ada Pertanyaan, Hubungi Kami Lebih Lanjut.`
          },

          copyright: `Hak Cipta © 2022 Anlimitid Tech Co., Ltd. Semua Hak Dilindungi Undang-Undang. <br> Dirancang Oleh <a rel="nofollow" href="https://github.com/abaz1d">Abdul Aziz</a><br>`

        }
      },
      en: {
        translation: {
          banner1: {
            title: 'Welcome to Anlimitid Tech',
            subtitle1: "Design <span>your</span> best <em>PCB</em> or build a <em>Applications</em>.",
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
            title: 'Trusted',
            subtitle1: 'Customer <em>Trust</em> to <span>Us</span>.',
            subtitle2: 'We have served more than 5000 customers and they are very satisfied with our service.',
            readMore: 'View Recent Projects'
          },

          nav: {
            home: "Home",
            services: "Services",
            about: "About",
            portfolio: "Portfolio",
            testimony: "Testimony",
            pricing: "Pricing",
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
            title: "Design Your <span>Best PCB</span> or Build Your <em>Applications</em> With Anlimitid Tech",
            subtitle: "Anlimitid Tech is a service provider company that always provides the best service for its customers in Indonesia.",
            transaction: "Transactios",
            tokopedia: "Serving more than 2500 transactions on Tokopedia.",
            shopee: "Serving more than 3000 transactions on Shopee.",
            rating: "Ratings",
            subrating: "Get a 5-star rating on Tokopedia and Shopee."

          },

          portfolio: {
            title: "Our Recent <em>Projects</em> &amp; Case Studies <span>for Clients</span>",
            subtitle: "OUR PORTFOLIO",
            a1: "Silkscreen Top Layout",
            a2: "Raspberry Pi Component Suite.",
            b1: "Laundry Website Application",
            b2: "Laundry Website Application, built using React JS.",
            c1: "Schematic",
            c2: "Raspberry Pi Schematic.",
            d1: "Laundry Mobile Application",
            d2: "Laundry Mobile App, built using React Native.",
          },

          testimoni: {
            title: `Customer Testimonials`,
            c1: `<i class="fas fa-quote-left pe-2"></i>Great... Very fast work... Recommended anyway`,
            c2: `<i class="fas fa-quote-left pe-2"></i>Good results, the seller is very friendly and responds quickly.`,
            c3:`<i class="fas fa-quote-left pe-2"></i>The seller is very friendly nice to talk to. the design is very good, plan to order again. recommended seller...`,
            c4: `<i class="fas fa-quote-left pe-2"></i>The seller's service is okay and very patient, the layout work is also fast and neat. thank you.`,
            c5: `<i class="fas fa-quote-left pe-2"></i>Steady service anyway. Don't hesitate for those who want to make PCB designs here. Recommended.`,
            c6: `<i class="fas fa-quote-left pe-2"></i>The seller's response is very fast.`
          },

          price: {
            title: "Choose a <span>Service</span> and <em>Price</em> That Fits Your Project",
            subtitle: "Our Service Prices",
            start: "Starting from",

            pcb1: "PCB Design",
            pcb2: '<i class="fa-solid fa-rupiah-sign"></i> 20.000',
            pcb3: '<i class="fa-solid fa-rupiah-sign"></i> 10.000',
            pcb4: `<li>Gerber File</li><li>Eagle/ Proteus File</li><li>PDF File</li><li>PCB 2 dimensions/ Physical PCB</li>`,

            app1: "Build Application / Mock-up",
            app2: '<i class="fa-solid fa-rupiah-sign"></i> 20.000',
            app3: '<i class="fa-solid fa-rupiah-sign"></i> 10.000',
            app4: `<li>Web App/ Desktop App/ Mobile App File</li><li>Figma File</li><li>PDF File as installation instructions</li><li>Query or Database Files</li>`,

            beli: `Buy Now`
          },

          maps: {
            title: `Feel free to <em>Contact</em> us or come to our office at <span>the address</span> listed. `,
            send: `Submit`
          },
          
          our: `Our Team`,

          faq: {
            title: `Have Any Questions ?`,
            subtitle: `If You Have Questions, Contact Us Further.`
          },

          copyright: `Copyright © 2022 Anlimitid Tech Co., Ltd. All Rights Reserved. <br> Designed by <a rel="nofollow" href="https://github.com/abaz1d">Abdul Aziz</a><br>`
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

