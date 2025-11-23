# 🚀 הוראות העלאה ל-GitHub ופריסה

## שיטה 1: העלאה ידנית דרך הממשק של GitHub (הכי פשוטה!)

### צעד 1: צור repository חדש
1. היכנס ל-GitHub.com
2. לחץ על הכפתור הירוק **"New"** או **"+"** → **"New repository"**
3. תן שם: `drachim-ladaat-events` (או כל שם אחר שתרצה)
4. הוסף תיאור: "אתר אירועי דרכים לדעת - תשפ״ו"
5. **חשוב:** סמן **"Public"** (כדי להשתמש ב-GitHub Pages בחינם)
6. אל תסמן "Initialize with README" (כי כבר יש לנו)
7. לחץ **"Create repository"**

### צעד 2: העלה את הקבצים
1. בדף ה-repository החדש, לחץ על **"uploading an existing file"**
2. גרור את כל הקבצים מה-ZIP (או לחץ "choose your files")
   - `index.html`
   - `README.md`
   - `.gitignore`
   - `DEPLOYMENT.md` (זה הקובץ הזה)
3. הוסף הודעת commit: "Initial commit - אתר אירועי דרכים לדעת"
4. לחץ **"Commit changes"**

### צעד 3: הפעל GitHub Pages
1. בתפריט העליון, לחץ על **"Settings"**
2. בתפריט הצד, לחץ על **"Pages"** (תחת "Code and automation")
3. תחת "Source", בחר **"Deploy from a branch"**
4. תחת "Branch", בחר **"main"** ו-**"/ (root)"**
5. לחץ **"Save"**

### צעד 4: קבל את הקישור!
אחרי כמה דקות (בדרך כלל פחות מדקה), תראה הודעה:
```
✅ Your site is live at https://YOUR-USERNAME.github.io/drachim-ladaat-events/
```

**זהו! האתר שלך חי! 🎉**

---

## שיטה 2: העלאה דרך Git (למתקדמים)

### צעד 1: התקן Git (אם אין לך)
- **Windows:** הורד מ-https://git-scm.com/
- **Mac:** `brew install git`
- **Linux:** `sudo apt install git`

### צעד 2: הגדר Git (בפעם הראשונה)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### צעד 3: צור repository ב-GitHub
1. היכנס ל-GitHub.com
2. צור repository חדש (ראה שיטה 1, צעד 1)
3. **אל תאתחל עם README** (כי יש לנו כבר)

### צעד 4: העלה מהטרמינל
```bash
# פתח טרמינל בתיקייה של הפרויקט
cd path/to/drachim-ladaat-events

# אתחל Git
git init

# הוסף את כל הקבצים
git add .

# צור commit ראשוני
git commit -m "Initial commit - אתר אירועי דרכים לדעת"

# קשר ל-repository המרוחק (החלף YOUR-USERNAME בשם המשתמש שלך)
git remote add origin https://github.com/YOUR-USERNAME/drachim-ladaat-events.git

# העלה
git push -u origin main
```

### צעד 5: הפעל GitHub Pages
ראה שיטה 1, צעד 3

---

## 🔧 בעיות נפוצות

### "העמוד לא נטען"
- וודא שהקובץ נקרא `index.html` (לא `timeline-READY.html`)
- חכה 2-3 דקות ורענן

### "הכפתורים לא עובדים"
- וודא שה-SCRIPT_URL בקובץ תקין
- בדוק ב-Console של הדפדפן (F12) אם יש שגיאות

### "אין לי הרשאות"
- וודא שה-repository מוגדר ל-Public
- בדוק שיש לך הרשאות בחשבון GitHub

---

## 🎯 צ'קליסט מהיר

- [ ] יצרתי repository ב-GitHub
- [ ] העליתי את הקבצים (index.html, README.md, וכו')
- [ ] הפעלתי GitHub Pages בהגדרות
- [ ] חיכיתי 2-3 דקות
- [ ] האתר עובד! 🎉

---

## 📝 שינויים עתידיים

כשתרצה לשנות משהו באתר:

1. ערוך את `index.html` מקומית
2. העלה שוב ל-GitHub (דרך הממשק או Git)
3. השינויים יופיעו אוטומטית תוך דקות ספורות

---

## 🌟 טיפ פרו

אחרי שהאתר חי, עדכן את ה-README.md:
- החלף `https://YOUR-USERNAME.github.io/drachim-ladaat-events/`
- עם הקישור האמיתי שלך

---

בהצלחה! 🚀
אם משהו לא עובד, יש לך את TROUBLESHOOTING.md עם פתרונות לכל הבעיות.
