#!/bin/bash

# إضافة جميع التغيرات
git add .

# التحقق من وجود تغيرات ليتم حفظها
if git diff-index --quiet HEAD --; then
    echo "لم يتم حفظ التغيرات"
    exit 0
fi

# حفظ التغيرات مع رسالة
git commit -m "حفظ جميع التغيرات في المستودع المحلي"

# دفع التغيرات إلى المستودع البعيد
git push

# بناء الموقع بعد دفع التغيرات
npm run build

# نشر الموقع بعد البناء
npm run deploy

# فتح الصفحة بعد دفع التغيرات
xdg-open "http://your-page-url.com"

echo "New line added to save_changes.sh"
