# Reddit Rastgele Resim Çekici

Bu proje, Reddit API'sini kullanarak çeşitli subredditlerden rastgele resimler alır ve Express ve EJS ile oluşturulmuş bir web uygulamasında görüntüler.

## Özellikler

- Belirtilen subredditlerden rastgele resimler çeker.
- Sıralama seçenekleri: hot, new, top.
- Zaman filtreleme seçenekleri: saat, gün, hafta, ay, yıl, hepsi.
- Basit ve kullanımı kolay bir web arayüzü.

## Kullanılan Teknolojiler

- Node.js
- Express.js
- EJS (Gömülü JavaScript şablonları)
- Node-fetch (HTTP istekleri yapmak için)

## Kurulum

1. Depoyu klonlayın:

   ```bash
   git clone https://github.com/madtethys/reddit-api-rastgele-resim.git
   cd reddit-api-rastgele-resim
   ```

2. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Uygulamayı başlatın:

   ```bash
   node app.js
   ```

4. Web tarayıcınızı açın ve `http://localhost:3000` adresine gidin.

## Kullanım

- Ana sayfayı ziyaret ederek seçilen subredditlerden rastgele bir resmi görebilirsiniz.
- Belirli subredditleri görüntülemek için `http://localhost:3000/:subreddit_adı` adresine gidebilirsiniz.

## Örnek

- "cats" subredditinden resimler görüntülemek için `http://localhost:3000/cats` adresine gidin.

## Lisans

Bu proje MIT Lisansı ile lisanslanmıştır - detaylar için [LICENSE](LICENSE) dosyasını inceleyin.

## Katkıda Bulunma

Uygulamanın işlevselliğini veya özelliklerini geliştirmek için sorunlar veya çekme istekleri göndermekten çekinmeyin!

## Teşekkürler

- [Reddit API](https://www.reddit.com/dev/api)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)

Dilerseniz içeriği daha fazla özelleştirebilirsiniz!
