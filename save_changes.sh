#!/bin/bash

# إضافة جميع التغيرات
git add .

# التحقق من وجود تغيرات ليتم حفظها
if git diff-index --quiet HEAD --; then
    echo "لم يتم حفظ التغيرات"
    exit 0
fi

# حفظ التغيرات مع رسالة
git commit -m "حفظ جميع التغيرات في المستودع"

# دفع التغيرات إلى المستودع البعيد
git push

# فتح الصفحة بعد دفع التغيرات
xdg-open "http://your-page-url.com"
