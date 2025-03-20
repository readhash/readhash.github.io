#!/bin/bash

# إعداد المتغيرات
REPO="readhash/readhash.github.io"
BRANCH="main"
COMMIT_MESSAGE="نشر الموقع"

# بناء الموقع
echo "بناء الموقع..."
# أضف هنا أوامر بناء الموقع إذا كانت موجودة

# إضافة جميع الملفات وتقديم التغييرات
echo "إضافة الملفات وتقديم التغييرات..."
git add .
git commit -m "$COMMIT_MESSAGE"

# دفع التغييرات إلى المستودع
echo "دفع التغييرات إلى المستودع..."
git push origin $BRANCH

echo "تم نشر الموقع بنجاح!"
