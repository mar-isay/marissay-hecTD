## 3. Aşama: Veritabanı Şeması Planı
Uygulamanın verileri PostgreSQL (Supabase) üzerinde aşağıdaki tablolarla yönetilecektir:

* [cite_start]**Users (Kullanıcılar):** Öğrenci numarası, şifre, isim ve bölüm bilgilerini tutar. 
* [cite_start]**Lessons (Dersler):** Uygulamadaki tüm derslerin adını, hocasını ve kredisini saklar. 
* [cite_start]**Grades (Notlar):** Hangi öğrencinin hangi dersten kaç aldığını (Vize, Final, Harf Notu) tutar. [cite: 5, 10]
* [cite_start]**Attendance (Yoklama):** Derslere katılım durumunu tarih bazlı kaydeder.