// Import Gambar
import logologin from "./logologin.png"
import onsale from "./onsale.png"
import best1 from "./best1.jpg"
import best2 from "./best2.jpg"
import best3 from "./best3.jpg"
import schoolputih from "./schoolputih.jpg"
import schoolhitam from "./schoolhitam.jpg"
import schoolhitput from "./schoolhitput.jpg"
import original from "./original.jpg"
import mensok from "./mensok.jpg"
import kidsa from "./kidsa.jpg"
import jempolmisty from "./jempolmisty.jpg"
import kismis from "./kismis.jpg"
import customBanner from "./customBanner.png"
import mandiri from "./mandiri.png"
import bni from "./bni.png"
import gopay from "./gopay.png"
import visa from "./visa.png"
import bca from "./bca.png"
import hoverhitput from "./hoverhitput.jpg"
import hoverkidsa from "./hoverkidsa.jpg"
import hoverOri from "./hoverOri.jpg"
import hoverkismis from "./hoverkismis.jpg"
import rilex from "./rilex.jpg"
import hoverRilex from "./hoverRilex.jpg"
import balet from "./balet.jpg"
import hoverBalet from "./hoverBalet.jpg"
import motif from "./motif.png"
import hovermotif from "./hovermotif.jpg"
import fs from "./fs.jpg"
import hoverFs from "./hoverFs.jpg"
import wupol from "./wupol.jpg"
import hoverWupol from "./hoverWupol.jpg"
import antilicin from "./antilicin.jpg"
import hoverAnti from "./hoverAnti.jpg"
import wudhuTelapak from "./wudhutelapak.jpg"
import hoverWutak from "./hoverWutak.jpg"
import saqeena from "./saqeena.jpg"
import hoverSaqeena from "./hoverSaqeena.jpg"
import basicIn from "./basicIn.jpg"
import hoverInbase from "./hoverInbase.jpg"
import inWupol from "./inWupol.jpg"
import hoverInwup from './hoverInwup.jpg'
import legging from './legging.jpg'
import hoverLeg from "./hoverLeg.jpg"
import cfs from "./cfs.jpg"
import hoverCfs from "./hoverCfs.jpg"
import iconBasic from "./iconBasic.jpg"
import iconComplement from "./iconComplement.jpg"
import iconInfinity from "./iconInfinity.jpg"
import iconInovate from "./iconInovate.jpg"
import paketumroh from "./paketumroh.jpg"
import hoverUmroh from "./hoverUmroh.jpg"
import pakethampers from "./pakethampers.jpg"
import hoverHampers from "./hoverHampers.jpg"
// Export Gambar Biasa

export {
  logologin,
  onsale,
  best1,
  best2,
  best3,
  schoolputih,
  schoolhitam,
  schoolhitput,
  original,
  mensok,
  kidsa,
  jempolmisty,
  kismis,
  customBanner,
  mandiri,
  bni,
  visa,
  gopay,
  bca,
  hoverhitput,
  hoverkidsa,
  hoverkismis,
  hoverOri,
  rilex,
  hoverRilex,
  balet,
  hoverBalet,
  motif,
  hovermotif,
  fs,
  hoverFs, wupol, hoverWupol, antilicin, hoverAnti, wudhuTelapak, hoverWutak, saqeena, hoverSaqeena, basicIn, hoverInbase,
  hoverInwup, inWupol, legging, hoverLeg, cfs, hoverCfs, iconBasic, iconComplement, iconInfinity, iconInovate, paketumroh, pakethampers,
  hoverHampers, hoverUmroh
}

// Export Data Produk per Kategori
export const categories = [
  {
    slug: 'basic',
    name: 'Basic',
    products: [
      { id: 1, name: 'School hitam putih', price: 30000, image: schoolhitput },
      { id: 2, name: 'School putih', price: 30000, image: schoolputih },
      { id: 3, name: 'School hitam', price: 30000, image: schoolhitam },
      { id: 4, name: 'Mensak', price: 35000, image: mensok },
      { id: 5, name: 'Misty jempol', price: 35000, image: jempolmisty },
      { id: 6, name: 'Kidsa', price: 32000, image: kidsa },
      { id: 7, name: 'Original', price: 40000, image: original },
      { id: 8, name: 'Jempol', price: 35000, image: null },
      { id: 9, name: 'Wudhu', price: 35000, image: null },
      { id: 10, name: 'Jempol telapak misty', price: 35000, image: null },
      { id: 11, name: 'Kanik kismis (Kaus kaki super ekonomis)', price: 25000, image: kismis }
    ]
  },
  {
    slug: 'infinity',
    name: 'Infinity',
    products: [
      { id: 12, name: 'All motif', price: 45000, image: null },
      { id: 13, name: 'Rilex sandal, flat shoes, balet socks', price: 40000, image: null }
    ]
  },
  {
    slug: 'innovate',
    name: 'Innovate',
    products: [
      { id: 14, name: 'Anti licin', price: 50000, image: null },
      { id: 15, name: 'Wupol', price: 55000, image: null },
      { id: 16, name: 'Saqeena socks', price: 60000, image: null }
    ]
  },
  {
    slug: 'complement',
    name: 'Complement',
    products: [
      { id: 17, name: 'Inner pants basic', price: 70000, image: null },
      { id: 18, name: 'Inner pants wupol', price: 75000, image: null },
      { id: 19, name: 'Legging pants', price: 80000, image: null },
      { id: 20, name: 'Flat shoes jempol emoji series', price: 85000, image: null }
    ]
  }
]
