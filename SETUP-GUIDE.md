# מדריך חיבור: איך לחבר את ההרשמות ל-Google Sheets

## שלב 1: יצירת Google Sheet חדש

1. היכנס ל-Google Drive שלך
2. לחץ **New** → **Google Sheets** → **Blank spreadsheet**
3. תן שם ל-Sheet: "הרשמות - דרכים לדעת"
4. השאר את השיט ריק - הכותרות יתווספו אוטומטית בהרשמה הראשונה

---

## שלב 2: יצירת Google Apps Script

1. בתוך ה-Sheet שיצרת, לחץ על:
   **Extensions** → **Apps Script**
   
2. תיפתח דפדפן חדש עם עורך קוד
   
3. מחק את כל הקוד הקיים (יש שם `function myFunction() {}`)

4. העתק והדבק את כל הקוד מהקובץ `apps-script-code.gs`

5. שמור את הפרויקט:
   - לחץ על אייקון הדיסקט 💾 או Ctrl+S
   - תן שם לפרויקט: "הרשמות - דרכים לדעת"

---

## שלב 3: פרסום ה-Script כ-Web App

1. בעורך ה-Apps Script, לחץ על:
   **Deploy** → **New deployment**

2. ליד "Select type", לחץ על גלגל השיניים ⚙️ ובחר:
   **Web app**

3. מלא את הפרטים:
   - **Description**: "הרשמות לאירועי דרכים לדעת"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
   
   ⚠️ **חשוב מאוד**: תבחר "Anyone" כדי שכולם יוכלו להירשם

4. לחץ **Deploy**

5. תקבל התראה שצריך לאשר הרשאות:
   - לחץ **Authorize access**
   - בחר את חשבון ה-Google שלך
   - לחץ **Advanced** → **Go to [Project Name] (unsafe)**
   - לחץ **Allow**

6. אחרי האישור, תקבל **Web app URL** - זה יראה כך:
   ```
   https://script.google.com/macros/s/AKfycby...../exec
   ```
   
   📋 **העתק את הקישור הזה! תצטרך אותו בשלב הבא**

---

## שלב 4: חיבור ה-HTML לסקריפט

1. פתח את הקובץ `timeline-fixed.html` בעורך טקסט

2. מצא את השורה הזאת (בערך בשורה 442):
   ```javascript
   const SCRIPT_URL = 'YOUR_SCRIPT_URL_HERE';
   ```

3. החלף את `'YOUR_SCRIPT_URL_HERE'` ב-URL שקיבלת בשלב הקודם:
   ```javascript
   const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby...../exec';
   ```

4. שמור את הקובץ

---

## שלב 5: העלאת האתר

עכשיו תוכל להעלות את הקובץ `timeline-fixed.html` לאתר שלך או לשתף אותו.

אפשרויות פשוטות להעלאה:
- **GitHub Pages** (חינמי)
- **Netlify** (חינמי)
- **Vercel** (חינמי)
- שרת משלך

---

## 🎯 בדיקה שהכל עובד

1. פתח את האתר שהעלית
2. לחץ על כפתור "רוצה להגיע" באחד האירועים
3. מלא את הפרטים ושלח
4. חזור ל-Google Sheet - אתה אמור לראות שורה חדשה עם ההרשמה!

---

## 📊 איך נראה ה-Sheet

הטבלה תיראה כך:

| תאריך      | שעה     | אירוע          | שם        | טלפון      | מספר משתתפים |
|-----------|---------|----------------|-----------|-----------|-------------|
| 18/11/2025| 14:23:15| הסוד שביחסים   | משה כהן   | 050-123-4567 | 2        |
| 18/11/2025| 15:45:30| מים אל ים      | שרה לוי   | 052-987-6543 | 1        |

---

## 🔧 פתרון בעיות נפוצות

### בעיה: "הסקריפט לא עובד"
**פתרון**: 
- וודא שהעתקת את כל ה-URL כולל `/exec` בסוף
- בדוק שבחרת "Anyone" ב-"Who has access"

### בעיה: "אני לא רואה הרשמות בשיט"
**פתרון**:
- וודא שהסקריפט פורסם (deployed)
- בדוק שאתה מסתכל על אותו שיט שחיברת לסקריפט

### בעיה: "השגיאה 'CORS policy'"
**פתרון**:
- זו לא באמת שגיאה! הקוד משתמש ב-`mode: 'no-cors'` בדיוק בשביל זה
- אם ההרשמה מופיעה בשיט, הכל עובד מצוין

---

## 🎨 התאמות אפשריות

### רוצה להוסיף שדה נוסף?

1. ב-HTML, הוסף input חדש:
```html
<div class="form-group">
    <label for="email">אימייל</label>
    <input type="email" id="email" name="email" required>
</div>
```

2. ב-JavaScript, הוסף לאובייקט formData:
```javascript
email: document.getElementById('email').value,
```

3. ב-Apps Script, הוסף לכותרות ול-appendRow:
```javascript
sheet.appendRow(['תאריך', 'שעה', 'אירוע', 'שם', 'טלפון', 'אימייל', 'מספר משתתפים']);
// ו...
sheet.appendRow([
  israeliDate,
  israeliTime,
  data.event,
  data.name,
  data.phone,
  data.email,  // <-- הוסף את זה
  data.participants
]);
```

---

## 📧 תזכורות אוטומטיות (בונוס)

אם תרצה, אפשר להוסיף פונקציה ש-Apps Script שולח לך אימייל כשמישהו נרשם:

```javascript
function sendNotification(name, event) {
  const email = "your-email@example.com";
  const subject = "הרשמה חדשה: " + event;
  const body = name + " נרשם לאירוע " + event;
  
  MailApp.sendEmail(email, subject, body);
}
```

והוסף את זה ב-doPost אחרי ה-appendRow:
```javascript
sendNotification(data.name, data.event);
```

---

## ✅ סיימת!

עכשיו יש לך מערכת הרשמות מלאה שעובדת! 🎉

כל ההרשמות נשמרות אוטומטית ב-Google Sheet שלך, ותוכל:
- לראות אותן בזמן אמת
- לייצא ל-Excel
- לשתף עם חברי הצוות
- ליצור דוחות וגרפים

בהצלחה עם האירועים! 🌟
