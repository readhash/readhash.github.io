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

# التحقق من المستودع بشكل لحظي
while true; do
    git fetch
    LOCAL=$(git rev-parse @)
    REMOTE=$(git rev-parse @{u})
    BASE=$(git merge-base @ @{u})

    if [ $LOCAL = $REMOTE ]; then
        echo "المستودع محدث"
    elif [ $LOCAL = $BASE ]; then
        echo "يجب دفع التغييرات"
        git push
    elif [ $REMOTE = $BASE ]; then
        echo "يجب سحب التغييرات"
        git pull
    else
        echo "المستودع في حالة غير متوقعة"
    fi
    sleep 60
done

# بناء الموقع بعد دفع التغيرات
npm run build

# نشر الموقع بعد البناء
npm run deploy

# اختبار الموقع بعد النشر
npm test

# فتح الصفحة بعد دفع التغيرات
xdg-open "hashread/hashread.github.io"

echo "تم حفظ جميع التعديلات الأخيرة وتصحيح الأخطاء ونشر الصفحة على الرابط المحدد"
