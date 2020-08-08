function SetClickToWorking(){
    jQuery(".workingHover").on("click", function() {

        let key = jQuery(this).attr("key");

        ShowWorkingPlace(key)
    })
}

function ShowWorkingPlace(key)
{
    // event.preventDefault();
    let workingPlace = GetWorkingPlaceData(key);
    jQuery("#workingPlaceModalTitle")[0].innerHTML = workingPlace.header;
    jQuery("#workingPlaceModalBody")[0].innerHTML = workingPlace.detail;
    jQuery("#workingPlaceModalImage")[0].src = workingPlace.imagesource;
    jQuery("#workingPlaceModal").modal("show")
}

function GetWorkingPlaceData(key){
    for (let i = 0; i < WorkingPlaces.length; i++) {
        const element = WorkingPlaces[i];
        if (element.key == key)
            return element;
    }
}


var WorkingPlaces = [
    {
    key : "aile",
    header : "AİLE VE MİRAS HUKUKU",
    imagesource : "images/workingplaces/aile.png",
    detail : "<p>Büromuz evlilik öncesi ya da esnasında mal rejimi sözleşmelerinin düzenlenmesi yönünden müvekkillerine danışmanlık hizmeti sunmanın yanı sıra, çekişmeli boşanma davaları başta olmak üzere anlaşmalı boşanma, nafakanın kurulması, arttırılması veya kaldırılması,  tanıma ve babalık davaları, evlat edinme, velayetin değiştirilmesi, 4320 sayılı Ailenin Korunmasına Dair Kanun çerçevesinde verilecek olan uzaklaştırma ve tedbir kararları ile yabancı mahkemelerin vermiş olduğu kararların tanıma ve tenfizi, soy bağının tespiti, ve evlat edinilmesi gibi uyuşmazlıkların çözümünde hizmet sunmaktadır.<p/>" +
    "<p>Büromuz miras hukuku kapsamında tapu müdürlüğü ve bankalar nezdinde yapılacak araştırmalar sonucunda müvekkillere terekenin tespiti yönünde hizmetler sunmaktadır. Bunun haricinde Terekenin mirasçılar arasında paylaşımı konusunda da danışmanlık hizmeti vererek süreci yönetmektedir. Denkleştirme ve saklı paylara ilişkin davalar, tereke tespiti, izale-i şüyuu davaları, tapu iptali ve tescili davaları takip ettiğimiz işler arasında yer almaktadır.</p>"
    },
    {
        key : "sirket",
        header : "ŞİRKETLER VE TİCARET HUKUKU",
        imagesource : "images/workingplaces/sirket.png",
        detail : "<p> Akademi Hukuk ve Danışmanlık olarak; şirket ana sözleşmesinin hazırlanması, iş sözleşmelerinin ve benzer nitelikteki tüm sözleşmelerin hazırlanması, şirketin kurulması ve tescil edilmesi, şube ve irtibat bürosu kuruluşu, temsilci atanması ve yetkilerinin belirlenmesi, yönetim kurulu ve genel kurul toplantılarının yürütülmesi, sermaye artırım ve azaltımları, ana sözleşme değişiklikleri, halka açılma, bağlı şirketler, adres ve unvan değişiklikleri, hisse senetleri ve tahvillerle ilgili işlemler, birleşme-devralma-bölünme ve gerektiğinde şirketin tasfiyesi gibi aşamalarda şirketlere hukuki danışmalık hizmeti verilmekteyiz.<p/>"
    },
    {
        key : "sozlesme",
        header : "SÖZLEŞME VE TAZMİNAT HUKUKU",
        imagesource : "images/workingplaces/sozlesme.png",
        detail : "<p>Ofisimiz gerçek ve/veya tüzel kişiler arasında kendi iradeleri ile oluşturacakları hukuki bağların, tarafların çıkarlarına ve hakkaniyete en uygun şekilde oluşturulması hususunda dinamik kadromuz ile hizmet vermektedir. Sürecin ilerleyişi; ihtiyaçların ortaya çıkması, tekliflerin verilmesi, tekliflerin taraflarca değerlendirilmesi, tekliflerde anlaşmaya varılması, sözleşme kurulması, borçlunun yükümlülükleri, alacaklının yükümlülükleri, sözleşmenin ifası ve sözleşmenin sona ermesi şeklinde gerçekleşmektedir.<p/>" +
        "<p>Büromuz, haksız fiil neticesinde meydana gelen zarar ile destekten yoksun kalma zararının tazmini hususunda maddi-manevi her türlü zararın giderilmesi adına hukuki yardımda bulunmaktadır. Trafik kazasından, iş kazasından, haksız fiilden, sözleşmelerden, Fikri ve Sınai Mülkiyet haklarından kaynaklanan maddi-manevi tazminat davaları ile malpraktis davaları (hatalı doktor uygulamalarından kaynaklanan tazminat davaları) takip ettiğimiz işler arasında yer almaktadır.</p>"
    },
    {
        key : "is",
        header : "İŞ VE SOSYAL GÜVENLİK HUKUKU",
        imagesource : "images/workingplaces/is.png",
        detail : "<p>Ofisimiz iş hukuku kapsamında iş sözleşmeleri, toplu iş sözleşmeleri, iş yerinin devri ve iş sözleşmesinin devri, iş sözleşmesinin feshi ve işten çıkarılma hallerinde ihtar ve fesih bildirimi sürecine hukuki danışmanlık ve destek sağlanmaktadır. Aynı zamanda ofisimiz kıdem tazminatı, ihbar tazminatı, fazla mesai ücreti ve ücret alacaklarının tahsili, işe iade sürecinin yürütülmesi, iş kazası ve meslek hastalıklarına ilişkin alanlarda da hizmet vermektedir. <p/>" +
        "<p>Büromuz sosyal güvenlik hukuku kapsamında hizmet tespiti, rücuan tazminat davaları ve idari para cezaları kapsamında hukuki destek sağlamaktadır.</p>"
    },
    {
        key : "ceza",
        header : "CEZA VE CEZA MUHAKEMESI HUKUKU",
        imagesource : "images/workingplaces/ceza.png",
        detail : "<p>Akademi Hukuk ve Danışmanlık olarak bu alanda soruşturma aşamasından kovuşturmanın bitimine kadar sürecin her aşamasını büyük bir özenle takip etmekte, şüpheli/sanıklar için müdafilik, müşteki/katılanlar için vekillik hizmeti vererek müvekkillerini en iyi şekilde temsilini sağlamaktayız.<p/>" +
        "<p>Ofisimiz prensip olarak uyuşturucu ticareti ile cinsel dokunulmazlığa karşı suçlarda, kadına ve çocuğa yönelik şiddet olaylarında sanık müdafiliği yapmamaktadır. </p>"
    },
    {
        key : "bilisim",
        header : "KİŞİSEL VERİLERİN KORUNMASI VE BİLİŞİM HUKUKU",
        imagesource : "images/workingplaces/bilisim.png",
        detail : "<p>Akademi Hukuk ve Danışmanlık olarak, bilişim alanı üzerindeki gelişmelerin ışığında kişisel veriler ve bilişim hukuku ile ilgili soruşturma ve davalarda müvekkillerimizi temsil etmekte ve bu konuda hukuki danışmanlık hizmeti vermekteyiz. İnternet içerik, yer ve erişim sağlayıcıları ile ilgili olarak, internet kanalıyla yapılan marka ihlallerinin önlenmesi, bilişim sisteminin hukuka aykırı ihlali, bozulması, engellenmesi, bilişim sistemindeki verilerin kopyalanması, yok edilmesi ve müstehcenlik dahil olmak üzere kanunumuza yeni eklenmiş bilişim suçları ile her türlü hukuki mücadelenin sağlanması, e-ticaret, alan adlarına ilişkin haksız rekabet uyuşmazlıklarının giderilmesi, internet kanalıyla meydana gelen hakaret ve kişilik haklarının ihlali hallerinde hukuki destek sağlanması ve bu bağlamda erişimin engellenmesi sürecinin takibi, internet yolu ile kredi kartı hırsızlığı ve kullanımı bunlardan bazılarıdır.<p/>"
    },
    {
        key : "marka",
        header : "MARKA VE FİKRİ MÜLKİYET HUKUKU",
        imagesource : "images/workingplaces/marka.png",
        detail : "<p>Akademi Hukuk ve Danışmanlık, bu alanda her türlü hukuki ve cezai uyuşmazlığa ilişkin hukuksal destek sağlamaktadır. Marka ve Patent Haklarına Tecavüzün Tespiti, Marka Sicilinden Terkin ve İptal Davaları, Marka Haklarının İhlali, Patent Hakkında Tecavüzün Men'i, Marka Hükümsüzlüğü, Telif Hakları ve Telif Haklarının Devri ve Haksız Rekabet Davaları ve benzeri davalar dinamik kadromuz tarafından titizlikle takip edilmektedir. <p/>"
    },
    {
        key : "gayrimenkul",
        header : "GAYRİMENKUL HUKUKU",
        imagesource : "images/workingplaces/gayrimenkul.png",
        detail : "<p>Akademi Hukuk ve Danışmanlık dinamik kadrosu ile gayrimenkullerin satış sözleşmelerinin düzenlenmesi, devir işlemlerinin gerçekleştirilmesi, gayrimenkuller üzerinde ayni hakların tesis ve terkin edilmesi, tapu-sicil-kadastro müdürlüklerindeki işlemlerin takibi, tapu iptali, yolsuz tescilin düzeltilmesi, müdahalenin men’i davalarının açılması ve takibi, gayrimenkul değer tespiti, kira sözleşmelerinin tanzimi, kira bedeli tespiti ve uyarlaması davalarının açılması ve yürütülmesi, kira alacağının tahsili ve taşınmazın tahliyesi süreçlerinde müvekkillerine hukuki danışmanlık ve destek sunmaktadır.<p/>"
    },
    {
        key : "tuketici",
        header : "TÜKETİCİ HUKUKU",
        imagesource : "images/workingplaces/tuketici.png",
        detail : "<p>Ofisimiz gerek Tüketici Hakem Heyeti nezdinde gerekse Tüketici Mahkemeleri nezdinde, tüketicinin ekonomik çıkarlarını, sağlık ve güvenliğini koruyarak aynı zamanda uğradığı zararları tazmin ederek süreci ilerletmektedir ve dinamik kadrosuyla bu hususa ilişkin her türlü hukuki hizmeti sağlamaktadır. <p/>"
    },
    {
        key : "icra",
        header : "İCRA VE İFLAS HUKUKU",
        imagesource : "images/workingplaces/icra.png",
        detail : "<p>Akademi Hukuk ve Danışmanlık olarak, Hukuk dünyasındaki her türlü borç ilişkisinden doğan alacağın tahsiline yönelik hukuki sürecin yürütülmesi hizmet vermektedir. Alacakların tahsiline yönelik olarak icra ve iflas dairelerinde ilamlı, ilamsız ve kambiyo senedine dayalı takipler ile ipotek ve rehin takipleri olmak üzere tüm takip işlemlerinin yürütülmesi kapsamında borçluların mal varlıklarının tespiti, mal varlıkları üzerinde haciz tatbiki, mahcuzların satış süreci, iflas erteleme işlemleri, borçlu ile alacaklı arasında uyuşmazlığa yönelik iletişim ve uzlaşma sağlanması, icra hukuk ve icra ceza mahkemelerinde borç ilişkilerine ilişkin uyuşmazlıkların çözümlenmesi konusunda hukuki hizmeti sağlamaktadır. <p/>"
    },
    {
        key : "idare",
        header : "İDARE VE VERGİ HUKUKU",
        imagesource : "images/workingplaces/idare.png",
        detail : "<p>Ofisimiz, idarenin hukuka aykırı idari işlem ve eylemlerine karşı gerekli başvurularda bulunma ve bu başvurulara ilişkin yasal süreçlerin takibi noktalarında müvekkillerine hukuki destek sağlamaktadır. Vergi mevzuatından kaynaklı tüm hukuki uyuşmazlıkların gerek idare nezdinde ve gerek mahkemeler nezdinde takibi, 6183 sayılı Amme Alacaklarının Tahsil Usulü Hakkında Kanun gereğince tanzim edilmiş ödeme emirlerinin iptallerine yönelik yasal işlemlerin takibi başlıca faaliyet alanlarımızdandır.<p/>"
    },
    {
        key : "uyusmazlik",
        header : "ALTERNATİF UYUŞMAZLIK ÇÖZÜM YOLLARI",
        imagesource : "images/workingplaces/uyusmazlik.png",
        detail : "<p>Akademi Hukuk ve Danışmanlık olarak, uyuşmazlıkların çözümü için dava dışı süreçleri de aktif şekilde yürütmekteyiz. Bu kapsamda ulusal ve uluslararası tahkim ve hakem heyeti süreçlerinin yürütülmesi ile arabuluculuk faaliyetlerinde hukuki hizmet sağlamaktayız.<p/>"
    },
]