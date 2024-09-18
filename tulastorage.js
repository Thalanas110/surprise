const poems = 
[
`Sa unang pagkakataong kita'y nasilayan,
Parang mundo'y tumigil, lahat ay kapayapaan,
Ngiti mo'y liwanag na bumihag sa akin,
Isang sandaling hindi ko malilimutan kailanman.

Hindi ko inasahan, ika'y darating,
Sa simpleng pagkakataon, puso'y nahulog na rin,
Sa bawat hakbang, tila may himig ang hangin,
Damdamin ko'y unti-unting gumuguhit sa'yo, sapin-sapin.

Mga mata mo'y may lihim na kuwento,
Na tila ako lang ang nais mong ipakita ng totoo,
Sa bawat titig, puso ko'y bumilis,
Ito ba'y pag-ibig, o isang panaginip na tila may halik?

Sa unang pagkikita, lahat ay nag-iba,
Buhay ko'y nagkaroon ng kulay at saya,
Sana'y magtagal ang ating samahan,
Pagkat sa unang tingin, ikaw ang sagot sa kalungkutan.`,

`Nang una kitang makausap, puso ko'y kabado,
Bawat salita, parang musika sa pandinig ko,
Simplicitya mo'y nakakaakit, walang kapantay,
Sa bawat saglit, puso ko'y unti-unting bumibigay.

Tila baga ang oras ay bumagal,
Sa iyong tinig, lahat ng takot ay humupa’t naglaho,
Mga salita mo'y may bigat at lalim,
Parang kapalaran ang naglapit sa'ting mga damdamin.

Sa iyong mga kwento, ako'y nahulog,
Hindi lang sa ganda mo, kundi sa puso mong malambot,
Sa bawat hakbang ng ating pag-uusap,
Nariyan ang saya, ang damdamin ko'y pumailanlang sa ulap.

Hindi ko malilimutan ang unang usapan,
Isang simula ng ating samahan,
Sana'y magpatuloy, sana'y di maglaho,
Pagkat sa unang salita mo, ako'y humanga ng todo.`,

`Sa hinaharap, nais kong mas mapalapit,
Sa'yo, sa damdamin, sa mga pangarap na hitik,
Hangad ko'y magkasama, magkapit-bisig,
Sa bawat unos, laging magkatulong sa pag-ibig.

Sana'y walang hadlang sa ating landas,
Kahit anong mangyari, tayo'y magtutulungan ng lubos,
Sa bawat hakbang ng buhay na tatahakin,
Nais kong laging kasama, palaging nasa tabi mo't kapiling.

Sa lahat ng pagsubok na maaaring dumating,
Hawak-kamay, walang iwanan, laging magkasiping,
Ang pag-asa ko'y ikaw, ang gabay ko'y ikaw,
Sa pagbuo ng ating bukas, nais kong masalamin ka sa araw.

Sa hinaharap, hangad ko'y kaligayahan,
Hindi lang sa akin, kundi sa'yong kapakanan,
Sana'y mas mapalapit pa tayo sa isa't isa,
Pagkat ikaw ang hinaharap na nais kong kasama.`
];

function displayPoem(poemNumber) 
{
    document.getElementById('poemText').innerText = poems[poemNumber];
}
