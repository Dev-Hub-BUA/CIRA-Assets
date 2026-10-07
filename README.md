# CIRA Assets Management Dashboard 🏢

نظام مركزي متكامل لإدارة وحوكمة الأصول المدرسية والجامعية لمجموعة **CIRA Education**.

---

## 🚀 النشر على GitHub Pages (Deployment Guide)

المشروع مُهيأ وجاهز بالكامل للنشر الفوري على **GitHub Pages** بنسبة 100%:

### خطوات الرفع لأول مرة:
1. افتح موجه الأوامر (Terminal / PowerShell) في مجلد المشروع.
2. أضف الملفات واعمل أول Commit:
   ```bash
   git add .
   git commit -m "Initial release of CIRA Assets Dashboard"
   ```
3. اربط المشروع بمستودع GitHub الخاص بك (مع استبدال الرابط برابط المستودع الخاص بك):
   ```bash
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
4. **تفعيل GitHub Pages من إعدادات المستودع**:
   - اذهب إلى صفحة المستودع على GitHub: **Settings** > **Pages** (في القائمة الجانبية).
   - تحت قسم **Build and deployment**:
     - **Source**: اختر `Deploy from a branch`
     - **Branch**: اختر `main` واجعل المجلد `/ (root)`
     - اضغط **Save**.
5. خلال دقيقة إلى دقيقتين، سيظهر لك الرابط المباشر للموقع المنشور:
   `https://<USERNAME>.github.io/<REPO_NAME>/`

---

## 📁 هيكل وتنظيم الملفات (Project Structure)

```text
CIRA/
├── .nojekyll           # ضروري لـ GitHub Pages لتعطيل محرك Jekyll وقراءة كافة الملفات والأصول
├── .gitignore          # استثناء الملفات المؤقتة والمهملات
├── 404.html            # صفحة الخطأ المخصصة لـ GitHub Pages مع إعادة التوجيه التلقائي
├── index.html          # نقطة الدخول الرئيسية للوحة التحكم (Dashboard & App Shell)
├── login.html          # بوابة تسجيل الدخول المعتمدة
├── auth-guard.js       # حارس الأمان الشامل للتحقق من الجلسة في كافة الصفحات
├── support.js          # المحرك التشغيلي للمكونات والتفاعل
├── package.json        # تعريف المشروع وأوامر التشغيل المحلية
├── README.md           # دليل التشغيل والنشر
│
├── assets/             # مجلد الأصول الثابتة
│   ├── logo.png        # شعار CIRA
│   ├── fonts.css       # تنسيقات الخطوط (IBM Plex)
│   ├── fonts/          # ملفات خطوط Woff2
│   ├── react.production.min.js
│   └── react-dom.production.min.js
│
└── *.dc.html           # شاشات ومكونات النظام الفرعية
    ├── Assets.dc.html       # سجل الأصول
    ├── Scan.dc.html         # مسح الباركود و QR
    ├── Locations.dc.html    # المواقع والمباني
    ├── Assignments.dc.html  # العهد والتسليمات
    ├── Maintenance.dc.html  # الصيانة والإصلاح
    ├── Audits.dc.html       # الجرد والتدقيق
    ├── Reports.dc.html      # التقارير والإحصائيات
    └── Settings.dc.html     # الإعدادات والصلاحيات
```

---

## 🔐 بيانات الدخول الافتراضية (Credentials)

| الحقل | القيمة الافتراضية |
| :--- | :--- |
| **البريد الإلكتروني** | `admin@cira.edu.eg` |
| **كلمة المرور** | `cira@2026` |

- لن يُسمح لأي زائر بفتح لوحة التحكم أو أي صفحة فرعية دون تسجيل الدخول مسبقاً.
- عند تسجيل الخروج يتم مسح الجلسة والعودة مباشرة لشاشة الدخول.
