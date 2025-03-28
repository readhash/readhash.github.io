#!/bin/bash

# حفظ التغييرات
git add .

# كتابة رسالة الالتزام
git commit -m "تحديث الصفحة الرئيسية وإضافة المكتبات"

# دفع التغييرات إلى المستودع
git push origin main

# نشر سير العمل
# تأكد من أن لديك أذونات النشر وأنك في الفرع الصحيح
git checkout main
git pull origin main